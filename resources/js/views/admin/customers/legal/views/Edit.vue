<template>
    <div>
        <div class="col-12">
            <form id=""
                  @submit.prevent="handleSubmit"
                  method="post"
                  novalidate>
                <Alert/>
                <div class="form-group" :class="{ 'form-group--error': $v.username.$error }">
                    <label class="typo__label">Selecione um usuário</label>
                    <Multiselect
                            v-model="username"
                            id="ajax"
                            label="name"
                            selectLabel="Pressione enter para selecionar"
                            selectedLabel="Selecionado"
                            deselectLabel="Pressione enter para remover"
                            placeholder="Digite um nome"
                            open-direction="bottom"
                            :options="users"
                            :searchable="true"
                            :loading="isLoading"
                            @search-change="getUsers">
                        <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                    </Multiselect>
                    <div class="error" v-if="$v.username.$error">
                        <div class="error-msg" v-if="!$v.username.required">Usuário requerido</div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.cnpj.$error }">
                        <label for="cnpj">Cnpj</label>
                        <input type="text" class="form-control" v-model.trim="$v.cnpj.$model" id="cnpj" placeholder="xx.xxx.xxx/xxxx-xx">
                        <div class="error" v-if="$v.cnpj.$error">
                            <div class="error-msg" v-if="!$v.cnpj.required">Cnpj requerido</div>
                            <div class="error-msg" v-if="!$v.cnpj.maxLength || !$v.cnpj.cnpj">Cnpj inválido</div>
                        </div>
                    </div>
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.company_name.$error }">
                        <label for="company_name">Razão Social</label>
                        <input type="text" class="form-control" v-model.trim="$v.company_name.$model" id="company_name" placeholder="Razão Social">
                        <div class="error" v-if="$v.company_name.$error">
                            <div class="error-msg" v-if="!$v.company_name.maxLength">Razão Social requerido</div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.trade_name.$error }">
                        <label for="trade_name">Nome fantasia</label>
                        <input type="text" class="form-control" v-model.trim="$v.trade_name.$model" id="trade_name" placeholder="Nome fantasia">
                        <div class="error" v-if="$v.trade_name.$error">
                            <div class="error-msg" v-if="!$v.trade_name.required">Nome Fantasia requerido</div>
                        </div>
                    </div>
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.state_registration.$error }">
                        <label for="state_registration">Inscrição Estadual</label>
                        <input type="text" class="form-control" v-model.trim="$v.state_registration.$model" id="state_registration" placeholder="Inscrição Estadual">
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" :disabled="submitted">Salvar</button>
            </form>
        </div>
    </div>
</template>

<script>
    import { required, maxLength } from 'vuelidate/lib/validators'
    import Alert from '../../../../../components/Alert/Alert';
    import Multiselect from 'vue-multiselect'
    import LegalCustomerService from './../../../../../services/legal_customer';

    const legalCustomerService = LegalCustomerService.init();

    // todo - essa funcao talvez deveria ficar em um mixim, pois ela valida tanto cpf como cnpj
    const cnpj = (value) => {
        return /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(value);
    };

    export default {
        name: "Create",
        components: {
            Alert,
            Multiselect,
        },
        data(){
            return {
                users: [],
                username: '',
                id: 0,
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
            username: {
                required,
            },
            cnpj: {
                required,
                maxLength: maxLength(18),
                cnpj
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
        created(){
            let id = this.$route.params.id;

            legalCustomerService.show(id).then((res) => {
                const {data: {user, legal_person_info}} = res;

                this.username = user;

                this.id = res.data.id;
                this.cnpj = legal_person_info.cnpj;
                this.company_name = legal_person_info.company_name;
                this.trade_name = legal_person_info.trade_name;
                this.state_registration = legal_person_info.state_registration;
            });

            this.getUsers();
        },
        methods: {
            getUsers(name){
                this.isLoading = true;

                legalCustomerService.unusedCustomerUsers(3, name).then((res) => {
                    this.isLoading = false;
                    this.users = res.data;
                });
            },
            handleSubmit(){
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    let cnpj = this.cnpj.replace(/\D+/g, "");

                    legalCustomerService.update({
                        id: this.id,
                        cnpj: cnpj,
                        company_name: this.company_name,
                        trade_name: this.trade_name,
                        state_registration: this.state_registration,
                        user_id: this.username.id
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Cliente alterado.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/admin/customers/legal');
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>
