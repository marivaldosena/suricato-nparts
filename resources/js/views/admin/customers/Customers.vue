<template>
    <div>
        <Title/>
        <Breadcrumb/>
        <router-view class="row"/>
    </div>
</template>

<script>
    import Title from './../../../components/Title';
    import Breadcrumb from './../../../components/Breadcrumb';

    export default {
        name: "Customers",
        components: {
            Title,
            Breadcrumb
        },
    }
</script>

<style scoped>

</style>
