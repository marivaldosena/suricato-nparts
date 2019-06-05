<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    public $timestamps = true;
    protected $fillable = array('partnumber', 'name', 'manufacturer', 'weight', 'height', 'width');

    public function photos()
    {
        return $this->hasMany('ProductPhoto');
    }
}
