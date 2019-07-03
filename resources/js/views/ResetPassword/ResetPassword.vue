<template>
    <Create v-if="token" :token="token"/>
    <Request v-else/>
</template>

<script>
    import Create from './views/Create';
    import Request from './views/Request';

    export default {
        name: "ResetPassword",
        components:{
            Create,
            Request
        },
        computed: {
            token(){
                return this.$route.params.token;
            }
        }
    }
</script>

<style scoped>

</style>
