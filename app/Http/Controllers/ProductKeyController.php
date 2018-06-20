<?php

namespace App\Http\Controllers;

use App\Product;
use App\ProductKey;
use Illuminate\Http\Request;

class ProductKeyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Product $product)
    {
        return $product->keys()->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Product $product)
    {
        $this->validate($request, [
            'product_id' => 'bail|required|exists:products',
            'key' => 'bail|required|unique:product_keys,key,NULL,product_key_id,product_id,'.$request->product_id.'|max:255',
            'language' => 'nullable|max:50',
            'user' => 'nullable|max:255',
            'windows_10' => 'nullable|boolean',
        ]);
        $productKey = new ProductKey(request(['key', 'language', 'user', 'windows_10']));
        $product->keys()->save($productKey);
        return response()->json($productKey->product_key_id);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ProductKey  $productKey
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product, ProductKey $productKey)
    {
        if ($product->product_id === $productKey->product_id)
            return $productKey;

        return response()->json([
            'message' => 'Record not found',
        ], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ProductKey  $productKey
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product, ProductKey $productKey)
    {
        if ($product->product_id !== $productKey->product_id) {
            return response()->json(['message' => 'Record not found'], 404);
        }

        $this->validate($request, [
            'user' => 'nullable|max:255',
            'windows_10' => 'nullable|boolean',
        ]);
        $productKey->user = request('user');
        $productKey->windows_10 = request('windows_10');
        $productKey->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ProductKey  $productKey
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product, ProductKey $productKey)
    {
        if ($product->product_id === $productKey->product_id) {
            $productKey->delete();
            return;
        }

        return response()->json([
            'message' => 'Record not found',
        ], 404);
    }
}
