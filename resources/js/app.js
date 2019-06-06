import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import Axios from 'axios'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.prototype.$http = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
