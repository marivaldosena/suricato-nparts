<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class AuthController extends Controller
{
    private $rules = [
        'email' => 'required|email',
        'password' => 'required'
    ];

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh']]);
    }

    /**
     * Login user and return a token
     */
    public function login(Request $request)
    {
        $this->validate($request, $this->rules);

        $credentials = request(['email', 'password']);

        $user = User::where('email', $credentials['email'])->firstOrFail();

        if(!$user->email_verified_at){
            return response()->json(['message' => 'verify'], 401);
        }

        if(!$user->status){
            return response()->json(['message' => 'deactivated'], 401);
        }

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['message' => 'password'], 401);
        }

        return response()->json([
            'status' => 'success',
            'user' => auth()->user(),
        ], 200)->header('Authorization', $token);
    }

    /**
     * Logout User
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json([
            'status' => 'success',
            'msg' => 'Logged out Successfully.'
        ], 200);
    }

    /**
     * Get authenticated user
     */
    public function me()
    {
        $user = User::find(auth()->user()->id);

        return response()->json([
            'status' => 'success',
            'data' => $user
        ]);
    }

    /**
     * Refresh JWT token
     */
    public function refresh()
    {
        if ($token = $this->guard()->refresh()) {
            return response()
                ->json(['status' => 'successs'], 200)
                ->header('Authorization', $token);
        }
        return response()->json(['error' => 'refresh_token_error'], 401);
    }

    /**
     * Return auth guard
     */
    private function guard()
    {
        return auth()->guard();
    }
}
