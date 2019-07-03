<template>
    <div>
        <div class="col-12">
            <p>editando anuncios</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Edit",
        components: {

        },
        data(){
            return {
                id: 0,
                submitted: false,
                error: false,
            }
        },
        validations: {

        },
        created(){
            let id = this.$route.params.id;

        },
        methods: {
            handleSubmit() {
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {

                }else{
                    this.submitted = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
