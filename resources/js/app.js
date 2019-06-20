import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Axios from 'axios'

import {API_URL} from "./config";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ApiService from "./services/api";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.prototype.$http = Axios;

// ApiService.init(API_URL);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
