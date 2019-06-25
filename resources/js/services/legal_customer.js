import ApiService from './base/base';

export default class NaturalCustomerService extends ApiService {

    static init(){
        return new this('customers/legal');
    }

    //todo - esse método deve pertencer a uma unica classe, ou mixim
    status(record){
        return this.http
            .put(`customers/status/${this.getId(record)}`, record)
            .then(this.constructor.then);
    }

    //todo - esse método deve pertencer a uma unica classe, ou mixim
    unusedCustomerUsers(type, name = ''){
        let url = `users/unused-users/${type}`;

        if(name){
            url = `users/unused-users/${type}/${name}`
        }

        return this.http
            .get(url)
            .then(this.constructor.then);
    }
}
