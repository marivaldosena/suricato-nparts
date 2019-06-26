// import driver from "./drivers/axios/index";

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

    me(){
        return this.http.get('/me');
    }

    refreshToken(payload){
        return this.http.post(`${this.resource}/refresh`, payload);
    }
}
