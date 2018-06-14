<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductKeysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_keys', function (Blueprint $table) {
            $table->increments('product_key_id');
            $table->integer('product_id')->unsigned()->length(10);
            $table->string('key');
            $table->string('language')->nullable();
            $table->string('user')->nullable();
            $table->boolean('windows_10')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->foreign('product_id')->references('product_id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_keys');
    }
}
