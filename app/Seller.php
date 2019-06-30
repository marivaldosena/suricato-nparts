<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model 
{

    protected $table = 'sellers';
    public $timestamps = true;
    protected $fillable = array('cnpj', 'company_name', 'trade_name', 'state_registration');
    protected $visible = array('cnpj', 'company_name', 'trade_name', 'state_registration');

    public function docs()
    {
        return $this->hasMany('SellerDoc');
    }

    public function advertisements()
    {
        return $this->hasOne('Advertisement');
    }

}