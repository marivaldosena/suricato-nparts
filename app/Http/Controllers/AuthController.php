<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        // TODO - utilizar validate e suas regras???

        if(request()->has(['email', 'password'])){
            $credentials = request(['email', 'password']);

            $user = User::where('email', $credentials['email'])->first();

            if(!$user){
                return response()->json(['message' => __('login.invalid.user')], 404);
            }

            if(!$user->email_verified_at){
                return response()->json(['message' => __('login.verify')], 401);
            }

            if(!$user->status){
                return response()->json(['message' => 'conta desabilitada'], 401);
            }

            if (!$token = auth()->attempt($credentials)) {
                return response()->json(['message' => __('login.invalid.password')], 401);
            }

            return $this->respondWithToken($token);
        }else{
            return response()->json(['message' => __('login.required.both')], 400);
        }
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => __('login.logout')]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}

