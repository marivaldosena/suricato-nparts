<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class NaturalPerson extends Model
{
    protected $table = 'natural_persons';
    public $timestamps = true;
    protected $fillable = array('cpf', 'birthday', 'gender');
}
