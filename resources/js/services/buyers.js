import ApiService from './base/base';

export default class BuyersService extends ApiService {

    static init(){
        return new this('buyers');
    }
}
