<template>
    <div class="row">
        <p>
            <router-link class="btn btn-outline-secondary" to="/admin/users/create">Criar</router-link>
        </p>
        <table class="col-12 table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Tipo</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users.data">
                <th scope="row">{{user.id}}</th>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{getLiteralType(user.type)}}</td>
                <td>{{getLiteralStatus(user.status)}}</td>
                <td>
                    <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Ações
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <router-link class="dropdown-item" to="/admin/users/edit">Editar</router-link>
                        <a class="dropdown-item" href="#">Remover</a>
                        <a class="dropdown-item" href="#">Desativar</a>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
        <Pagination :pagination="users.meta" @paginate="getUsers()"/>
    </div>
</template>

<script>
    import Pagination from './../../../../components/Pagination';
    import UsersService from './../../../../services/users'

    const usersService = UsersService.init();

    export default {
        name: "Index",
        components: {
            Pagination
        },
        data() {
            return {
                users: {
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
            getUsers(){
                usersService.index(`?page=${this.users.meta.current_page}`).then((res) => {
                    const { data, meta } = res;
                    this.users.data = data;
                    this.users.meta = meta;
                })
            },
            getLiteralType(type){
                if(type === 2){
                    return 'PF';
                }else if(type === 3){
                    return 'PJ';
                }
                return 'Admin';
            }
        },
        created(){
            this.getUsers();
        }
    }
</script>

<style scoped>

</style>
