<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    public $timestamps = true;
    protected $fillable = array('status', 'user_id');

    public function user()
    {
        return $this->belongsTo('App\\User');
    }

    public function naturalPersonInfo()
    {
        return $this->hasOne('App\\NaturalPerson', 'customer_id', 'id');
    }

    public function legalPersonInfo()
    {
        return $this->hasOne('App\\LegalPerson');
    }

    public function address()
    {
        return $this->hasOne('Address');
    }

    public function advertisements()
    {
        return $this->hasMany('Advertisement');
    }

    public function getStatusAttribute($value)
    {
        return (int) $value;
    }
}
