export default {
    SET_CURRENT_USER(state, payload) {
        state.currentUser = payload
    },
    CLEAR_CURRENT_USER(state){
        state.currentUser = {
            id: null,
            name: null,
            email: null,
            type: null,
        }
    }
};
