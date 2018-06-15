<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductKey extends Model
{
    use SoftDeletes;

    protected $primaryKey = 'product_key_id';
    protected $hidden = [ 'created_at', 'updated_at', 'deleted_at' ];
    protected $dates = [ 'created_at', 'updated_at', 'deleted_at' ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }
}
