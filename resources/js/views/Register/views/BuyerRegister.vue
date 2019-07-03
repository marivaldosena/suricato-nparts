<template>
    <div>
        <Header/>
        <div class="row">
            <form id=""
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate
                  class="col-6">
                <Alert/>
                <p class="form-group--title">Dados de login</p>
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
                <p class="form-group--title mt-4">Dados pessoais</p>
                <div class="form-group" :class="{ 'form-group--error': $v.cpf.$error }">
                    <label for="cpf">Cpf</label>
                    <input type="text" class="form-control" v-model.trim="$v.cpf.$model" id="cpf" placeholder="xxx.xxx.xxx-xx">
                    <div class="error" v-if="$v.cpf.$error">
                        <div class="error-msg" v-if="!$v.cpf.required">Cpf requerido</div>
                        <div class="error-msg" v-if="!$v.cpf.maxLength">Cpf inválido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.rg.$error }">
                    <label for="rg">Rg</label>
                    <input type="text" class="form-control" v-model.trim="$v.rg.$model" id="rg" placeholder="xx.xxx.xxx-x">
                    <div class="error" v-if="$v.rg.$error">
                        <div class="error-msg" v-if="!$v.rg.maxLength">Rg inválido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.birthday.$error }">
                    <label for="birthday">Data nascimento</label>
                    <input type="text" class="form-control" v-model.trim="$v.birthday.$model" id="birthday" placeholder="dd/mm/aaaa">
                    <div class="error" v-if="$v.birthday.$error">
                        <div class="error-msg" v-if="!$v.birthday.required">Data de nascimento requerida</div>
                        <div class="error-msg" v-if="!$v.birthday.maxLength">Data de nascimento inválida</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.gender.$error }">
                    <label for="gender">Sexo</label>
                    <select id="gender" class="form-control" v-model.trim="$v.gender.$model">
                        <option value="" selected>Indefinido</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, maxLength, sameAs, email } from 'vuelidate/lib/validators'
    import Header from '../../../components/Header';
    import Alert from '../../../components/Alert/Alert';
    import { cpfOrCnpj, date, gender, passwordRegex } from "../../../validators";
    import BuyersService from './../../../services/buyers';

    const buyersService = BuyersService.init();

    export default {
        name: "BuyerRegister",
        components: {
            Header,
            Alert
        },
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
                cpf: '',
                rg: '',
                birthday: '',
                gender: '',
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
            cpf: {
                required,
                maxLength: maxLength(14),
                cpfOrCnpj
            },
            rg: {
                maxLength: maxLength(14)
            },
            birthday: {
                date
            },
            gender: {
                gender
            },
        },
        methods: {
            handleSubmit(){
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    let cpf = this.cpf.replace(/\D+/g, ""),
                        birthday = this.$moment(this.birthday, 'DD/MM/YYYY').format("YYYY-MM-DD");

                    buyersService.store({
                        name: this.name,
                        email: this.email,
                        cpf: cpf,
                        rg: this.rg,
                        birthday: birthday,
                        gender: this.gender,
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Cadastro realizado. Você receberá um e-mail com mais informações.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/');
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
