<?php

namespace App\Http\Controllers\Api;

use App\Mail\ResetPasswordMail;
use App\PasswordReset;
use App\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    /**
     * Store a password reset request
     *
     * If user email doesn't exists on users table,
     * response with 404
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)
            ->where('status', '1')->firstOrFail();

        $token = Str::random(60);

        $passwordReset = new PasswordReset();
        $passwordReset->email = $request->email;
        $passwordReset->token = $token;
        $passwordReset->created_at = now();
        $passwordReset->save();

        Mail::to($user)->queue(new ResetPasswordMail($user, $token));

        return response(null, 200);
    }

    /**
     * Check if the reset token is valid.
     *
     * If reset token doesn't exists on password_resets table,
     * response with 404
     *
     * @param  int  $token
     * @return \Illuminate\Http\Response
     */
    public function show($token)
    {
        $passwordReset = PasswordReset::where('token', $token)->first();

        if($passwordReset){
            return response(null, 200);
        }

        return response(null, 404);
    }

    /**
     * Update user password with new password
     *
     * Redundant check: If reset token doesn't exists on password_resets table,
     * response with 404
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $token)
    {
        // todo - adicionar essa rule no repositorio de rules
        $this->validate($request, [
            'password' => 'required|min:6|confirmed|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
        ]);

        $passwordReset = PasswordReset::where('token', $token)->first();

        DB::beginTransaction();
        try{
            $user = User::where('email', $passwordReset->email)
                ->where('status', '1')->first();

            $user->update([
                'password' => bcrypt($request->password)
            ]);

            $user->save();
            $passwordReset->delete();

            DB::commit();
            return response(null, 204);
        }catch (\Throwable $t){
            DB::rollBack();
            return response()->json(['message' => $t->getMessage()], 500);
        }
    }
}
