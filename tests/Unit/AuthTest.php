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
    use RefreshDatabase;
    use DatabaseMigrations;

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
    /* public function testLoginUsuario()
    {
        $response = $this->json('POST', '/api/users/login', [
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@1'
        ]);

        $response->assertJsonStructure([
            'email', 'name', 'token'
        ]);

        $response->assertStatus(200);
    } */

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
