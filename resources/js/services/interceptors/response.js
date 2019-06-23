import helpers from "./helpers";
import store from "../../store";

const resSuccess = (res) =>{
    const { data : { data }, request } = res;

    if(request.responseURL.endsWith('me')){
        store.dispatch('setCurrentUser', {
            id: data.id,
            name: data.name,
            email: data.email,
            type: data.type,
        });
    }
    return res;
};

const resError = (err) => {
    let message = '';

    if(err.response.request.responseURL.indexOf("auth") !== -1){
        if(err.response.status === 404){
            message = helpers.authServerErrors('invalid');
        }else if (err.response.status === 401){
            message = helpers.authServerErrors(err.response.data.message);
        }
    }else{
        if(err.response.status === 404){
            message = '[resource] not found.';
        // }else if(err.response.status !== 401){
        //     console.log(err.response)
        //     message = err.response.data.message;
        }else{
            message = "Undefined error.";
        }
        console.log(err.response)
    }

    store.dispatch('setAlert', {
        type: 'danger',
        message: message,
        show: true,
    }).then(() => {});

    return Promise.reject(err);
};

export {
    resSuccess,
    resError,
}
