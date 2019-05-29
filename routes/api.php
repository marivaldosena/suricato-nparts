<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// /users
Route::post('/users', 'UsuarioController@createUsuario');
Route::post('/users/login', 'UsuarioController@login');
Route::post('/users/login/recuperar', 'UsuarioController@recuperarSenha');
Route::post('/users/alterar-dados', 'UsuarioController@alterarDadosCadastrais');

// /anuncios
Route::get('/anuncios', 'AnuncioController@index');