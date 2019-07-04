<template>
    <div>
        <Title/>
        <Alert/>
        <p>Área do usuário vendedor</p>
    </div>
</template>

<script>
    import Title from './../../components/Title';
    import Alert from './../../components/Alert/Alert';

    export default {
        name: "Index",
        components: {
            Title,
            Alert,
        },
    }
</script>

<style scoped>

</style>
