<?php

namespace App\Mail;

use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecuperarSenhaMail extends Mailable
{
    use Queueable, SerializesModels;

    public $usuario;
    public $linkRecuperacao;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $usuario, string $linkRecuperacao)
    {
        $this->usuario = $usuario;
        $this->linkRecuperacao = $linkRecuperacao;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.recuperar-senha')
            ->with([
                'user' => $this->usuario,
                'linkRecuperacao' => $this->linkRecuperacao,
            ])
            ->subject('Recuperação de Senha');
    }
}
