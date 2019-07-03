<template>
    <div>
        <div class="col-12">
            <Alert/>
            <p>
                <router-link class="btn btn-outline-secondary" to="/admin/sellers/create">Criar</router-link>
            </p>
            <table class="col-12 table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Razão Social</th>
                    <th scope="col">Nome Fantasia</th>
                    <th scope="col">Cnpj</th>
                    <th scope="col">Inscrição Estadual</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tr v-for="seller in sellers.data">
                    <th scope="row">{{seller.user.id}}</th>
                    <td scope="col">{{seller.company_name}}</td>
                    <td scope="col">{{seller.trade_name}}</td>
                    <td scope="col">{{seller.cnpj}}</td>
                    <td scope="col">{{seller.state_registration ? seller.state_registration : "--"}}</td>
                    <td scope="col">{{getLiteralStatus(seller.user.status)}}</td>
                    <td>
                        <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ações
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <router-link class="dropdown-item" :to="{path: `/admin/sellers/${seller.user.id}`}">Editar</router-link>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleDestroy(seller.user.id)">Remover</a>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleStatus(seller.user.id, seller.user.status)">{{seller.user.status ? 'Desativar' : 'Ativar'}}</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Pagination from '../../../../components/Pagination';
    import Alert from '../../../../components/Alert/Alert';
    import SellersService from './../../../../services/sellers';

    const sellersService = SellersService.init();

    export default {
        name: "Index",
        components: {
            Pagination,
            Alert,
        },
        data() {
            return {
                sellers: {
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
            getCustomers(){
                sellersService.index(`?page=${this.sellers.meta.current_page}`).then((res) => {
                    const { data, meta } = res;
                    this.sellers.data = data;
                    this.sellers.meta = meta;
                })
            },

            //todo - criar modal para confirmar
            handleDestroy(id){
                let c = confirm('Deseja remover esse vendedor?');

                if(c){
                    sellersService.destroy(id).then(() => {
                        this.sellers.data = [];
                        this.getCustomers();
                    })
                }
            },
            //todo - criar modal para confirmar
            handleStatus(id, status){
                let c = confirm('Deseja mudar o status desse vendedor?');

                if(c){
                    sellersService.status({
                        id,
                        status: status ? '0' : '1',
                    }).then(() => {
                        this.sellers.data = [];
                        this.getCustomers();
                    })
                }
            },
        },
        created(){
            this.getCustomers();
        }
    }
</script>

<style scoped>

</style>
