<template>
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-6">
            <div class="row justify-content-end">
                <!--<img class="login-logo" src="svg/login-logo.svg" alt="">-->
                <h1 class="logo logo-alfred">nparts</h1>
            </div>
        </div>
        <div class="col-6">
            <form @submit.prevent="handleSubmit"
                  id="login"
                  method="post"
                  novalidate>
                <Alert/>
                <div :class="{ 'form-group--error': $v.email.$error }" class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" id="email" placeholder="Email" type="email"
                           v-model.trim="$v.email.$model">
                    <div class="error" v-if="$v.email.$error">
                        <div class="error-msg" v-if="!$v.email.required">Email requerido</div>
                        <div class="error-msg" v-if="!$v.email.email">Email inválido</div>
                    </div>
                </div>
                <button :disabled="submitted" class="btn btn-primary btn-block mb-4" type="submit">Enviar</button>
                <p class="loading" v-if="this.loading">Aguarde...</p>
                <div class="form-group">
                    <router-link to="/login">Voltar</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'
    import Alert from '../../../components/Alert/Alert';
    import ResetService from '../../../services/reset';

    const resetService = ResetService.init();

    export default {
        name: "ResetPassword",
        components: {
            Alert
        },
        data() {
            return {
                email: '',
                submitted: false,
                error: false,
                loading: false,
            }
        },
        validations: {
            email: {
                required,
                email
            },
        },
        methods: {
            handleSubmit() {
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    resetService.store({
                        email: this.email
                    }).then(() => {
                        this.email = '';
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'You will receive a password reset link in your email.',
                            show: true,
                        }).then(() => {
                        });

                        this.$router.push('/login');
                    }, (err) => {
                        this.submitted = false;
                    });
                } else {
                    this.submitted = false;
                }
            }
        }
    }
</script>

<style scoped>

</style>
