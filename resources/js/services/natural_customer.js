import ApiService from './base/base';

export default class NaturalCustomerService extends ApiService {

    static init(){
        return new this('customers/natural');
    }

    status(record){
        return this.http
            .put(`customers/status/${this.getId(record)}`, record)
            .then(this.constructor.then);
    }
}
