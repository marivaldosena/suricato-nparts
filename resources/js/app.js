import Vue from 'vue'
import App from './App.vue'

import Router from 'vue-router';
import router from './router'

import store from './store'

import Vuelidate from 'vuelidate'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueAuth from '@websanova/vue-auth'
import auth from './config/auth'

import {API_URL} from "./config";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { resSuccess, resError } from "./services/interceptors/response";
import { reqSuccess, reqError } from "./services/interceptors/request";

import { getLiteralStatus } from "./mixins/global";
Vue.mixin(getLiteralStatus);

Vue.config.productionTip = false;

Vue.router = router;
Vue.use(Router);

Vue.use(Vuelidate);

axios.interceptors.response.use(resSuccess, resError);
axios.interceptors.request.use(reqSuccess);

Vue.use(VueAxios, axios);
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/${API_URL}`;
Vue.use(VueAuth, auth);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
