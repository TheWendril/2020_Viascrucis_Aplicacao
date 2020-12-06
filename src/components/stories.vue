<template>
<div class="container text-left">
    <h3>Histórias</h3>
    <h5 class="text-black-50">Temos {{stories.length}} histórias</h5>
   <div class="row shadow p-5 rounded-lg border mt-5" v-for="story in stories" :key="story._id">
        
        <div class="col">
            
            <div class="row">

                <div class="col-md-8 col-sm-12 mb-3">
                    <b class="h4">{{story.firstName + ' ' +story.lastName}}</b> homenageou <b class="h4">{{story.firstNameHonor + ' ' +story.lastNameHonor}}</b> 
                    ({{story.anoNascimento}}  - {{story.anoNascimento + story.idade}})
                </div>
                <div class="col-md-4 text-right">
                    <img src="https://img.icons8.com/ios/50/000000/clock--v1.png" height="20px" /><b class="ml-2">20/04/2003</b> 
                </div>

            </div>

        <hr>    

            <div class="row mt-2">
                <div class="col-md-12">
                    <b>Homenagem:</b> {{story.textTribute}}
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <b>Epitáfio:</b> {{story.epitafio}}
                </div>
            </div>
            

            <p class="h4 mt-5"><img src="https://img.icons8.com/ios/50/000000/place-marker--v2.png" class="mr-2" height="30px"/>Locais:</p>
            <hr>

            <div class="row mt-2">
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
</template>

<script>

import {mapMutations} from 'vuex'
import Axios from 'axios'

export default {

    data(){
        return{
            stories: []
        }
    },

    created(){
        this.enable(2)
        Axios.get('http://localhost:3000/stories').then(res => {this.stories = res.data})
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

</style>