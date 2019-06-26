<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LegalPerson extends Model
{
    protected $table = 'legal_persons';
    public $timestamps = true;
    protected $fillable = array('cnpj', 'company_name', 'trade_name', 'state_registration');
}
