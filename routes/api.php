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

Route::middleware('api')->get('/product', function (Product $product) {
    return Product::all();
});

Route::middleware('api')->get('/product/{id}', function (Product $product) {
    return $product;
});

Route::middleware('api')->get('product/{id}/keys', function (Product $product) {
    return $product->keys();
});
