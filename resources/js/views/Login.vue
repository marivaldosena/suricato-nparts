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
                <button type="submit" class="btn btn-primary" :disabled="submitted">Login</button>
                <span class="loading" v-if="submitted">Aguarde...</span>
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
                if(type === 1){
                    this.$router.push('admin');
                }else if(type === 2){
                    this.$router.push('customer/natural');
                }else if (type === 3){
                    this.$router.push('customer/legal');
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
