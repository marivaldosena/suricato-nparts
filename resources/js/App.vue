<template>
    <div>
        <main id="app" class="container h-100">
            <router-view/>
        </main>
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import AuthService from './services/auth';
    // import { mapActions } from 'vuex';
    //
    // const authService = AuthService.init();

    export default {
        // methods: {
        //     ...mapActions(['setCurrentUser']),
        // },
        // created() {
        //     authService.me().then((res) => {
        //         const user = res.data;
        //
        //         this.setCurrentUser({
        //             id: user.id,
        //             name: user.name,
        //             email: user.email,
        //             type: user.type,
        //         });
        //     });
        // }
    }
</script>

<style scoped lang="scss">

</style>
