<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', 'UsuarioController@create');

Route::get('test', function(){
    echo bcrypt('adhenriquemusic@gmail.com');
});

//verify user
Route::get('users/verify/{token}', 'Api\\UserController@verify');
