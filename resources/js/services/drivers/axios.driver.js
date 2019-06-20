import axios from 'axios'
import store from './../../store';
import { API_URL } from "../../config";

const driver = axios.create({
    baseURL: `${API_URL}`,
});

driver.interceptors.response.use(res => res.data, function (error) {
    var message = '';

    if(error.response.request.responseURL.indexOf("auth") != -1){
        if(error.response.status === 404){
            message = authServerErrors('invalid');
        }else if (error.response.status === 401){
            message = authServerErrors(error.response.data.message);
        }
    }else{
        if(error.response.status === 404){
            message = '';
        }else{
            message = error.data.message;
        }
    }

    store.dispatch('setAlert', {
        type: 'danger',
        message: message,
        show: true,
    }).then(() => {});

    return Promise.reject(error);
});

driver.interceptors.request.use((config) => {
    // header token


    if(store.state.alert.show){
        store.dispatch('clearAlert').then(() => {});
    }

    return config;
});

function authServerErrors(e){
    if(e === 'invalid'){
        return 'Invalid Username.';
    }else if(e === 'verify'){
        return 'You should check your email.';
    }else if(e === 'deactivated'){
        return 'Your account is deactivated.';
    }else if (e === 'password'){
        return 'Invalid password.';
    }
}

export default driver

