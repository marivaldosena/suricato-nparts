<template>
    <div>
        <div class="col-12">
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
                <p class="form-group--title mt-4">Dados da empresa</p>
                <div class="form-group" :class="{ 'form-group--error': $v.cnpj.$error }">
                    <label for="cnpj">Cnpj</label>
                    <input type="text" class="form-control" v-model.trim="$v.cnpj.$model" id="cnpj" placeholder="xx.xxx.xxx/xxxx-xx">
                    <div class="error" v-if="$v.cnpj.$error">
                        <div class="error-msg" v-if="!$v.cnpj.required">Cnpj requerido</div>
                        <div class="error-msg" v-if="!$v.cnpj.maxLength || !$v.cnpj.cnpj">Cnpj inválido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.company_name.$error }">
                    <label for="company_name">Razão Social</label>
                    <input type="text" class="form-control" v-model.trim="$v.company_name.$model" id="company_name" placeholder="Razão Social">
                    <div class="error" v-if="$v.company_name.$error">
                        <div class="error-msg" v-if="!$v.company_name.maxLength">Razão Social requerido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.trade_name.$error }">
                    <label for="trade_name">Nome fantasia</label>
                    <input type="text" class="form-control" v-model.trim="$v.trade_name.$model" id="trade_name" placeholder="Nome fantasia">
                    <div class="error" v-if="$v.trade_name.$error">
                        <div class="error-msg" v-if="!$v.trade_name.required">Nome Fantasia requerido</div>
                    </div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.state_registration.$error }">
                    <label for="state_registration">Inscrição Estadual</label>
                    <input type="text" class="form-control" v-model.trim="$v.state_registration.$model" id="state_registration" placeholder="Inscrição Estadual">
                </div>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, maxLength, email} from 'vuelidate/lib/validators'
    import Alert from '../../../../components/Alert/Alert';
    import { cpfOrCnpj } from "../../../../validators";
    import SellersService from './../../../../services/sellers';

    const sellersService = SellersService.init();

    export default {
        name: "Create",
        components: {
            Alert,
        },
        data(){
            return {
                name: '',
                email: '',
                cnpj: '',
                company_name: '',
                trade_name: '',
                state_registration: '',
                submitted: false,
                error: false,
                isLoading: false,
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
            cnpj: {
                required,
                maxLength: maxLength(18),
                cpfOrCnpj
            },
            company_name: {
                required,
            },
            trade_name: {
                required
            },
            state_registration: {

            }
        },
        methods: {
            handleSubmit(){
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    let cnpj = this.cnpj.replace(/\D+/g, "");

                    sellersService.store({
                        name: this.name,
                        email: this.email,
                        cnpj: cnpj,
                        company_name: this.company_name,
                        trade_name: this.trade_name,
                        state_registration: this.state_registration,
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Vendedor criado.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/admin/sellers');
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
