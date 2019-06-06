<template>
    <div class="row justify-content-center align-items-center h-100">
        <div class="col-6">
            <div class="row justify-content-end">
                <!--<img class="login-logo" src="svg/login-logo.svg" alt="">-->
                <h1 class="logo logo-alfred">Alfred</h1>
            </div>
        </div>
        <div class="col-6">
            <form id="login"
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
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
    import { required, minLength, email } from 'vuelidate/lib/validators'
    import { mapState, mapActions } from 'vuex';
    import UserService from './../services/user';

    export default {
        name: "Login",
        data(){
            return {
                email: '',
                password: '',
                submitted: false,
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
            ...mapActions(['setCurrentUser']),

            handleSubmit (){
                this.$v.$touch();
                // this.submitted = true;
                const { email, password } = this;


                if (!this.$v.$invalid) {
                    console.log(UserService.getCurrent(111222333))
                    // this.setCurrentUser({
                    //     id: 1,
                    //     role: '',
                    //     name: 'Test',
                    //     email: 'test@test.com'
                    // });
                    // do submit
                    // this.$http.post('/api/auth/login', {
                    //     email: this.email,
                    //     password: this.password
                    // }).then(response => {
                    //     console.log(response)
                    //     // // login user, store the token and redirect to dashboard
                    //     // store.commit('loginUser')
                    //     localStorage.setItem('token', response.data.access_token)
                    //     this.$router.push({ name: 'dashboard' })
                    // }).catch(error => {
                    //     this.submitted = false;
                    //     console.log(error)
                    // });
                }else{
                    this.submitted = false;
                    // set error
                }
            }
        },
        mounted(){
            if(localStorage.getItem('token')){
                this.$router.push({ name: 'dashboard' })
            }
        }
    }
</script>

<style scoped>

</style>
