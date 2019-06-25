<template>
    <nav class="sidebar">
        <figure class="user">
            <div class="user-details">
                <p>Seja bem vindo <span class="name">Fulano de tal</span></p>
                <p class="user-type">Developer</p>
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
                <a href="#">
                    <FeatherIcon type="settings"/>
                    Clientes
                </a>
                <ul>
                    <li>
                        <router-link class="d-flex align-items-center" to="/admin/customers/natural">
                            Pessoa Física
                        </router-link>
                    </li>
                    <li>
                        <router-link class="d-flex align-items-center" to="/admin/customers/legal">
                            Pessoa Jurídica
                        </router-link>
                    </li>
                </ul>
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
            }
        },
        methods: {
            setActiveClass(routeName){
                if (this.route.name === routeName)
                    return 'router-link-exact-active'
            }
        },
    }
</script>

<style scoped lang="sass">

</style>
