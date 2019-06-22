import Vue from 'vue';

export default class ApiService {

    /**
     * @type {String}
     */
    resource = '';

    /**
     * @type {String}
     */
    id = 'id';


    /**
     * @param {String} resource
     * @param {Object} http
     */
    constructor(resource, http = null){
        if(!resource){
            throw new Error('The child service class did not provide the resource.');
        }

        this.resource = resource;
        this.http = Vue.axios
    }

    /**
     * @returns {*|PromiseLike}
     */
    index() {
        return this.http
            .get(`${this.resource}`)
            .then(this.constructor.then)
    }

    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */
    store(record){
        return this.http
            .post(`${this.resource}`, record)
            .then(this.constructor.then)
    }

    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */
    show(record){
        return this.http
            .get(`${this.resource}/${this.getId(record)}`)
            .then(this.constructor.then)
    }

    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */
    update(record){
        return this.http
            .put(`${this.resource}/${this.getId(record)}`, record)
            .then(this.constructor.then)
    }

    /**
     * @param {Object} record
     * @returns {*|PromiseLike}
     */
    destroy(record){
        return this.http
            .delete(`${this.resource}/${this.getId(record)}`)
            .then(this.constructor.then)
    }

    /**
     * @param {Object} response
     * @returns {Object}
     */
    static then (response) {
        if (!response.data) {
            return {}
        }
        if (typeof response.data === 'string') {
            return JSON.parse(response.data)
        }
        return response.data
    }

    /**
     * @param {String|Object} record
     * @returns {String}
     */
    getId (record) {
        if (typeof record === 'object') {
            return record[this.id]
        }
        return String(record)
    }
}
