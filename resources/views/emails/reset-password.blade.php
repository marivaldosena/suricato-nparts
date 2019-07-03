<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Reset password</title>
</head>
<body>
<h2>Reset password.</h2>
<br>
Hi {{$user['name']}}, to reset your password, click <a href="{{url('reset', $token)}}">Reset password</a>
<br>
If you did not request this reset, please disregard this email.
</body>
</html>
