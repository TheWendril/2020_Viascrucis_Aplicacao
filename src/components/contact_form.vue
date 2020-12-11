<template>

<div class="container">
    
      <div class="text-center">
        <h2>Contato</h2>
        <h4>Informe os campos abaixo</h4>
      </div>
    
    <div class="spinner-border text-primary" v-if="loading" role="status">
        <span class="sr-only">Loading...</span>
    </div>

    <form class="needs-validation" novalidate>    
       <div class="row">
            <div class="col-md-6 offset-md-3">
                <hr class="mb-5">
                  
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName_person">Nome</label>
                        <input type="text" :class="{'form-control': true, 'is-invalid': form_contact.name == '' && check}" id="firstName_person"  v-model="form_contact.name" placeholder="" required>
                            <div class="invalid-feedback">
                                Campo obrigatório!
                            </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName_person">Sobrenome</label>
                        <input type="text" :class="{'form-control': true, 'is-invalid': form_contact.lastName == '' && check}" id="lastName_person" v-model="form_contact.lastName" placeholder="" value="" required>
                            <div class="invalid-feedback">
                                Campo obrigatório!
                            </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col mb-3">
                        <label for="email">Email</label>
                        <input type="email" :class="{'form-control': true, 'is-invalid': form_contact.email == '' && check}" id="email" v-model="form_contact.email" placeholder="usuário@dominio.com" required>
                            <div class="invalid-feedback">
                                Campo obrigatório!
                            </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label for="message">Mensagem</label>
                        <textarea :class="{'form-control': true, 'is-invalid': form_contact.message == '' && check}" rows="4" required id="message" v-model="form_contact.message" placeholder="Digite sua homenagem..."></textarea>
                        <div class="invalid-feedback">
                                Campo obrigatório!
                        </div>
                    </div>
                </div>
            <input class="btn btn-primary btn-lg btn-block mt-5 mb-5" type="button" @click="send_message" value="Enviar formulário"> 
            </div>

       </div>
    </form>

</div>

</template>



<script>

import {mapMutations} from  'vuex'
import Axios from 'axios'
import api_url from '../../APIPath'

export default {

    data(){
        return{
            form_contact : {},
            check: false,
            loading: false
        }
    },

    components: {},

    created(){

        this.form_contact = {
            name: '',
            lastName: '',
            email: '',
            message: ''
        }
        this.validate()
        this.enable(3)

    },
    methods: {
        
        ...mapMutations(['enable']),
        
        send_message: function(){
            
            this.check = true

            if(this.validate()){

                this.loading = true

                Axios.post(api_url + '/contact', this.form_contact).then( res => 
                {
                    console.log(res)
                    this.loading = false
                    alert('Mensagem Enviada com sucesso')
                    this.$router.push('/')
                }
                ).catch(e => 
                {
                    this.loading = false
                    console.log(e)
                    alert('Erro no Envio da mensagem')
                    this.$router.go()
                })
            }
        },

        validate: function(){
            
            var bool = true

            Object.keys(this.form_contact).forEach(item => {
                if(this.form_contact[item] == '')
                    bool = false
            })

            return bool

        }
    }

}
</script>

<style scoped>

.container{
    margin-top: 110px;
}	

</style>