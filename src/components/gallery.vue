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
            <option value="Up Votes" selected>Up Votes</option>
            <option value="Data" >Data</option>
          </select>
        </div>
      </div>
    </div>

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
      align_select: 'Data',
      amplied: false,
      atual_link_amplied: '',
      imgs: []
    }
  },

  methods: {
    ...mapMutations(['enable']),
    
    increment_upvote: function(img){
      
      var put_request = {
        position: img.position

      }

      Axios.put('http://localhost:3000/gallery', put_request)
      img.upvotes += 1

    },

    hidden_amplied_image: function(){
      this.amplied = false
    },

    show_amplied_image: function(link){

      this.atual_link_amplied = link
      this.amplied = true
    },

    select_change: function($event){

      console.log($event.target.value)

      if($event.target.value === 'Data'){
        this.align_select = 'Data'
        this.sortData()
      }
      if($event.target.value === 'Up Votes'){
        this.align_select = 'Up Votes'
        this.sortData()
      }
    },
    sortData: function(){

      if(this.align_select == 'Up Votes'){
       
        this.imgs.sort(function(a, b){ return b.upvotes - a.upvotes})

      }else{
        
        this.imgs.sort(function(a, b){return b.position - a.position})
      
      }
    }

  },
  created(){
    Axios.get('http://localhost:3000/gallery').then(res => {
      
      res.data.forEach(element => {
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