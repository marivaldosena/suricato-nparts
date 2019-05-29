<?php

namespace App\Http\Controllers;

use App\Mail\RecuperarSenhaMail;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UsuarioController extends Controller
{
    /**
     * Criar usuário para acesso ao sistema.
     *
     * Os dados necessários são nome, email e senha.
     *
     * @param Request $request
     * @return User
     */
    public function create(Request $request)
    {
        $usuario = new User;
        $usuario->name = $request->get('nome');
        $usuario->email = $request->get('email');
        $usuario->password = Hash::make($request->get('senha'));
        // TODO: Utilizar JWT.
        $usuario->token = Str::uuid();
        $usuario->expires_at = now()->addMinutes(env('TOKEN_LIFE_SPAN', 30));
        $usuario->save();

        return $usuario;
    }

    /**
     * Verifica se as credenciais do usuário são válidas para efetuar login.
     *
     * @param Request $request
     * @return User
     */
    public function login(Request $request)
    {
        $usuario = User::where('email', $request->get('email'))->first();

        if ($usuario) {
            if (Hash::check($request->get('senha'),$usuario->password)) {
                $usuario->token = Str::uuid();
                $usuario->expires_at = now()->addMinutes(env('TOKEN_LIFE_SPAN', 30));
                $usuario->save();

                return $usuario;
            } else {
                return response(['status' => 'Login ou senha incorreta.'], 401);
            }
        }
    }

    /**
     * Envia um e-mail de recuperação com link.
     *
     * @param Request $request
     * @return json
     */
    public function recuperarSenha(Request $request)
    {
        //TODO: Refatorar o código e redefinir senha.
        $usuario = User::where('email', $request->get('email'))->first();

        Mail::to($usuario->email)->send(new RecuperarSenhaMail($usuario, 'linkDeRecuperacao'));

        return response(['status' => 'E-mail com link de recuperação foi enviado.'], 200);
    }
}
