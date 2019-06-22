export default {
    SET_ALERT(state, payload) {
        state.type = payload.type;
        state.message = payload.message;
        state.show = payload.show;
    },
    CLEAR_ALERT(state) {
        state.type = 'success';
        state.message = '';
        state.show = false;
    }
};
