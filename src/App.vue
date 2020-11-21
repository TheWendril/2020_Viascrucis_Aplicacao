<template>

  <div id="app" class="bg-light">  
    <navbar/>
    <router-view></router-view>
    
  </div>

</template>

<script>

import navbar from './components/navbar'

export default {
  
  name: 'App',

  components: {
    navbar
    
  },

  methods: {
  
  },

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





