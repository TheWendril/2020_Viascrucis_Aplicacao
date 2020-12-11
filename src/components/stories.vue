<template>
<div>

    <div class="container text-left">
    <div class="row mb-5">
        <div class="col-3 col-sm-2 col-md-2 col-lg-1 text-center">
            <img class="mt-1 img" src="https://i.ibb.co/Gdmq5yy/stories-icon.png" height="65px"/>
        </div>
        <div class="col-sm-8 col-7 ml-1 text-left mt-1">
            <div class="row">        
                <h3>Histórias</h3>
            </div>
            <div class="row">
                <h6 class="text-black-50">Nesta seção você encontrará homenagens de pessoas aos entes queridos.</h6>
            </div>
        </div>
    </div>


    <div class="row shadow p-5 rounded-lg border mb-5" v-for="story in stories" :key="story._id">
    
            <div class="col">
                
                <div class="row">

                    <div class="col-md-8 col-sm-12 mb-3">
                        <b class="h4">{{story.firstName + ' ' +story.lastName}}</b> homenageou <b class="h4">{{story.firstNameHonor + ' ' +story.lastNameHonor}}</b> 
                        ({{story.anoNascimento}}  - {{story.anoFalecimento}})
                    </div>
                    <div class="col-md-4 text-right">
                        <img src="https://i.ibb.co/yYGXzmp/relogio.png" height="20px" /><b class="ml-2 text-black-50">{{story.createdAt}}</b> 
                        
                    </div>

                </div>

            <hr>    

                <div class="row mt-2">
                    <div class="col-md-12 mt-2">
                        <img src="https://i.ibb.co/zrBYFfj/aspas.png" class="mr-1 mb-2" height="18px"/> {{story.textTribute}}
                    </div>
                </div>
                <div class="row mt-4">
                    <div v-if="story.epitafio != ''" class="col">
                        <b>Epitáfio:</b> {{story.epitafio}}
                    </div>
                </div>
                

                <p class="h4 mt-5"><img src="https://i.ibb.co/qYPRFZz/location.png" class="mr-2 mb-2" height="30px"/>Locais:</p>
                <hr>

                <div class="row mt-1">
                    <div class="col-md-3 col-sm-12">
                        <b>Nascimento:</b> {{story.bornCity + '/' + story.bornState}}
                    </div>
                    <div class="col-md-4 col-sm-12">
                        <b>Falecimento:</b> {{story.deadCity + '/' + story.deadState}}
                    </div>
                </div>
            </div>
        </div>

        <div v-if="stories.length == 0">
            <h5 class="text-black-50">Não há histórias cadastradas</h5 >
        </div>
    </div>
</div>
</template>

<script>

import {mapMutations} from 'vuex'
import Axios from 'axios'
import api_url from '../../APIPath'

export default {

    data(){
        return{
            stories: []
        }
    },

    created(){
        this.enable(2)
        Axios.get(api_url + '/stories').then(res => {this.stories = res.data})
    },

    methods: {
        ...mapMutations(['enable'])
     }
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

hr{
    background-color: rgb(85, 221, 255);    
}

.banner{
 
  background: rgb(0,73,88);
background: linear-gradient(86deg, rgba(0,73,88,1) 0%, rgba(14,173,189,1) 46%, rgba(21,205,214,1) 79%); 
height: 280px;
}


</style>