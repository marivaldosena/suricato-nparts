<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserResource;
use App\Mail\CreatePasswordMail;
use App\Mail\VerifyMail;
use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

// todo - esse endpoint só é acessível por um admin
class UserController extends Controller
{
    private $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email',
//        'password' => 'required|min:6|confirmed|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
//        'type' => 'required|regex:/^(admin)$/'
    ];

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store', 'verify', 'createPassword']]);
    }

    /**
     * Display a listing of the Users.
     *
     * @return ResourceCollection
     */
    public function index()
    {
        $users = User::where('id', '<>', auth()->user()->id)
            ->where('type', 'admin')
            ->paginate(10);

        return UserResource::collection($users);
    }

    /**
     * Store a newly created User in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->rules);

        $exists = User::where('email', $request->email)->first();

        if ($exists) {
            return response()->json(['message' => 'This email is already registered.'], 409);
        }

        $password = bcrypt(Str::random(15));
        $verifyToken = Str::random(60);

        // todo - se o usuario ja existe, nao devemos deixar cadastrar... ?
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $password,
            'type' => 'admin',
            'email_verify_token' => $verifyToken,
            'status' => '0',
        ]);

        $user->save();

        Mail::to($user)->queue(new CreatePasswordMail($user));

        return response(null, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResource
     */
    public function show($id)
    {
        return new UserResource(User::findOrFail($id));
    }

    /**
     * Update the specified User in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        $rules = $this->rules;
        unset($rules['password']);

        $this->validate($request, $rules);

        $user = User::findOrFail($id);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        $user->save();

        return response(null, 204);
    }

    /**
     * Remove the specified User from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        return response(null, 204);
    }

    /**
     * Verify user account email
     *
     * @param  string $token
     * @return \Illuminate\Http\Response
    */
    public function verify($token)
    {
        $user = User::where('email_verify_token', $token)->first();

        if($user && !$user->email_verified_at){
            $user->update([
                'email_verify_token' => null,
                'email_verified_at' => now(),
                'status' => '1'
            ]);

            $user->save();

            return response(null, 204);
        }

        return response(null, 404);
    }

    /**
     * Auto verify user account email and create a new password.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string $token
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
    */
    public function createPassword(Request $request, $token)
    {
        $rules = [
            'password' => $this->rules['password'],
        ];
        $this->validate($request, $rules);

        $user = User::where('email_verify_token', $token)->first();

        if(!$user->email_verified_at){
            $user->update([
                'password' => bcrypt($request->password),
                'email_verify_token' => null,
                'email_verified_at' => now(),
                'status' => '1'
            ]);

            $user->save();

            return response(null, 204);
        }

        return response(null, 404);
    }

    public function status(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->update([
            'status' => $request->status,
        ]);

        $user->save();

        return response(null, 204);
    }

    public function unusedUsers($type, $name = null)
    {
        $users = User::whereDoesntHave('customer')
            ->where('type', $type);

        if($name){
            $users->where('name', 'like', "%{$name}%");
        }

        $users = $users->get();

        return UserResource::collection($users);
    }
}
