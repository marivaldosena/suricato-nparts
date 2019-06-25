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
                <div class="form-row">
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.type.$error }">
                        <label for="type">Selecione o tipo</label>
                        <select id="type" class="form-control" v-model.trim="$v.type.$model">
                            <option value="0">Selecione</option>
                            <option value="1">Administrador</option>
                            <option value="2">Pessoa Física</option>
                            <option value="3">Pessoa Jurídica</option>
                        </select>
                        <div class="error" v-if="$v.type.$error">
                            <div class="error-msg" v-if="!$v.type.checkType">Selecione o tipo</div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, email, integer, sameAs, helpers } from 'vuelidate/lib/validators'
    import Alert from '../../../../components/Alert/Alert';
    import UsersService from './../../../../services/users'

    const usersService = UsersService.init();

    const passwordRegex = value => {
        return /^[a-z.]*(?=.{3,})(?=.{1,})(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\d\X])(?=.*[!$#%@]).*$/.test(value);
    };

    const checkType = value => {
        return /^[1-3]{1}$/.test(value);
    };

    export default {
        name: "Create",
        components: {
            Alert,
        },
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                type: 0,
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
            password: {
                required,
                passwordRegex
            },
            password_confirmation: {
                sameAsPassword: sameAs('password')
            },
            type: {
                checkType
            }
        },
        methods: {
            handleSubmit() {
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    usersService.store({
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        password_confirmation: this.password_confirmation,
                        type: this.type
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Usuário criado.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/admin/users');
                    }, (err) => {

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
