import ApiService from './base/base';

export default class SellersService extends ApiService {

    static init(){
        return new this('sellers');
    }
}
