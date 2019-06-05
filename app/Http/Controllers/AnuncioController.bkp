<?php

namespace App\Http\Controllers;

use App\Anuncio;
use Illuminate\Http\Request;

class AnuncioController extends Controller
{
    public function index()
    {
        $anuncios = Anuncio::all();

        if (count($anuncios)) {
            return Anuncio::all();
        } else {
            return response(['status' => 'Não há anúncios cadastrados.'], 200);
        }
    }
}
