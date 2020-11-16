<template>

  <div id="app" class="bg-light">  
    <navbar @contact_click_event="contact_click" />

    <div class="content" v-if="!show_contact_form">
      <banner/>
      <about/>
      <about_map/>
      <slide_carousel/>
      <footer_form/>
    </div>
    
    <div class="contact_page bg-white" v-if="show_contact_form">

      <contact_form class="contact-form"/>

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

export default {
  
  name: 'App',

  components: {
    banner,
    navbar,
    about,
    about_map,
    footer_form,
    slide_carousel,
    contact_form
  },

  data(){
    return {
      show_contact_form: false
    }
  },
  methods: {

    contact_click: function(){
      console.log('EVENTO RECEBIDO')
      this.show_contact_form = true
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


.footer-contact {
   position:fixed;
   left:0px;
   bottom:0px;
   width:100%;
}

.contact-form{
  margin-top: 13%;
}


</style>





