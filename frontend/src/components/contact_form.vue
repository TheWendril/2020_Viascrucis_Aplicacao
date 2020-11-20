<template>

<!------ Include the above in your HEAD tag ---------->
<div>
    
    <div class="container contact">
        <div class="row">
            <div class="col-md-3">
                <div class="contact-info">
                    <img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
                    <h2>Contato</h2>
                    <h5>Envie-nos uma mensagem!</h5>
                </div>
            </div>
            <div class="col-md-9">
                <div class="contact-form">
                    <div class="form-group">
                        <div class="col-sm-10">          
                            <input type="text" v-model="form_contact.name" :class="{'form-control': true, 'is-invalid': form_contact.name == '' && check}" id="fname" placeholder="Nome" name="fname">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10">          
                            <input type="text" v-model="form_contact.lastName" :class="{'form-control': true, 'is-invalid': form_contact.lastName == '' && check}" id="lname" placeholder="Sobrenome" name="lname">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10">
                            <input type="email" v-model="form_contact.email" :class="{'form-control': true, 'is-invalid': form_contact.email == '' && check}" id="email" placeholder="Email" name="email">
                        </div>
                    </div>
                        <div class="form-group">
                        <div class="col-sm-10">
                            <textarea :class="{'form-control': true, 'is-invalid': form_contact.message == '' && check}" v-model="form_contact.message" rows="5" id="comment" placeholder="Digite sua mensagem..."></textarea>
                        </div>
                    </div>
                    <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="button" @click="send_message" class="btn btn-outline-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>



<script>

import {mapMutations} from  'vuex'
import Axios from 'axios'

export default {

    data(){
        return{

            form_contact : {},
            check: false

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
        this.enable(2)
    },
    methods: {
        
        ...mapMutations(['enable']),
        
        send_message: function(){
            
            this.check = true

            if(this.validate()){
                Axios.post('http://localhost:3000/contact', this.form_contact).then( res => 
                {
                    console.log(res)
                    alert('Mensagem Enviada com sucesso')
                    this.$router.push('/')
                }
                ).catch(e => 
                {
                    console.log(e)
                    alert('Erro no Envio da mensagem')
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

body{
		background-color: #25274d;
	}
	.contact{
		padding: 4%;
		height: 400px;
	}
	.col-md-3{
		background: rgb(54, 195, 225);
		padding: 4%;
		border-top-left-radius: 0.5rem;
		border-bottom-left-radius: 0.5rem;
	}
	.contact-info{
		margin-top:10%;
	}
	.contact-info img{
		margin-bottom: 15%;
	}
	.contact-info h2{
		margin-bottom: 10%;
	}
	.col-md-9{
		background: #fff;
		padding: 3%;
		border-top-right-radius: 0.5rem;
		border-bottom-right-radius: 0.5rem;
	}
	.contact-form label{
		font-weight:600;
	}
	

</style>