<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h2>Recuperação de Senha:</h2>
        <p>Oi, {{ $user->name }}! Para recuperar sua senha acesse: {{$linkRecuperacao}}.</p>
    </body>
</html>