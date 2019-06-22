export default {
    setAlert({ commit, state }, payload){
        commit('SET_ALERT', payload)
    },
    clearAlert({commit}){
        commit('CLEAR_ALERT');
    }
};
