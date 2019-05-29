<?php

namespace App\Http\Controllers;

use Validator;
use App\Mail\RecuperarSenhaMail;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class UsuarioController extends Controller
{

    // Regras de validação
    private $regras = [
        'email' => 'required|email',
        'senha' => 'required|min:6|regex:/^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/',
        'nome' => 'required|min:3',
    ];

    // Mensagens descritivas dos erros
    // TODO: Criar mensagens de Localização i18n em arquivo à parte.
    private $mensagens = [
        'email.required' => 'E-mail é obrigatório.',
        'email.email' => 'E-mail em formato inválido.',
        'senha.required' => 'Senha é obrigatória.',
        'senha.min' => 'Senha deve conter pelo menos :min caracteres.',
        'senha.regex' => 'Senha deve conter letras, números e caracteres especiais válidos.',
        'nome.required' => 'Nome é obrigatório.',
        'nome.min' => 'Nome deve conter pelos menos :min caracteres.'
    ];

    /**
     * Criar usuário para acesso ao sistema.
     *
     * Os dados necessários são nome, email e senha.
     *
     * @param Request $request
     * @return User
     */
    public function createUsuario(Request $request)
    {
        // TODO: Refatorar para tornar o código mais reutilizável.
        $validator = Validator::make($request->all(), $this->regras, $this->mensagens);
        
        if ($validator->fails()) {
            return response(['status' => ['errors' => $validator->errors()]], 401);
        }
        
        $exists = User::where('email', $request->get('email'))->first();
        
        if ($exists) {
            return response(['status' => 'E-mail já está sendo utilizado.'], 401);
        }
        /*
         * TODO: Criar perfis diferentes para cliente pessoa
         * física, jurídica e administrador.
         */
        $usuario = new User;
        $usuario->name = $request->get('nome');
        $usuario->email = $request->get('email');
        $usuario->password = Hash::make($request->get('senha'));
        // TODO: Utilizar JWT.
        $usuario->token = Str::uuid();
        $usuario->expires_at = now()->addMinutes(env('TOKEN_LIFE_SPAN', 30));
        $usuario->save();

        return response(['status' => 'Cadastro efetuado com sucesso.'], 201);
    }

    /**
     * Verifica se as credenciais do usuário são válidas para efetuar login.
     *
     * @param Request $request
     * @return User
     */
    public function login(Request $request)
    {
        $usuario = $this->encontrarUsuario($request->get('email'));

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
        $usuario = $this->encontrarUsuario($request->get('email'));

        Mail::to($usuario->email)->send(new RecuperarSenhaMail($usuario, 'linkDeRecuperacao'));

        return response(['status' => 'E-mail com link de recuperação foi enviado.'], 200);
    }

    private function encontrarUsuario($email)
    {
        return User::where('email', $email)->first();
    }
}
