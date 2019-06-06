<template>
    <nav class="sidebar">
        <figure class="user">
            <img src="/img/avatar.png" class="user-avatar" alt="User avatar">
            <figcaption class="user-details">
                <p class="name">Fulano de tal</p>
                <p class="user-type">Developer</p>
            </figcaption>
        </figure>
        <ul class="sidebar-menu">
            <!--<li class="sidebar-menu-item" v-for="route in routes">-->
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" to="/dashboard">
                    <FeatherIcon type="home"/>
                    Home
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('jobs')" to="/dashboard/jobs">
                    <FeatherIcon type="list"/>
                    Jobs
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('users')" to="/dashboard/users">
                    <FeatherIcon type="users"/>
                    Usuários
                </router-link>
            </li>
            <li class="sidebar-menu-item">
                <router-link class="d-flex align-items-center" :class="setActiveClass('settings')" to="/dashboard/settings">
                    <FeatherIcon type="settings"/>
                    Configurações
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