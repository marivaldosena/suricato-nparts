<template>
    <div>
        <header class="blog-header py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="text-muted" href="#"> </a>
                </div>
                <div class="col-4 text-center">
                    <a class="header-logo text-dark" href="#">Nparts</a>
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <a class="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="mx-3" role="img" viewBox="0 0 24 24" focusable="false">
                            <title>Pesquisar</title>
                            <circle cx="10.5" cy="10.5" r="7.5"></circle>
                            <path d="M21 21l-5.2-5.2"></path>
                        </svg>
                    </a>
                    <router-link class="btn btn-sm btn-outline-secondary" to="/login">Login</router-link>
                </div>
            </div>
        </header>
        <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between">
                <router-link class="p-2 text-muted" to="/">Home</router-link>
            </nav>
        </div>
    </div>
</template>

<script>
    import FeatherIcon from './FeatherIcon';

    export default {
        name: "Header",
        components: {
            FeatherIcon,
        },
    }
</script>

<style scoped lang="scss">
    .blog-header{
        line-height: 1;
        border-bottom: 1px solid #e5e5e5;
        .header-logo {
            font-family: "Playfair Display", Georgia, "Times New Roman", serif;
            font-size: 2.25rem;
        }
    }
</style>
