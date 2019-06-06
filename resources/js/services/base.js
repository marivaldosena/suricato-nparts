import axios from 'axios'
import { API_URL } from './../config';

export default class ServiceBase {
    constructor(){
        if(!this.entity){
            throw new Error('Child service class not provide entity.');
        }

        this.instance = axios.create({
            baseURL: API_URL
        })
    }

    one(id){
        return new Promise((resolve, reject) => {
            this.instance.get(`${this.entity}/teste/${id}`).then(response => {
                resolve(response);
            }).catch(error => {
                reject(error);
            })
        })
    }

    all(){

    }

    byParam(...params){

    }

    store(params){

    }

    update(id, params){

    }

    destroy(id){

    }
}
