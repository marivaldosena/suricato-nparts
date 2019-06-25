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
                    <td scope="col">ac</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import Pagination from '../../../../../components/Pagination';
    import Alert from '../../../../../components/Alert/Alert';
    import NaturalCustomerService from './../../../../../services/natural_customer';
    import moment from 'moment';

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
                }
                return 'Feminino';
            },
            literalBirthday(date){
                return moment(date).format("DD/MM/YYYY")
            }
        },
        created(){
            this.getCustomers();
        }
    }
</script>

<style scoped>

</style>
