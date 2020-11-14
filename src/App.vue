<template>

  <div id="app" class="bg-light">  

    <navbar/>
    <banner/>
    <about/>
    <about_map/>
    <footer_form/>

  </div>

</template>

<script>

import navbar from './components/navbar.vue'
import banner from './components/banner.vue'
import about from './components/about.vue'
import about_map from './components/about_map.vue'
import footer_form from './components/footer_form'

export default {
  
  name: 'App',

  components: {
    banner,
    navbar,
    about,
    about_map,
    footer_form,
    
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
  margin-top: 20px;
}
</style>





