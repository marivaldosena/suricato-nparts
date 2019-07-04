import ApiService from './base/base';

export default class BuyersService extends ApiService {

    static init(){
        return new this('profile');
    }

    changePassword(record){
        return this.http
            .put(`${this.resource}/change-password/${this.getId(record)}`, record)
            .then(this.constructor.then);
    }
}
