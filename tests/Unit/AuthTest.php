<?php

namespace Tests\Unit;

use App\Mail\RecuperarSenhaMail;
use App\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthTest extends TestCase
{
    public $usuario = [
        'name' => 'Zé Ninguém',
        'email' => 'ze.ninguem@email.com',
        'password' => 'teste@1',
        'type' => '1',
    ];

    /**
     * Testa a criação de um usuário com dados válidos.
     *
     * @return void
     */
    public function testCriarUsuario()
    {
        $response = $this->json('POST', '/api/users/register', [
            'name' => $this->usuario['name'],
            'email' => $this->usuario['email'],
            'password' => $this->usuario['password'],
            'type' => $this->usuario['type'],
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', ['email' => $this->usuario['email']]);
    }

    /**
     * Testa login de usuário válido.
     *
     * @return void
     */
    public function testLoginUsuario()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => $this->usuario['email'],
            'password' => $this->usuario['password'],
        ]);

        $response->assertJson([
            'expires_in' => 3600,
            'token_type' => 'bearer',
        ]);

        $response->assertOk();
    }

    /**
     * Testa login de usuário com usuário e/ou senha inválidos.
     *
     * @return void
     */
    public function testLoginUsuarioSenhaInvalida()
    {
        $url = '/api/login';

        /* Usuário inexistente. */
        $invalidUserResponse = $this->json('POST', $url, [
            'email' => 'email@invalido.com',
            'password' => 'tantofaz',
        ]);

        $invalidUserResponse->assertJson(['message' => __('login.invalid.user')]);

        $invalidUserResponse->assertStatus(404);

        /* Senha inválida. */
        $response = $this->json('POST', $url, [
            'email' => $this->usuario['email'],
            'password' => 'teste@'
        ]);

        $response->assertJson(['message' => __('login.invalid.password')]);

        $response->assertStatus(401);
    }

    /**
     * Teste exclusão de usuário válido.
     */
    public function testExcluirUsuario()
    {
        $user = User::where('email', $this->usuario['email'])->first();

        $loginResponse = $this->json('POST', '/api/login', [
            'email' => $this->usuario['email'],
            'password' => $this->usuario['password'],
        ]);

        $loginResponse->assertJsonStructure(['access_token']);
        $response = $this->json('DELETE', '/api/users/'.$user->id, [
            'access_token' => $loginResponse->json('access_token'),
        ]);

        $response->assertStatus(204);
    }

    // TODO: Incluir mensagem descritiva.
    /* public function testRecuperarSenha()
    {
        $this->assertDatabaseHas('users', [
           'email' => 'ze.ninguem@email.com'
        ]);

        $usuario = User::where('email', 'ze.ninguem@email.com')->first();
        $link = 'teste';

        Mail::fake();

        Mail::assertNothingSent();
    } */

    // TODO: Incluir mensagem descritiva.
    /* public function testAlterarDadosCadastrais()
    {
        $response = $this->json('POST', '/api/users/alterar-dados', [
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@1',
            'novaSenha' => 'teste@2',
            'nome' => 'Zé Mané',
        ]);

        $response->assertStatus(200);
    } */
}
