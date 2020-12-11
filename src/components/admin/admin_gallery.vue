<template>
<div>

    <amplied_image :font='img_font' @hiddenEvent="hidden_amplied_image" v-if="amplied"/>

    <div class="container text-left" v-if="admin_access">
        
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
        <h5 class="text-black-50">{{imgs.length}} imagens</h5>
        <hr/>
        <h5 class="text-black-50" v-if="imgs.length == 0">Sem imagens cadastradas</h5>
        <div class="row mt-5 text-center">

            <div class="col-md-6 col-sm-12 mt-5" v-for="img in imgs" :key="img._id">
                <img :src="img.url" class="g-img" @click="show_amplied_image(img)"/>
                <div class="row mt-1">

                    <div class="col-3 text-right">
                        <img src="https://img.icons8.com/ios/64/000000/info--v4.png" height="20px"/>
                    </div>
                
                    <div class="col text-left">
                       {{img.description}}
                    </div>
                
                </div>
                <div class="row">
                    <div class="col-3 text-right">
                        <img src="https://img.icons8.com/wired/64/000000/copyright.png" height="20px"/>
                    </div>
                   <div class="col text-left">
                       {{img.credits}}
                    </div> 
                </div>
                <div class="row">
                    <div class="col-3 text-right">
                        <img src="https://img.icons8.com/fluent-systems-regular/24/000000/visible.png" height="20px"/>
                    </div>
                   <div class="col text-left">
                       {{img.views}}
                    </div> 
                </div>
                <div class="row">
                    <div class="col-3 text-right">
                        <img src="https://img.icons8.com/metro/26/000000/calendar.png" height="20px"/>
                    </div>
                   <div class="col text-left">
                       {{img.createdAt}}
                    </div> 
                </div>
                
                <p> <button class="btn btn-outline-danger mt-4" @click="delete_img(img)">Deletar</button> </p>
            </div>

        </div>
        
    </div>
    <div v-else>
        <h1><b>Acesso Negado</b></h1>
    </div>

</div>
</template>


<script>

import { mapMutations, mapState } from 'vuex'
import Axios from 'axios'
import api_url from '../../../APIPath'
import amplied_image from '@/components/amplied_image.vue'

export default {

    components:{
        amplied_image
    },

    data(){
        return {
            imgs: [],
            new_img: null,
            check: false,
            img_font: '',
            amplied: false
        }
    },

    created(){

        this.enable_admin(1)
        this.hidden_d_Navbar()
        
        var valid = localStorage.token
        if(valid != undefined && valid != null && valid != '')
            this.admin_ON(valid)
        
        this.new_img = {
            file: null,
            credits: null,
            description: null
        }

        Axios.get(api_url + '/gallery', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}).then(res => {
            this.imgs = res.data
        })
    },
    methods: {
        ...mapMutations([
            'enable_admin',
            'hidden_d_Navbar',
            'admin_ON'
        ]),
        
        changeFile: function(event){
            this.new_img.file = event.target.files[0]
        },
        
        send_data: function(){

            this.check = true

            if(this.verify_data()){

                const multipart = new FormData()
                multipart.append('file', this.new_img.file)
                multipart.append('credits', this.new_img.credits)
                multipart.append('description', this.new_img.description)
                multipart.append('views', 0)
                
                Axios.post(api_url + '/gallery', multipart, {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}).then(res => {
                    
                    console.log(res)
                    alert('Imagem enviada')
                    this.$router.go()

                }).catch(err => {
                    console.log(err)
                    alert('Erro ao enviar imagem')
                })
            }
        
        },

        verify_data: function(){
            
            for(var key in this.new_img)
                if(key == null)
                    return false
           
            return true
        },

        show_amplied_image: function(img){
            this.img_font = img.url
            this.amplied = true
        },

        hidden_amplied_image: function(){
            this.amplied = false
        },

        delete_img: function(img){

            Axios.delete(api_url + '/gallery', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}, data: {_id: img._id}})
            .then(res => {
            
                console.log(res)
                alert('Imagem deletada')
                this.imgs.splice(this.imgs.indexOf(img), this.imgs.indexOf(img) + 1)
            
            }).catch(err => {console.log(err)})
            
        }
    },
    computed: {
        ...mapState({
            admin_access: state => state.admin_access
        })
    } 
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

.g-img{
  object-fit: cover;
  object-position: center;
  height: 50%;
  width: 75%;
  overflow: hidden;
  size: cover;
}

</style>
