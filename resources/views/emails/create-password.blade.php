<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Create a new password</title>
</head>
<body>
</body>
<h2>Welcome to the {{config('app.name')}}, {{$user['name']}}.</h2>
<br>
You have been registered with email {{$user['email']}}. Please click on the below link to create a new password.
<br/>
<a href="{{url('users/create-password', $user['email_verify_token'])}}">Verify Email</a>
</html>
