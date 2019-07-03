<template>
    <div>
        <Header/>
        <Alert/>
        Home
    </div>
</template>

<script>
    import Header from '../components/Header';
    import Alert from '../components/Alert/Alert';

    export default {
        name: "Home",
        components: {
            Header,
            Alert,
        }
    }
</script>

<style scoped>

</style>
