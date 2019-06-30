<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SellerDoc extends Model 
{

    protected $table = 'seller_docs';
    public $timestamps = true;
    protected $fillable = array('description', 'path', 'status');
    protected $visible = array('description', 'path', 'status');

}