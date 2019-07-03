<template>
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-6">
            <div class="row justify-content-end">
                <!--<img class="login-logo" src="svg/login-logo.svg" alt="">-->
                <h1 class="logo logo-alfred">Suricato</h1>
            </div>
        </div>
        <div class="col-6">
            <form id="login"
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
                <Alert/>

                <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label for="password">Senha</label>
                    <input type="password" class="form-control" v-model.trim="$v.password.$model" id="password" placeholder="Senha">
                    <div class="error" v-if="$v.password.$error">
                        <div class="error-msg" v-if="!$v.password.required">Senha requerida</div>
                        <div class="error-msg" v-if="!$v.password.passwordRegex">Senha em formato incorreto</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.password_confirmation.$error }">
                    <label for="password_confirmation">Confirme a Senha</label>
                    <input type="password" class="form-control" v-model.trim="$v.password_confirmation.$model" id="password_confirmation" placeholder="Confirme a Senha">
                    <div class="error" v-if="$v.password_confirmation.$error">
                        <div class="error-msg" v-if="!$v.password_confirmation.sameAsPassword">A senha deve ser igual</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="submitted">Salvar</button>
                <p class="loading" v-if="this.submitted">Aguarde...</p>
                <div class="form-group">
                    <router-link to="/login">Voltar</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, sameAs } from 'vuelidate/lib/validators'
    import Alert from '../../../components/Alert/Alert';
    import ResetService from '../../../services/reset';

    const resetService = ResetService.init();

    const passwordRegex = value => {
        return /^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/.test(value);
    };

    export default {
        name: "Create",
        components: {
            Alert
        },
        props: {
            token: String
        },
        data(){
            return {
                password: '',
                password_confirmation: '',
                submitted: false,
                error: false,
            }
        },
        validations: {
            password: {
                required,
                passwordRegex
            },
            password_confirmation: {
                sameAsPassword: sameAs('password')
            },
        },
        methods: {
            handleSubmit(){
                this.$v.$touch();
                this.submitted = true;

                if(!this.$v.invalid){
                    resetService.update({
                        id: this.token,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                    }).then((res) => {

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'You created a new password. Please, login',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/login');
                    }, (err) => {
                        this.submitted = false;
                    });
                }else{
                    this.submitted = false;
                }
            }
        },
        created(){
            if(this.token){
                resetService.show({
                    id: this.token,
                }).then((res) => {

                }, (err) => {
                    this.$store.dispatch('setAlert', {
                        type: 'danger',
                        message: 'Invalid token provided.',
                        show: true,
                    }).then(() => {});
                    this.$router.push('/login');
                })
            }
        }
    }
</script>

<style scoped>

</style>
