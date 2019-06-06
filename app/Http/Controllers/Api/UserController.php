<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\UserResource;
use App\User;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    private $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email',
//        'password' => 'required|min:6|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
        'type' => 'required'
    ];

    /**
     * Display a listing of the Users.
     *
     * @return ResourceCollection
     */
    public function index()
    {
        return UserResource::collection(User::paginate(10));
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

        // TODO - Enviar email de confirmação
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->type = $request->type;

        $user->save();

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
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->type = $request->type;

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
}
