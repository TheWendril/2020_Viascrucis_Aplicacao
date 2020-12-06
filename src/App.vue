<template>

  <div id="app" class="bg-light">  

    <navbar v-if="show_default_navbar"/>
    <admin_nav v-else-if="admin_access"/>
    <router-view></router-view>
    
  </div>

</template>

<script>

import navbar from './components/navbar'
import admin_nav from './components/admin/admin_nav'
import {mapState} from  'vuex'


export default {
  
  name: 'App',

  components: {
    navbar,
    admin_nav
  },

  methods: {
  
  },

  created(){
  },

  computed: {
    ...mapState({
      show_default_navbar: state => state.show_default_navbar,
      admin_access: state => state.admin_access
    })
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 24px;
}

html{
  background-color: rgb(248, 249, 250);
}
</style>





