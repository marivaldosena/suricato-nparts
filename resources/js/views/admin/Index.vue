<template>
    <div>
        <Title/>
        <Alert/>
        <p>asd</p>
    </div>
</template>

<script>
    import Title from './../../components/Title';
    import Breadcrumb from './../../components/Breadcrumb';
    import Alert from './../../components/Alert/Alert';

    export default {
        name: "Index",
        components: {
            Title,
            Breadcrumb,
            Alert,
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
