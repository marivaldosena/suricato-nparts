import Vue from 'vue'
import Vuex from 'vuex'

import { user } from './user';
import { alert } from './alert';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        alert,
    }
})
