<template>
    <div>
        <Header/>
        <div class="s1-register-container">
            <h2>Cadastro</h2>
            <p class="mb-5">O que você deseja fazer?</p>

            <div class="d-flex">
                <div class="button-container text-center">
                    <router-link class="btn btn-light" to="/register/buyer">
                        <img :src="buyerIcon" alt="">
                    </router-link>
                    <p>Comprar</p>
                </div>
                <div class="button-container text-center">
                    <router-link class="btn btn-light" to="/register/seller">
                        <img :src="sellerIcon" alt="">
                    </router-link>
                    <p>Vender</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/Header';

    export default {
        name: "Register",
        components: {
            Header: Header
        },
        data() {
            return {
                buyerIcon: '/public/icons/buyer.png',
                sellerIcon: '/public/icons/seller.png',
            }
        }
    }
</script>

<style scoped>

</style>
