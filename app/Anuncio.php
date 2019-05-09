<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Anuncio extends Model
{
    protected $table = 'anuncios';

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    protected $fillable = [
        'user_id', 'peca', 'peso', 'altura', 'partnumber'
    ];
}
