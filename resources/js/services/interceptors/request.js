import store from "../../store";

const reqSuccess = (req) => {
    if(store.state.alert.show){
        store.dispatch('clearAlert').then(() => {});
    }

    return req;
};

const reqError = () => {

};

export {
    reqSuccess,
    reqError,
}
