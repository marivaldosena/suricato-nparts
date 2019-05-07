<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GerenciarUsuariosTest extends TestCase
{
    /**
     * Testa a criação de um usuário com dados válidos.
     *
     * @return void
     */
    public function testCriarUsuario()
    {
        $response = $this->json('POST', '/api/users', [
            'nome' => 'Zé Ninguém',
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@1',
        ]);

        $response->assertHeader('Content-Type', 'application/json');
    }

    /**
     * Testa login de usuário válido.
     *
     * @return void
     */
    public function testLoginUsuario()
    {
        $response = $this->json('POST', '/api/users/login', [
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@1'
        ]);

        $response->assertJsonStructure([
            'email', 'name', 'token'
        ]);

        $response->assertStatus(200);
    }

    /**
     * Testa login de usuário com senha inválida.
     *
     * @return void
     */
    public function testLoginUsuarioSenhaInvalida()
    {
        $response = $this->json('POST', '/api/users/login', [
            'email' => 'ze.ninguem@email.com',
            'senha' => 'teste@'
        ]);

        $response->assertJson(['status' => 'Usuário não encontrado.']);

        $response->assertStatus(401);
    }
}
