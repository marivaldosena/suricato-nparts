<template>
    <div :class="'alert alert-dismissible alert-' + this.type" role="alert" v-if="this.show">
        {{this.message}}
        <button type="button" class="close" v-on:click="clearAlert()" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "Alert",

        methods: {
            ...mapActions(['setAlert', 'clearAlert']),
        },
        computed: {
            // ...mapState('alert', ['type', 'show', 'message']),
            ...mapState({
                type: state => state.alert.type,
                show: state => state.alert.show,
                message: state => state.alert.message
            })
        }
    }
</script>

<style scoped>

</style>
