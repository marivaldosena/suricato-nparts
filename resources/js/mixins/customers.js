import store from './../store/index';

const redirectCustomer = {
    created() {
        // checar o tipo do usuario
        console.log(store.state.user.currentUser.name)
    }
};

export {
    redirectCustomer
}
