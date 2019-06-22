<template>
    <main id="app" class="container h-100">
        <router-view/>
    </main>
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
