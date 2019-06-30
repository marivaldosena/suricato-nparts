<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{

    protected $table = 'sellers';
    public $timestamps = true;
    protected $fillable = array('user_id', 'cnpj', 'company_name', 'trade_name', 'state_registration');
    protected $visible = array('cnpj', 'company_name', 'trade_name', 'state_registration', 'user');

    protected $primaryKey = 'user_id';

    public function docs()
    {
        return $this->hasMany('App\\SellerDoc');
    }

    public function advertisements()
    {
        return $this->hasOne('Advertisement');
    }

    public function user()
    {
        return $this->belongsTo('App\\User');
    }

}
