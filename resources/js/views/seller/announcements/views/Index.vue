<template>
    <div>
        <div class="col-12">
            <Alert/>
            <p>
                <router-link class="btn btn-outline-secondary" to="/seller/announcements/create">Criar</router-link>
            </p>
            <p>mostrando anuncios</p>
        </div>
    </div>
</template>

<script>
    import Pagination from './../../../../components/Pagination';
    import Alert from '../../../../components/Alert/Alert';

    export default {
        name: "Index",
        components: {
            Pagination,
            Alert,
        },
        data() {
            return {
                announcements: {
                    data: [],
                    meta: {
                        total: 0,
                        per_page: 10,
                        from: 1,
                        to: 0,
                        current_page: 1
                    }
                }
            }
        },
        methods: {
            getAnnouncements(){

            },
            //todo - criar modal para confirmar
            handleDestroy(id){
                let c = confirm('Deseja remover esse anúncio?');

                if(c){

                }
            },
            //todo - criar modal para confirmar
            handleStatus(id, status){
                let c = confirm('Deseja mudar o status desse anúncio?');

                if(c){

                }
            },
        },
        created(){
            this.getAnnouncements();
        }
    }
</script>

<style scoped>

</style>
