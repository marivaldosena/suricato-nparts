<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AnunciosTest extends TestCase
{
    /**
     * Testa se há anúncios.
     *
     * @return void
     */
    public function testObterAnuncios()
    {
        $response = $this->get('/api/anuncios');

        $response->assertStatus(200);
    }
}
