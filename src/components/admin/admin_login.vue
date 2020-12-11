<template>

<div class="container">


   <form class="form-signin">
 
      <img class="mb-4" src="https://img.icons8.com/color/96/000000/admin-settings-male.png" alt="" width="72" height="72">
 
      <h1 class="h3 mb-3 font-weight-normal">Entrar</h1>
 
      <input type="email" id="inputEmail" v-model="login.user" :class="{'form-control': true, 'is-invalid': (login.user == null || login.user == '') && check}" placeholder="Email" required autofocus>
 
      <input type="password" v-model="login.password" :class="{'form-control': true, 'is-invalid': (login.password == null || login.password == '') && check}" placeholder="Senha" required>
 
      <button class="btn btn-lg btn-primary btn-block mt-4" @click="entry" type="button">Avançar</button>
 
      <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
 
    </form>

</div>

</template>



<script>

import { mapMutations, mapState} from 'vuex'
import Axios from 'axios'
import api_url from '../../../APIPath'

export default {
    
    data(){
        return {
            check: false,
            login: {}
        }
    },

    computed: {
        ...mapState({
            admin_access: state => state.admin_access
        })
    },


    created(){

        this.disable_all()

        this.login = {user: null, password: null}

        if(localStorage.getItem('token') != null && localStorage.getItem('token') != undefined){

            Axios.put(api_url + '/admin', {}, {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}).then( res => {

                if(res.data.auth){
                    this.admin_ON(localStorage.getItem('token'))
                    this.$router.push('/admin/historia')
                    this.hidden_d_Navbar()
                    console.log(res)
                }

            }).catch(err => {
                
                alert('Erro ao fazer auto login! Por favor, entre com seu email e senha.')
                localStorage.removeItem('token')
                this.$router.go()
                console.log(err)
            
            })
        }

    },

    methods: {
        ...mapMutations(['disable_all', 'admin_ON', 'admin_OFF', 'hidden_d_Navbar']),
        entry: function(){

            this.check = true
            
            if(this.check_form() == true){

                Axios.post(api_url + '/admin/login', this.login).then(res => {
                    
                    this.admin_ON(res.data.token)
                    this.hidden_d_Navbar()
                    this.$router.push('/admin/historia')

                }).catch(e => {
                    alert('Erro ao autenticar, verifique usuário/senha e tente novamente')
                    console.log(e)
                    this.$router.go()
                })

            }else{
                console.log('Erro ao autenticar')
            }
        },
        check_form: function(){
            
            var verified = true 

            for(var key in this.login)
                if(this.login[key] == null || this.login[key] == '')
                    return false

            return verified
        }
    },


    

}

</script>



<style scoped>

.container{
    margin-top: 15%;
    padding-left: 19%;
    padding-right: 19%;
}

</style>