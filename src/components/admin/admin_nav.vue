<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
  <a class="navbar-brand">Administração</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-between" id="conteudoNavbarSuportado">
    
    <ul class="navbar-nav">


      <li :class="{'nav-item': true, 'active': admin_active_items[0]}" @click="enable_admin(0)">
        <a class="nav-link" @click="go_to_admin_histories">Histórias</a>
      </li>

      <li :class="{'nav-item': true, 'active': admin_active_items[1]}" @click="enable_admin(1)">
        <a class="nav-link" @click="go_to_admin_gallery" >Galeria</a>
      </li>

      

    </ul>

    <ul class="navbar-nav ml-auto">
      
      <li :class="{'nav-item': true, 'active': admin_active_items[0], 'mr-2': true}" @click="enable_admin(0)">
        <a class="nav-link">{{clicks_book}} clicks</a>
      </li>
      <li class="nav-item" @click="go_to_home">
        <a class="nav-link">Pagina Inicial</a>
      </li>
      <li class="nav-item" @click="quit">
        <a class="nav-link">Logout</a>
      </li>

    </ul>

  </div>
</nav>

</template>


<script>
import Axios from 'axios'
import {mapMutations, mapState} from 'vuex'
import url_api from '../../../APIPath'

export default {

    data(){
      return{
        clicks_book: 0
      }
    },

    created(){
      Axios.get(url_api + '/book').then(res => {
        console.log(res)
        this.clicks_book = res.data.views
      })
      .catch(err => {
        console.log(err)
      })
    },

    methods: {
        ...mapMutations([
            'enable_admin',
            'admin_OFF'
        ]),
        quit: function(){
            this.admin_OFF()
            this.$router.push('/')
        },
        go_to_admin_gallery: function(){
            this.$router.push('/admin/galeria')
        },
        go_to_admin_histories: function(){
            this.$router.push('/admin/historia')
        },
        go_to_home: function(){
          this.$router.push('/')
        },
        
    },

    computed: {
        ...mapState({
            admin_active_items: state => state.admin_active_items
        })
    }

}

</script>


<style scoped>

a:hover{
    cursor: pointer;
}

</style>
