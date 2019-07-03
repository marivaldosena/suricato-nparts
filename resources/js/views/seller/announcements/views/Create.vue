<template>
    <div>
        <div class="col-12">
            <p>criando anuncios</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Create",
        components: {

        },
        data(){
            return {
                submitted: false,
                error: false,
            }
        },
        validations: {

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
