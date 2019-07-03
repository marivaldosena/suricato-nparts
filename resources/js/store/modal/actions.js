export default {
    toggleModal({ commit, state }, payload){
        commit('TOGGLE_MODAL', payload)
    },
    openModal({ commit, state }){
        commit('OPEN_MODAL')
    },
    closeModal({ commit, state }){
        commit('CLOSE_MODAL')
    }
};
