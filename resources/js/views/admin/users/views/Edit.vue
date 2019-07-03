<template>
    <div>
        <div class="col-12">
            <form id=""
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
                <Alert/>
                <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model.trim="$v.name.$model" id="name" placeholder="Name">
                    <div class="error" v-if="$v.name.$error">
                        <div class="error-msg" v-if="!$v.name.required">Nome requerido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model.trim="$v.email.$model" id="email" placeholder="Email">
                    <div class="error" v-if="$v.email.$error">
                        <div class="error-msg" v-if="!$v.email.required">Email requerido</div>
                        <div class="error-msg" v-if="!$v.email.email">Email inválido</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'
    import Alert from '../../../../components/Alert/Alert';
    import UsersService from './../../../../services/users'

    const usersService = UsersService.init();

    export default {
        name: "Edit",
        components: {
            Alert,
        },
        data(){
            return {
                id: 0,
                name: '',
                email: '',
                submitted: false,
                error: false,
            }
        },
        validations: {
            name: {
                required,
            },
            email: {
                required,
                email
            },
        },
        created(){
            let id = this.$route.params.id;
            usersService.show(id).then((res) => {
                let user = res.data;

                this.id = user.id;
                this.name = user.name;
                this.email = user.email;

            }, (err) => {

            });
        },
        methods: {
            handleSubmit() {
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    usersService.update({
                        id: this.id,
                        name: this.name,
                        email: this.email,
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Usuário alterado.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/admin/users');
                    }, (err) => {
                        this.submitted = false;
                    })
                }else{
                    this.submitted = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
