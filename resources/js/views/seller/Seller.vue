<template>
    <div>
        <CreateProductModal v-if="showModal"/>
        <!--<button v-on:click="toggleModal">abrir modal</button>-->
        <Header/>
        <router-view/>
    </div>
</template>

<script>
    import Header from '../../components/Header';
    import Alert from '../../components/Alert/Alert';
    import CreateProductModal from './announcements/CreateProductModal';
    import { mapActions } from 'vuex';

    export default {
        name: "Seller",
        components: {
            Header,
            Alert,
            CreateProductModal,
        },
        methods: {
            ...mapActions(['toggleModal']),
        },
        computed: {
            showModal(){
                return this.$store.state.modal.show
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
