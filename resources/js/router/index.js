// import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import store from './../store/index';

// Vue.use(Router);

const router = new Router({
    history: true,
    mode: 'history',
    routes,
});

//todo - criar uma forma melhor de remover os alertas das views
router.afterEach((to, from) => {
    let alert = store.state.alert;

    if(alert.show){
        setTimeout(() => {
            store.dispatch('clearAlert');
        }, 3000);
    }
});

export default router;
