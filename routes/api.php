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


    Route::group(['middleware' => 'auth:api'], function(){

        //customers
        Route::group(['prefix' => 'customers'], function(){
            Route::resource('natural', 'Api\NaturalPersonController');
            Route::resource('legal', 'Api\LegalPersonController');
            Route::put('status/{id}', 'Api\CustomerController@status');
        });
    });

    //users
    Route::resource('users', 'Api\\UserController');
    Route::resource('users/reset', 'Api\\ResetPasswordController');

    Route::group(['prefix' => 'customers'], function () {
        Route::get('/', 'Api\CustomerController@index');
        //
    });
});
