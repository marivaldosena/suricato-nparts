<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    public $timestamps = true;
    protected $fillable = array('status');

    public function user()
    {
        return $this->belongsTo('User');
    }

    public function naturalPersonInfo()
    {
        return $this->hasOne('NaturalPerson');
    }

    public function legalPersonInfo()
    {
        return $this->hasOne('LegalPerson');
    }

    public function address()
    {
        return $this->hasOne('Address');
    }

    public function advertisements()
    {
        return $this->hasMany('Advertisement');
    }
}
