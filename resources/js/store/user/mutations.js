export default {
    SET_CURRENT_USER(state, payload) {
        state.curretUser = payload
    },
    CLEAR_CURRENT_USER(state){
        state.curretUser = {
            id: null,
            name: null,
            email: null,
            type: null,
        }
    }
};
