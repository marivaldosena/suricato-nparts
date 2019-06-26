<template>
    <div>
        <div class="d-flex">
            <router-view class="container content"/>
        </div>
    </div>
</template>

<script>
    import Header from './../../components/Header';
    import Sidebar from './../../components/Sidebar';

    export default {
        name: "Customer",
        components: {
            Header,
            Sidebar,
        },
    }
</script>

<style scoped>

</style>
