<template>
    <div>
        <p>xxxx</p>
    </div>
</template>

<script>
    import Title from './../../components/Title';
    import Breadcrumb from './../../components/Breadcrumb';

    export default {
        name: "Index",
        components: {
            Title,
            Breadcrumb,
        },
        computed: {
            route(){
                return this.$route
            }
        },
    }
</script>

<style scoped>

</style>
