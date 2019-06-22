import helpers from "./helpers";
import store from "../../../store";
import Refresh from "./refresh";

export default class Interceptors {
    instance = null;
    that = null;

    constructor(instance){
        this.instance = instance;
    }

    static init(instance){
        return new this(instance);
    }

    successResponseInterceptor = (res) =>{
        return res;
    };

    errorResponseInterceptor = (err) => {
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
            }else if(err.response.status === 401){
                Refresh
                    .init(this.instance)
                    .handleRefreshToken(err);
            }else{
                message = err.data.message;
            }
        }

        store.dispatch('setAlert', {
            type: 'danger',
            message: message,
            show: true,
        }).then(() => {});

        return Promise.reject(err);
    };

    successRequestInterceptor = (req) => {
        if(localStorage.getItem('token')){
            req.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        }

        if(store.state.alert.show){
            store.dispatch('clearAlert').then(() => {});
        }

        return req;
    };

    errorRequestInterceptor = () => {

    }
}
