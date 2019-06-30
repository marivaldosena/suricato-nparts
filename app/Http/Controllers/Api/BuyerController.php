<?php

namespace App\Http\Controllers\Api;

use App\Buyer;
use App\Http\Resources\BuyerResource;
use App\Mail\CreatePasswordMail;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class BuyerController extends Controller
{
    // todo - criar um repositorio para dispor essa e outras rules
    private $rules = [
        'name' => 'required|min:3',
        'email' => 'required|email',
        'password' => 'required|min:6|confirmed|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
    ];

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['store',]]);
    }

    /**
     * Display a listing of the Customers.
     * @return ResourceCollection
     */
    public function index()
    {
        return BuyerResource::collection(Buyer::with('user')->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->rules);

        DB::beginTransaction();
        try{
            $password = bcrypt(Str::random(15));
            $verifyToken = Str::random(60);

            $user = User::firstOrCreate(['email' => $request->email,],[
                'name' => $request->name,
                'password' => $password,
                'type' => 'buyer',
                'email_verify_token' => $verifyToken,
                'status' => '0',
            ]);

            $buyer = Buyer::create([
                'user_id' => $user->id,
                'cpf' => $request->cpf,
                'rg' => $request->rg,
                'birthday' => $request->birthday,
                'gender' => $request->gender,
            ]);

            Mail::to($user)->queue(new CreatePasswordMail($user));

            DB::commit();
            return response('', 201);
        }catch (\Throwable $throwable){
            DB::rollBack();
            return response()->json(['message' => $throwable->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return BuyerResource
     */
    public function show($id)
    {
        return new BuyerResource(Buyer::with('user')->findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        // todo - utilizar o repositorio, de repente, com base no tipo do request, remover determinadas rules
        $rules = $this->rules;
        unset($rules['password']);

        $this->validate($request, $rules);

        DB::beginTransaction();
        try{

            $user = User::findOrFail($id);
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            $buyer = $user->buyer();
            $buyer->update([
                'cpf' => $request->cpf,
                'rg' => $request->rg,
                'birthday' => $request->birthday,
                'gender' => $request->gender,
            ]);

            DB::commit();
            return response('', 204);
        }catch (\Throwable $throwable){
            DB::rollBack();
            return response()->json(['message' => $throwable->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response('', 204);
    }
}
