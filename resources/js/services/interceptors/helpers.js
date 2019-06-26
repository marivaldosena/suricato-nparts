const authServerErrors = function(e){
    if(e === 'invalid'){
        return 'Invalid Username.';
    }else if(e === 'verify'){
        return 'You should check your email.';
    }else if(e === 'deactivated'){
        return 'Your account is deactivated.';
    }else if (e === 'password'){
        return 'Invalid password.';
    }
};

export default {
    authServerErrors,
}
