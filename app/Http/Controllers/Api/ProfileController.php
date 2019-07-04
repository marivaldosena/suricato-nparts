<?php

namespace App\Http\Controllers\Api;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    private $rules = [
        'current_password' => 'required',
        'new_password' => 'required|min:6|confirmed|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
    ];

    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function changePassword(Request $request, $id)
    {
        $this->validate($request, $this->rules);

        $user = User::findOrFail($id);

        if(!Hash::check($request->current_password, $user->password)){
            return response()->json(['errors' => [
                'current_password' => [
                    'You have filled in the current password with the wrong password.'
                ]
            ]], 422);
        }

        $user->update([
            'password' => bcrypt($request->new_password),
        ]);

        $user->save();

        return response(null, 204);
    }
}
