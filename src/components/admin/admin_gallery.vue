<template>
<div>

    <div class="container text-left">
    
        <h3>Cadastrar Imagens</h3>
        <hr/>
        
        <div class="form-group">
            <div class="row mt-5">
                
                <div class="col-md-4 col-sm-12 mt-3">
                    <input id="imageInput" @change="changeFile($event)" type="file" :class="{'is-invalid': (new_img.file == null && new_img.file == '') && check}" >
                </div>

                <div class="col-md-4 col-sm-12 mt-3">
                    <input type="text" :class="{'form-control': true, 'is-invalid': (new_img.description == null || new_img.description == '') && check}" v-model="new_img.description" placeholder="Descrição">
                </div>

                <div class="col-md-4 col-sm-12 mt-3">
                    <input type="text" :class="{'form-control': true, 'is-invalid': (new_img.credits == null || new_img.credits == '') && check}" v-model="new_img.credits" placeholder="Créditos">
                </div>

            </div>
            
            <div class="row text-center mt-4">

                <div class="col">

                    <button class="btn btn-outline-success" @click="send_data">Enviar</button>

                </div>

            </div>

        </div>

        <h3 class="mt-5">Exibir Imagens Cadastradas</h3>
        <h5 class="text-black-50" v-if="imgs.length == 0">Sem imagens cadastradas</h5>
        <hr/>
        <div class="row mt-5 text-center">

            <div class="col-md-6 col-sm-12 mt-5" v-for="img in imgs" :key="img._id">
                <img :src="img.url" height="150px"/>
                <p> {{img}} </p>
            </div>

        </div>
        
    </div>

</div>
</template>


<script>

import { mapMutations } from 'vuex'
import Axios from 'axios'

export default {

    data(){
        return {
            imgs: [],
            new_img: null,
            check: false
        }
    },

    created(){
        this.enable_admin(1)
        this.hidden_d_Navbar()

        this.new_img = {
            file: null,
            credits: null,
            description: null
        }

        Axios.get('http://localhost:3000/gallery').then(res => {
            this.imgs = res.data
        })
    },
    methods: {
        ...mapMutations([
            'enable_admin',
            'hidden_d_Navbar'
        ]),
        
        changeFile: function(event){
            this.new_img.file = event.target.files[0]
        },
        
        send_data: function(){

            this.check = true

            if(this.verify_data()){
                const multipart = new FormData()
                console.log(this.new_img.file)
                multipart.append('file', this.new_img.file)
                multipart.append('credits', this.new_img.credits)
                multipart.append('description', this.new_img.description)
                multipart.append('views', 0)
                
                Axios.post('http://localhost:3000/gallery', multipart).then(res => {
                    
                    console.log(res)
                    setTimeout(() => {
                        this.$router.go()
                    }, 600)

                }).catch(err => {
                    console.log(err)
                })
            }
        
        },

        verify_data: function(){
            
            for(var key in this.new_img)
                if(key == null)
                    return false
           
            return true
        }
    } 
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

</style>
