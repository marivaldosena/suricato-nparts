<template>
    <div>
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from '../../components/Header';
    import Alert from '../../components/Alert/Alert';

    export default {
        name: "Buyer",
        components: {
            Header,
            Alert
        }
    }
</script>

<style scoped>

</style>
