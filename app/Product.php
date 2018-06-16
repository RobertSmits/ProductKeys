<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use SoftDeletes;

    protected $primaryKey = 'product_id';
    protected $appends = ['key_count'];
    protected $fillable = ['name', 'year'];
    protected $hidden = [ 'keys', 'created_at', 'updated_at', 'deleted_at' ];
    protected $dates = [ 'created_at', 'updated_at', 'deleted_at' ];

    public function keys()
    {
        return $this->hasMany(ProductKey::class, 'product_id');
    }

    public function getKeyCountAttribute()
    {
        return $this->keys->count();
    }
}
