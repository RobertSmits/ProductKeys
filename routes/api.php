<?php

use Illuminate\Http\Request;
use App\Product;

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

Route::middleware('api')->get('/product', 'ProductController@index');
Route::middleware('api')->get('/product/{product}', 'ProductController@show');
Route::middleware('api')->get('/product/{product}/keys', function (Product $product) {
    return $product->keys()->get();
});
