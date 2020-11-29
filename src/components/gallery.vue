<template>
<div>
  <amplied_image @hiddenEvent="hidden_amplied_image" :font="atual_link_amplied" v-if="amplied"/>
  <div :class="{'container': true, 'hasblur': amplied}">

    <div class="row">
      <div class="col-md-10 col-sm-6">
        <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Galeria</h1>
      </div>

      <div class="col-md-2 col-sm-6">
        <div class="form-group mt-3">
        <label for="sort">Ordenar por :</label>
          <select  v-model="align_select" @change="select_change" class="font-weight-light text-center form-control-sm form-control text-lg-right mt-1 mb-0" id="sort">
            <option value="Views" selected>Views</option>
            <option value="Data">Data</option>
          </select>
        </div>
      </div>
    </div>

    <hr class="mt-2 mb-5">

    <div class="row text-center text-lg-left">

         <div class="col-md-6 col-sm-12 mt-5" v-for="img in imgs" :key="img._id">
            <img :src="img.url" class="g-img" @click="show_amplied_image(img)"/>
            <div class="row mt-1">

                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/ios/64/000000/info--v4.png" height="20px"/>
                </div>
            
                <div class="col-8 text-left">
                    {{img.description}}
                </div>
            
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/wired/64/000000/copyright.png" height="20px"/>
                </div>
                <div class="col text-left">
                    {{img.credits}}
                </div> 
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/fluent-systems-regular/24/000000/visible.png" height="20px"/>
                </div>
                <div class="col text-left">
                    {{img.views}}
                </div> 
            </div>
            <div class="row">
                <div class="col-1 text-right">
                    <img src="https://img.icons8.com/metro/26/000000/calendar.png" height="20px"/>
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
      imgs: []
    }
  },

  methods: {
    ...mapMutations(['enable']),
    
    increment_upvote: function(img){
      
      Axios.put('http://localhost:3000/gallery', {_id: img._id}).then(res => {
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

    select_change: function($event){

      console.log($event.target.value)

      if($event.target.value === 'Data'){
        this.align_select = 'Data'
        this.sortData()
      }
      if($event.target.value === 'Views'){
        this.align_select = 'Views'
        this.sortData()
      }
    },
    sortData: function(){

      if(this.align_select == 'Views'){
       
        this.imgs.sort(function(a, b){ return b.views - a.views})

      }else{
        
        this.imgs.sort(function(a, b){return b.createdAt - a.createdAt})
      
      }
    }

  },
  created(){
    Axios.get('http://localhost:3000/gallery').then(res => {
      this.imgs = res.data
      this.sortData()
    })
    
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
  object-fit: none;
  object-position: center;
  height: 50%;
  width: 75%;
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