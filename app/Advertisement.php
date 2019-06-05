<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Advertisement extends Model
{
    protected $table = 'advertisements';
    public $timestamps = true;
    protected $fillable = array('description', 'price', 'status');

    public function product()
    {
        return $this->hasOne('Product');
    }

    public function customer()
    {
        return $this->belongsTo('Customer');
    }
}
