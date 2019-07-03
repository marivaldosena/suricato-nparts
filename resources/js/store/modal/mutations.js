export default {
    TOGGLE_MODAL(state, payload) {
        state.show = !state.show;
    },
    OPEN_MODAL(state, payload) {
        state.show = true;
    },
    CLOSE_MODAL(state, payload) {
        state.show = false;
    },
};
