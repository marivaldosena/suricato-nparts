<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table = 'addresses';
    public $timestamps = true;
    protected $fillable = array('zip_code', 'street', 'complement', 'number', 'neighborhood', 'city', 'state');
}
