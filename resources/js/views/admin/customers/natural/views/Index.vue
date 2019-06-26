<template>
    <div>
        <div class="col-12">
            <Alert/>
            <p>
                <router-link class="btn btn-outline-secondary" to="/admin/customers/natural/create">Criar</router-link>
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
                <tr v-for="customer in customers.data">
                    <th scope="row">{{customer.id}}</th>
                    <td scope="col">{{customer.user.name}}</td>
                    <td scope="col">{{customer.natural_person_info.cpf}}</td>
                    <td scope="col">{{customer.natural_person_info.rg}}</td>
                    <td scope="col">{{getLiteralStatus(customer.status)}}</td>
                    <td scope="col">{{getLiteralGender(customer.natural_person_info.gender)}}</td>
                    <td scope="col">{{literalBirthday(customer.natural_person_info.birthday)}}</td>
                    <td>
                        <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ações
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <router-link class="dropdown-item" :to="{path: `/admin/customers/natural/${customer.id}`}">Editar</router-link>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleDestroy(customer.id)">Remover</a>
                            <a class="dropdown-item" href="#" v-on:click.stop="handleStatus(customer.id, customer.status)">{{customer.status ? 'Desativar' : 'Ativar'}}</a>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Pagination from '../../../../../components/Pagination';
    import Alert from '../../../../../components/Alert/Alert';
    import NaturalCustomerService from './../../../../../services/natural_customer';

    const naturalCustomerService = NaturalCustomerService.init();

    export default {
        name: "Index",
        components: {
            Pagination,
            Alert,
        },
        data() {
            return {
                customers: {
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
                naturalCustomerService.index(`?page=${this.customers.meta.current_page}`).then((res) => {
                    const { data, meta } = res;
                    this.customers.data = data;
                    this.customers.meta = meta;
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
                let c = confirm('Deseja remover esse cliente?');

                if(c){
                    naturalCustomerService.destroy(id).then(() => {
                        this.customers.data = [];
                        this.getCustomers();
                    })
                }
            },
            //todo - criar modal para confirmar
            handleStatus(id, status){
                let c = confirm('Deseja mudar o status desse cliente?');

                if(c){
                    naturalCustomerService.status({
                        id,
                        status: status ? '0' : '1',
                    }).then(() => {
                        this.customers.data = [];
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
