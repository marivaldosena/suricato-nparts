import ApiService from './base/base';

export default class UsersService extends ApiService {
  static init(){
    return new this('users/reset');
  }
}
