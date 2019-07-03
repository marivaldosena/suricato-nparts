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

Route::group([
    'middleware' => 'api',
], function ($router) {

    Route::group(['prefix' => 'auth'], function(){
        Route::post('login', 'AuthController@login');
        Route::post('logout', 'AuthController@logout');
        Route::get('refresh', 'AuthController@refresh');
        Route::get('me', 'AuthController@me');
    });

    Route::get('advertisements', 'Api\\AdvertisementController@index');

    //buyers
    Route::resource('buyers', 'Api\\BuyerController');
    Route::put('buyers/status/{id}', 'Api\\BuyerController@status');

    //sellers
    Route::resource('sellers', 'Api\\SellerController');
    Route::put('sellers/status/{id}', 'Api\\SellerController@status');

    //users
    Route::resource('users', 'Api\\UserController');
    Route::group(['prefix' => 'users'], function(){
        // todo - adicionar prefixo nessa rota, igual ao front? "password/"
        Route::resource('reset', 'Api\\ResetPasswordController');
        // todo - adicionar prefixo nessa rota, igual ao front? "password/"
        Route::put('create-password/{token}', 'Api\UserController@createPassword');
        Route::get('verify/{token}', 'Api\UserController@verify');

        Route::put('status/{id}', 'Api\\UserController@status');
        Route::get('unused-users/{type}/{name?}', 'Api\UserController@unusedUsers');
    });
});
