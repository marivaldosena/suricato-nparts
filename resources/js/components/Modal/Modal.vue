<template>
    <div class="nparts-modal d-flex justify-content-center align-items-center">
        <button class="btn btn-close" v-on:click="toggleModal">
            <img src="/public/icons/cancel.png" alt="">
        </button>
        <div class="nparts-modal-content">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot name="main"></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Modal",
        methods: {
            ...mapActions(['toggleModal']),
        }
    }
</script>

<style scoped lang="scss">
    .nparts-modal{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: rgba(255,255,255, .8);
        z-index: 1;
        .btn-close{
            position: absolute;
            top: 100px;
            right: 100px;
            font-size: 20px;
            img{
                max-width: 30px;
            }
        }
        .nparts-modal-content{
            background: #fff;
            min-width: 500px;
            min-height: 500px;
            /*-webkit-box-shadow: 0px 0px 21px 1px rgba(0,0,0,0.1);*/
            /*-moz-box-shadow: 0px 0px 21px 1px rgba(0,0,0,0.1);*/
            /*box-shadow: 0px 0px 21px 1px rgba(0,0,0,0.1);*/
            padding: 20px;
            header{
                margin-bottom: 10px;
                border-bottom: 1px solid #ccc;
            }
            footer{
                margin-top: 10px;
                border-top: 1px solid #ccc;
            }
        }
    }
</style>
