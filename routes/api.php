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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
//
//// /users
//Route::post('/users', 'UsuarioController@createUsuario');
//Route::post('/users/login', 'UsuarioController@login');
//Route::post('/users/login/recuperar', 'UsuarioController@recuperarSenha');
//Route::post('/users/alterar-dados', 'UsuarioController@alterarDadosCadastrais');
//
//// /anuncios
//Route::get('/anuncios', 'AnuncioController@index');

Route::group([

    'middleware' => 'api',

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('advertisements', 'Api\\AdvertisementController@index');


    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('me', 'AuthController@me');

        //customers
        Route::group(['prefix' => 'customers'], function(){
            Route::resource('natural', 'Api\NaturalPersonController');
            Route::resource('legal', 'Api\LegalPersonController');
            Route::put('status/{id}', 'Api\CustomerController@status');
        });
    });

    //users
    Route::resource('users', 'Api\\UserController');

    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', 'Api\CustomerController@index');
        //
    });
});
