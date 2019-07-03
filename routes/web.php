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

use \Illuminate\Support\Facades\File;
use \Illuminate\Support\Facades\Response;

Route::get('/{any}', 'FrontController@index')->where('any', '^(?!(api\/)|(public\/))[\/\w\.-]*');
Route::get('/public/{any}', function($any){
    $path = public_path($any);

    if(!File::exists($path)) {
        return response(null, 404);
    }

    $file = File::get($path);
    $type = File::mimeType($path);

    $response = Response::make($file, 200);
    $response->header("Content-Type", $type);

    return $response;
})->where('any', '^[\/\w\.-]*');

//Route::get('test', function (){
//    echo bcrypt(123456);
//});
