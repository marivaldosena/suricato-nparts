<template>
    <div>
        <div class="col-12">
            <Alert/>
            <p>
                <router-link class="btn btn-outline-secondary" to="/admin/buyers/create">Criar</router-link>
            </p>
            <table class="col-12 table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cpf</th>
                    <th scope="col">Rg</th>
                    <th scope="col">Status</th>
                    <th scope="col">Gênero</th>
                    <th scope="col">Dt Nascimento</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tr v-for="buyer in buyers.data">
                    <th scope="row">{{buyer.user.id}}</th>
                    <td scope="col">{{buyer.user.name}}</td>
                    <td scope="col">{{buyer.cpf}}</td>
                    <td scope="col">{{buyer.rg}}</td>
                    <td scope="col">{{getLiteralStatus(buyer.user.status)}}</td>
                    <td scope="col">{{getLiteralGender(buyer.gender)}}</td>
                    <td scope="col">{{literalBirthday(buyer.birthday)}}</td>
                    <td>
                        <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ações
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <router-link class="dropdown-item" :to="{path: `/admin/buyers/${buyer.user.id}`}">Editar</router-link>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleDestroy(buyer.user.id)">Remover</a>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleStatus(buyer.user.id, buyer.user.status)">{{buyer.user.status ? 'Desativar' : 'Ativar'}}</a>
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
    import BuyersService from './../../../../services/buyers';

    const buyersService = BuyersService.init();

    export default {
        name: "Index",
        components: {
            Pagination,
            Alert,
        },
        data() {
            return {
                buyers: {
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
            getBuyers(){
                buyersService.index(`?page=${this.buyers.meta.current_page}`).then((res) => {
                    const { data, meta } = res;
                    this.buyers.data = data;
                    this.buyers.meta = meta;
                })
            },
            getLiteralGender(gender){
                if(gender === 'M'){
                    return 'Masculino';
                }else if (gender === 'F'){
                    return 'Feminino';
                }
                return 'Indefinido'
            },
            literalBirthday(date){
                return this.$moment(date).format("DD/MM/YYYY")
            },
            //todo - criar modal para confirmar
            handleDestroy(id){
                let c = confirm('Deseja remover esse comprador?');

                if(c){
                    buyersService.destroy(id).then(() => {
                        this.buyers.data = [];
                        this.getBuyers();
                    })
                }
            },
            //todo - criar modal para confirmar
            handleStatus(id, status){
                let c = confirm('Deseja mudar o status desse comprador?');

                if(c){
                    buyersService.status({
                        id,
                        status: status ? '0' : '1',
                    }).then(() => {
                        this.buyers.data = [];
                        this.getBuyers();
                    })
                }
            },
        },
        created(){
            this.getBuyers();
        }
    }
</script>

<style scoped>

</style>
