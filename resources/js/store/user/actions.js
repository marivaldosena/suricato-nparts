export default {
    setCurrentUser({ commit, state }, payload){
        commit('SET_CURRENT_USER', payload)
    },
    clearCurrentUser({commit}){
        commit('CLEAR_CURRENT_USER');
    }
};
