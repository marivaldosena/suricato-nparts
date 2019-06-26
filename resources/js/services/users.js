import ApiService from './base/base';

export default class UsersService extends ApiService {

    static init(){
        return new this('users');
    }

    status(record){
        return this.http
            .put(`${this.resource}/status/${this.getId(record)}`, record)
            .then(this.constructor.then);
    }
}
