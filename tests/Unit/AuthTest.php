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
    public $usuario;

    /**
     * Testa a criação de um usuário com dados válidos.
     *
     * @return void
     */
    public function testCriarUsuario()
    {
        $response = $this->json('POST', '/api/users/register', [
            'name' => 'Zé Ninguém',
            'email' => 'ze.ninguem@email.com',
            'password' => 'teste@1',
            'type' => '1',
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('users', ['email' => 'ze.ninguem@email.com']);
    }

    /**
     * Testa login de usuário válido.
     *
     * @return void
     */
    public function testLoginUsuario()
    {
        $response = $this->json('POST', '/api/login', [
            'email' => 'ze.ninguem@email.com',
            'password' => 'teste@1'
        ]);

        $response->assertJson([
            'expires_in' => 3600,
            'token_type' => 'bearer',
        ]);

        $response->assertOk();
    }

    /**
     * Teste exclusão de usuário válido.
     */
    public function testExcluirUsuario()
    {
        $user = User::where('email', 'ze.ninguem@email.com')->first();

        $loginResponse = $this->json('POST', '/api/login', [
            'email' => 'ze.ninguem@email.com',
            'password' => 'teste@1'
        ]);

        $loginResponse->assertJsonStructure(['access_token']);
        $response = $this->json('DELETE', '/api/users/'.$user->id, [
            'access_token' => $loginResponse->json('access_token'),
        ]);

        $response->assertStatus(204);
    }

    /**
     * Testa login de usuário com senha inválida.
     *
     * @return void
     */
    /* public function testLoginUsuarioSenhaInvalida()
    {
        $response = $this->json('POST', '/api/users/login', [
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@'
        ]);

        $response->assertJson(['status' => 'Login ou senha incorreta.']);

        $response->assertStatus(401);
    } */

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
