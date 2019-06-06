<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-100">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{config('app.name')}}</title>
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:700,900" rel="stylesheet">
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    {{--<body class="{{request()->path() == 'login' ? 'h-100' : ''}}">--}}
    <body class="h-100">

    <main id="app"></main>
    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
