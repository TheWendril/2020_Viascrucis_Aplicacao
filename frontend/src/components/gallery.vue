<template>
<div>
  <amplied_image @hiddenEvent="hidden_amplied_image" :font="atual_link_amplied" v-if="amplied"/>
  <div :class="{'container': true, 'hasblur': amplied}">

    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Galeria</h1>

    <hr class="mt-2 mb-5">

    <div class="row text-center text-lg-left">

      <div class="col-lg-3 col-md-4 col-6" v-for="img in imgs" :key="img.position" >
        
        <a @click.once="increment_upvote(img)"> 
          <img src="../assets/up-arrow.png" class="mb-1" width="17px" height="20px" >
          {{img.upvotes}} Up Votes  
        </a>

        <a href="#" class="d-block mb-4 h-100" >
          <img class="img-fluid img-thumbnail" :src="img.link" @click="show_amplied_image(img.link)">
        </a>

      </div>
    </div>

  </div>    
  
</div>
</template>

<script>

import { mapMutations } from 'vuex'
import Axios from 'axios'
import amplied_image from './amplied_image.vue'

export default {

  components:{
    amplied_image
  },

  data(){
    return{

      amplied: false,
      atual_link_amplied: '',
      imgs: []
    }
  },

  methods: {
    ...mapMutations(['enable']),
    
    increment_upvote: function(img){
      
      console.log(img)
      
      var put_request = {
        position: img.position
      }

      Axios.put('http://localhost:3000/gallery', {put_request})
      img.upvotes += 1
    },

    hidden_amplied_image: function(){
      this.amplied = false
    },

    show_amplied_image: function(link){

      console.log('evento ocorrendo')
      this.atual_link_amplied = link
      this.amplied = true
    }

  },
  created(){
    Axios.get('http://localhost:3000/gallery').then(res => {
      
      res.forEach(element => {
        this.imgs.push(element)
      });
    
    })
    
    this.enable(1)
  
  },
  
  computed : {

  }


}
</script>

<style scoped>

.hasblur{
  filter: blur(4px);
}

.container{
    margin-top: 110px;
}

a:hover{
  cursor: pointer;
}

</style>