<template>
    <div>
        <Header/>
        <div class="row">
            <Alert/>
            <div class="col-12">
                <h2>Cadastro</h2>
                <p>Obrigado por se cadastrar em nossa plataforma. Utilize o formulário abaixo para criar sua senha.</p>
            </div>
            <form id=""
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate
                  class="col-6">
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
                <button type="submit" class="btn btn-primary" :disabled="submitted">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, maxLength, sameAs, email } from 'vuelidate/lib/validators'
    import { passwordRegex } from "../validators";
    import UsersService from '../services/users';
    import Header from '../components/Header';
    import Alert from '../components/Alert/Alert';

    const usersService = UsersService.init();

    export default {
        name: "CreatePassword",
        components: {
            Header,
            Alert,
        },
        data(){
            return {
                token: this.$route.params.token,
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
                    usersService.createPassword({
                        id: this.token,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                    }).then((res) => {

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'You created a new password. Please, login',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/');
                    }, (err) => {
                        this.submitted = false;
                        this.$store.dispatch('setAlert', {
                            type: 'danger',
                            message: 'Invalid token provided.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/');
                    });
                }else{
                    this.submitted = false;
                }
            }
        },
        created(){
            //
        }
    }
</script>

<style scoped>

</style>
