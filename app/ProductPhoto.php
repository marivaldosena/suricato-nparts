<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductPhoto extends Model
{
    protected $table = 'product_photos';
    public $timestamps = true;
    protected $fillable = array('path');
}
