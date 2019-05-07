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
}
