import Vue from 'vue'
import Vuex from 'vuex'

import { user } from './user';
import { alert } from './alert';
import { modal } from './modal';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        user,
        alert,
        modal
    }
})
