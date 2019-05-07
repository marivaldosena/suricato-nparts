<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsuarioController extends Controller
{
    public function create(Request $request) {
        $usuario = new User;
        $usuario->name = $request->get('nome');
        $usuario->email = $request->get('email');
        $usuario->password = $request->get('senha');
        $usuario->token = Str::uuid();
        $usuario->expires_at = now()->addMinutes(env('TOKEN_LIFE_SPAN', 30));
        $usuario->save();

        return $usuario;
    }
}
