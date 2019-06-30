<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{

    protected $table = 'buyers';
    public $timestamps = true;
    protected $fillable = array('user_id', 'cpf', 'birthday', 'gender');
    protected $visible = array('cpf', 'rg', 'birthday', 'gender', 'user');

    public function user()
    {
        return $this->belongsTo('App\\User');
    }
}
