<template>

  <div id="app" class="bg-light">  

    <navbar @navbar_click="navbar_item_click($event)"/>
    <div class="content" v-if="!hidden_main_page">
      <banner @send_history_click="open_send_history"/>
      <about/>
      <about_map/>
      <slide_carousel/>
      <footer_form/>
    </div>
    
    <div v-if="show_contact_form">
      <contact_form/>
    </div>

    <div v-if="show_send_history">
      <send_history/>
    </div>


  </div>

</template>

<script>

import navbar from './components/navbar.vue'
import banner from './components/banner.vue'
import about from './components/about.vue'
import about_map from './components/about_map.vue'
import footer_form from './components/footer_form'
import slide_carousel from './components/slide_carousel.vue'
import contact_form from './components/contact_form'
import send_history from './components/send_history'

export default {
  
  name: 'App',

  components: {
    banner,
    navbar,
    about,
    about_map,
    footer_form,
    slide_carousel,
    contact_form,
    send_history
  },

  data(){
    return {
      show_contact_form: false,
      hidden_main_page: false,
      show_send_history: false, 
      navbar_control: []
    }
  },
  methods: {

    navbar_item_click: function($event){

      this.navbar_control = $event
      var item = this.navbar_control.indexOf(true)

      if(item == 0){
        this.hidden_main_page = false
        this.show_contact_form = false
        this.send_history = false
      }

      if(item == 1){

        this.hidden_main_page = false
        this.show_contact_form = false
      }

      if(item == 2){
        this.hidden_main_page = true
        this.show_contact_form = true
        this.show_send_history = false
      }

      console.log(item)
    },

    swith_to_contact: function(){
      this.show_contact_form = true
    },

    open_send_history: function(){
      this.hidden_main_page = true
      this.show_send_history = true
      this.show_contact_form = false
    }

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





