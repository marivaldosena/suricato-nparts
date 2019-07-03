<template>
    <nav class="sidebar">
        <figure class="user">
            <div class="user-details">
                <p>Seja bem vindo <span class="name">{{username}}</span></p>
                <p class="user-type">{{this.literalUserType(type)}}</p>
            </div>
        </figure>
        <ul class="sidebar-menu">
            <!--<li class="sidebar-menu-item" v-for="route in routes">-->
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" to="/admin">
                    <FeatherIcon type="home"/>
                    Home
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('users')" to="/admin/users">
                    <FeatherIcon type="users"/>
                    Usuários
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('buyers')" to="/admin/buyers">
                    <FeatherIcon type="users"/>
                    Compradores
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('sellers')" to="/admin/sellers">
                    <FeatherIcon type="users"/>
                    Vendedores
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import FeatherIcon from './FeatherIcon';

    export default {
        name: "Menu",
        components: {
            FeatherIcon,
        },
        computed: {
            routes() {
                // return this.$router.options.routes;
                // return this.$router.options.routes[1].children;
            },
            route(){
                return this.$route
            },
            username(){
                return this.$store.state.user.currentUser.name
            },
            type(){
                return this.$store.state.user.currentUser.type
            }
        },
        methods: {
            setActiveClass(routeName){
                if (this.route.name === routeName)
                    return 'router-link-exact-active'
            },
            literalUserType(type){

                if(type === 'admin'){
                    return 'Administrador';
                }else if (type === 'buyer'){
                    return 'Comprador'
                }else{
                    return 'Vendedor'
                }
            }
        },
    }
</script>

<style scoped lang="sass">

</style>
