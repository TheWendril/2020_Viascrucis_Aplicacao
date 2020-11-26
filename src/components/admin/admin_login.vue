<template>

<div class="container">


   <form class="form-signin">
      <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Entrar</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required>
      <button class="btn btn-lg btn-primary btn-block mt-4" type="button">Avançar</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2020</p>
    </form>

</div>

</template>



<script>

import { mapMutations, mapState} from 'vuex'
import Axios from 'axios'

export default {
    
    data(){
        return {
            
        }
    },

    computed: {
        ...mapState({
            admin_access: state => state.admin_access
        })
    },


    created(){

        this.disable_all()
        
        console.log(this.admin_access)

        if(this.admin_access){
            this.$router.push('/admin/historia')
            this.hidden_d_Navbar()
        }
        else{
            Axios.get('http://localhost:3000/admin').then(res => {console.log(res)}).catch(err => console.log(err))

        }
    },

    methods: {
        ...mapMutations(['disable_all', 'admin_ON', 'admin_OFF', 'hidden_d_Navbar'])
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