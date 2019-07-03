<template>
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-6">
            <div class="row justify-content-end">
                <!--<img class="login-logo" src="svg/login-logo.svg" alt="">-->
                <h1 class="logo logo-alfred">nparts</h1>
            </div>
        </div>
        <div class="col-6">
            <form id="login"
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
                <Alert/>
                <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" v-model.trim="$v.email.$model" id="email" placeholder="Email">
                    <div class="error" v-if="$v.email.$error">
                        <div class="error-msg" v-if="!$v.email.required">Email requerido</div>
                        <div class="error-msg" v-if="!$v.email.email">Email inválido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
                    <label for="password">Senha</label>
                    <input type="password" class="form-control" v-model.trim="$v.password.$model" id="password" placeholder="Senha">
                    <div class="error" v-if="$v.password.$error">
                        <div class="error-msg" v-if="!$v.password.required">Senha requerida</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4" :disabled="submitted">Login</button>
                <p class="loading" v-if="this.submitted">Aguarde...</p>
                <div class="form-group">
                    <p>Não possui cadastro? <router-link to="/register">Cadastre-se aqui.</router-link></p>
                    <router-link to="/reset">Esqueceu sua senha?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email } from 'vuelidate/lib/validators'
    import Alert from '../components/Alert/Alert';

    export default {
        name: "Login",
        components: {
            Alert
        },
        data(){
            return {
                email: '',
                password: '',
                submitted: false,
                error: false,
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                required,
            }
        },
        methods: {
            handleSubmit (){
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    this.$auth.login({
                        data: {
                            email: this.email,
                            password: this.password
                        },
                        success: function(res) {
                            const { data: { user } } = res;

                            this.redirectByType(user.type);
                        },
                        error: function() {
                            this.submitted = false;
                        },
                        rememberMe: true,
                        fetchUser: true
                    })
                }else{
                    this.submitted = false;
                }
            },
            redirectByType(type){
                if(type === "admin"){
                    this.$router.push('admin');
                }else if(type === "buyer"){
                    this.$router.push('buyer');
                }else if (type === "seller"){
                    this.$router.push('seller');
                }
            }
        },
        created(){
            let userType = this.$auth.user().type;

            if(localStorage.getItem('token') && userType){
                this.redirectByType(userType);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
