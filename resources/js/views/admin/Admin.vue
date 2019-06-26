<template>
    <div>
        <Header/>
        <div class="d-flex">
            <Sidebar class="sidebar"/>
            <router-view class="container content"/>
        </div>
    </div>
</template>

<script>
    import Header from './../../components/Header';
    import Sidebar from './../../components/Sidebar';

    export default {
        name: "Dashboard",
        components: {
            Header,
            Sidebar,
        },
    }
</script>

<style scoped>

</style>
