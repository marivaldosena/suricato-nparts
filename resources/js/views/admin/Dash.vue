<template>
    <div>
        <p>This is a dashboard</p>
        <button v-on:click="getItens()">Get itens</button>
    </div>
</template>

<script>
    import UsersService from './../../services/users';

    const usersService = UsersService.init();

    export default {
        name: "Dash",
        methods: {
            getItens(){
                usersService.index();
            }
        }
    }
</script>

<style scoped>

</style>
