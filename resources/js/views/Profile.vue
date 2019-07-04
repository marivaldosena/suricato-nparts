<template>
    <div>
        <Title/>
        <Breadcrumb/>
        <form id=""
              @submit.prevent="handleSubmit"
              method="post"
              novalidate
              class="col-6">
            <Alert/>
            <p class="form-group--title">Trocar minha senha</p>
            <div class="form-group" :class="{ 'form-group--error': $v.current_password.$error }">
                <label for="current_password">Senha atual</label>
                <input type="password" class="form-control" v-model.trim="$v.current_password.$model" id="current_password" placeholder="Senha atual">
                <div class="error" v-if="$v.current_password.$error">
                    <div class="error-msg" v-if="!$v.new_password.required">Senha requerida</div>
                </div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.new_password.$error }">
                <label for="new_password">Nova Senha</label>
                <input type="password" class="form-control" v-model.trim="$v.new_password.$model" id="new_password" placeholder="Nova Senha">
                <div class="error" v-if="$v.new_password.$error">
                    <div class="error-msg" v-if="!$v.new_password.required">Senha requerida</div>
                    <div class="error-msg" v-if="!$v.new_password.passwordRegex">Senha em formato incorreto. Ela deve conter ao menos 6 dígitos com letras, números e caracteres especiais</div>
                </div>
            </div>
            <div class="form-group" :class="{ 'form-group--error': $v.new_password_confirmation.$error }">
                <label for="new_password_confirmation">Confirme a nova Senha</label>
                <input type="password" class="form-control" v-model.trim="$v.new_password_confirmation.$model" id="new_password_confirmation" placeholder="Confirme a nova Senha">
                <div class="error" v-if="$v.new_password_confirmation.$error">
                    <div class="error-msg" v-if="!$v.new_password_confirmation.sameAsPassword">A senha deve ser igual</div>
                </div>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
        </form>
    </div>
</template>

<script>
    import { required, sameAs } from 'vuelidate/lib/validators'
    import { passwordRegex } from "../validators";
    import Title from './../components/Title';
    import Breadcrumb from './../components/Breadcrumb';
    import Alert from './../components/Alert/Alert';
    import ProfileService from './../services/profile'

    const profileService = ProfileService.init();

    export default {
        name: "Profile",
        components: {
            Title,
            Breadcrumb,
            Alert,
        },
        data(){
            return {
                current_password: '',
                new_password: '',
                new_password_confirmation: '',
                submitted: false,
                error: false,
            }
        },
        validations: {
            current_password: {
                required,
            },
            new_password: {
                required,
                passwordRegex
            },
            new_password_confirmation: {
                sameAsPassword: sameAs('new_password')
            }
        },
        methods: {
            handleSubmit() {
                this.$v.$touch();
                this.submitted = true;

                const currentUser = this.$store.state.user.currentUser;

                if (!this.$v.$invalid) {
                    profileService.changePassword({
                        id: currentUser.id,
                        current_password: this.current_password,
                        new_password: this.new_password,
                        new_password_confirmation: this.new_password_confirmation,
                    }).then((res) => {

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Senha alterada.',
                            show: true,
                        }).then(() => {});

                        this.$router.push(`/${currentUser.type}`);
                    }, (err) => {
                        this.submitted = false;
                    })
                }else{
                    this.submitted = false;
                }
            }
        },
    }
</script>

<style scoped>

</style>
