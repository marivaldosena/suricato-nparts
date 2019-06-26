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
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.cpf.$error }">
                        <label for="cpf">Cpf</label>
                        <input type="text" class="form-control" v-model.trim="$v.cpf.$model" id="cpf" placeholder="xxx.xxx.xxx-xx">
                        <div class="error" v-if="$v.cpf.$error">
                            <div class="error-msg" v-if="!$v.cpf.required">Cpf requerido</div>
                            <div class="error-msg" v-if="!$v.cpf.maxLength">Cpf inválido</div>
                        </div>
                    </div>
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.rg.$error }">
                        <label for="rg">Rg</label>
                        <input type="text" class="form-control" v-model.trim="$v.rg.$model" id="rg" placeholder="xx.xxx.xxx-x">
                        <div class="error" v-if="$v.rg.$error">
                            <div class="error-msg" v-if="!$v.rg.maxLength">Rg inválido</div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.birthday.$error }">
                        <label for="birthday">Data nascimento</label>
                        <input type="text" class="form-control" v-model.trim="$v.birthday.$model" id="birthday" placeholder="dd/mm/aaaa">
                        <div class="error" v-if="$v.birthday.$error">
                            <div class="error-msg" v-if="!$v.birthday.required">Data de nascimento requerida</div>
                            <div class="error-msg" v-if="!$v.birthday.maxLength">Data de nascimento inválida</div>
                        </div>
                    </div>
                    <div class="form-group col-6" :class="{ 'form-group--error': $v.gender.$error }">
                        <label for="gender">Sexo</label>
                        <select id="gender" class="form-control" v-model.trim="$v.gender.$model">
                            <option value="" selected>Indefinido</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>
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
    import NaturalCustomerService from './../../../../../services/natural_customer';
    import moment from 'moment';

    const naturalCustomerService = NaturalCustomerService.init();

    const cpf = (value) => {
        return /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/.test(value);
    };

    const date = (value) => {
        return /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)((19)[6-9][0-9])$/.test(value);
    };

    const gender = (value) => {
        if(value){
            return /^(M|F)$/.test(value);
        }
        return true;
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
                cpf: '',
                rg: '',
                birthday: '',
                gender: '',
                submitted: false,
                error: false,
                isLoading: false,
            }
        },
        validations: {
            username: {
                required,
            },
            cpf: {
                required,
                maxLength: maxLength(14),
                cpf
            },
            rg: {
                maxLength: maxLength(14)
            },
            birthday: {
                date
            },
            gender: {
                gender
            }
        },
        created(){
            this.getUsers();
        },
        methods: {
            getUsers(name){
                this.isLoading = true;

                naturalCustomerService.unusedCustomerUsers(2, name).then((res) => {
                    this.isLoading = false;
                    this.users = res.data;
                });
            },
            handleSubmit(){
                this.$v.$touch();
                this.submitted = true;

                if (!this.$v.$invalid) {
                    let cpf = this.cpf.replace(/\D+/g, ""),
                        birthday = moment(this.birthday, 'DD/MM/YYYY').format("YYYY-MM-DD");

                    naturalCustomerService.store({
                        cpf: cpf,
                        rg: this.rg,
                        birthday: birthday,
                        gender: this.gender,
                        user_id: this.username.id
                    }).then((res) => {
                        this.submitted = false;

                        this.$store.dispatch('setAlert', {
                            type: 'success',
                            message: 'Cliente criado.',
                            show: true,
                        }).then(() => {});

                        this.$router.push('/admin/customers/natural');
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
