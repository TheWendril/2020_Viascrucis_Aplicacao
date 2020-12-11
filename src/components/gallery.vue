<template>

<div>
  <amplied_image @hiddenEvent="hidden_amplied_image" :font="atual_link_amplied" v-if="amplied"/>
  <div :class="{'container': true, 'hasblur': amplied}">

    <div class="row mb-5">
        <div class="col-3 col-sm-2 col-md-2 col-lg-1 text-center">
            <img class="mt-1 img" src="https://i.ibb.co/SRrvBVC/gallery-icon.png" height="65px"/>
        </div>
        <div class="col-sm-8 col-7 ml-1 text-left mt-1">
            <div class="row">        
                <h3>Galeria</h3>
            </div>
            <div class="row">
                <h6 class="text-black-50">Nesta seção você encontrará todas os registro da nossa comunidade.</h6>
            </div>
        </div>
    </div>

    <hr class="mt-2 mb-5">

        <div class="text-left" v-if="imgs == 0">
            <h4 class="text-black-50">Sem imagens a mostrar!</h4>
        </div>
    
    <div class="spinner-border text-primary" role="status" v-if="loading">
      <span class="sr-only">Carregando...</span>
    </div>

    <div class="row text-center text-lg-left" v-else>

         <div class="col-md-6 col-sm-12 mt-5" v-for="img in imgs" :key="img._id">
            <img :src="img.url" class="g-img" @click="show_amplied_image(img)"/>
            <div class="row mt-1">

                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/ios/64/000000/info--v4.png" height="18px"/>
                </div>
            
                <div class="col-8 text-left">
                    {{img.description}}
                </div>
            
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/wired/64/000000/copyright.png" height="18px"/>
                </div>
                <div class="col text-left">
                    {{img.credits}}
                </div> 
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/visible.png" height="18px"/>
                </div>
                <div class="col text-left">
                    {{img.views}}
                </div> 
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/metro/26/000000/calendar.png" height="18px"/>
                </div>
                <div class="col text-left">
                    {{img.createdAt}}
                </div> 
            </div>
            
        </div>
    </div>

  </div>    
  
</div>
</template>

<script>

import { mapMutations } from 'vuex'
import Axios from 'axios'
import api_url from '../../APIPath'
import amplied_image from './amplied_image.vue'

export default {

  components:{
    amplied_image
  },

  data(){
    return{
      align_select: 'Data',
      amplied: false,
      atual_link_amplied: '',
      imgs: [],
      loading:   false
    }
  },

  methods: {
    ...mapMutations(['enable']),
    
    increment_upvote: function(img){
      
      Axios.put(api_url + '/gallery', {_id: img._id}).then(res => {
        console.log(res)
        img.views += 1
      })

    },

    hidden_amplied_image: function(){
      this.amplied = false
    },

    show_amplied_image: function(img){

      this.atual_link_amplied = img.url
      this.amplied = true
      this.increment_upvote(img)
    },

  },
  created(){

    this.loading = true

    Axios.get(api_url + '/gallery').then(res => {
      
      this.imgs = res.data
      this.imgs.sort(function(a, b){ return b.views - a.views})

    })

    setInterval(() => {
        this.loading = false
    }, 1100)
    
    this.enable(1)
  
  },
  
  computed : {

  }


}
</script>

<style scoped>

.img-gallery{
  object-fit: none;
  object-position: center;
  display: block;
  position: relative;
  height: 85%;
  width: 100%;
  overflow: hidden;
  size: cover;
}

.g-img{
  object-fit: cover;
  object-position: center;
  height: 65%;
  width: 80%;
  overflow: hidden;
  size: cover;
}

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