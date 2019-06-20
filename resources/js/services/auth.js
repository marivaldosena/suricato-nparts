import driver from "./drivers/axios.driver";

export default class AuthService {
    resource = 'auth';

    /**
     * @param {Object} http
     */
    constructor(http = null){
        this.http = http || driver
    }

    static init(){
        return new this;
    }

    login(payload){
        return this.http.post(`${this.resource}/login`, payload);
    }

    logout(){
        //
    }

    refreshToken(payload){
        return this.http.post(`${this.resource}/refresh`, payload);
    }
}
