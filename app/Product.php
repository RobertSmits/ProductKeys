<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $primaryKey = 'product_id';

    protected $dates = ['deleted_at'];

    public function keys()
    {
        return $this->hasMany(ProductKey::class, 'product_id');
    }
}
