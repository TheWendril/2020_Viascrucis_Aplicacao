<template>

        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow fixed-top position-fixed">
            <div class="container">
            
            <a class="navbar-brand" href="index.html">
                <img src="../assets/logo-vc.png" width="134">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a :class="{'nav-link': nav_link, 'active': active_items[0] }" @click="go_to_main_page">Início</a>
                </li>
                <li class="nav-item ">
                    <a :class="{'nav-link': nav_link, 'active': active_items[1]}" @click="go_to_gallery" >Galeria</a>
                </li>
                <li class="nav-item ">
                    <a :class="{'nav-link': nav_link, 'active': active_items[2]}" @click="go_to_stories" >Histórias</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{'nav-link': nav_link, 'active': active_items[3]}" @click="go_to_contact"> Contato </a>
                </li>      
                </ul>
            </div>
            </div>
        </nav>


</template>

<script>

import { mapState } from 'vuex'

export default {
    
    name: 'navbar',

    data(){
       return{
           active_element: [true, false, false],
           nav_link : true,
       }
    },

    methods: {

        go_to_contact: function(){
            this.$router.push('/contato')
        },

        go_to_main_page: function(){
            this.$router.push('/')
        },

        go_to_gallery: function(){
            
            this.$router.push('/galeria')
        },
        go_to_stories: function(){
            this.$router.push('/historias')
        },
        
    },

    computed: {
        ...mapState({
            active_items: state => state.active_items
        })
    }
}

</script>

<style scoped>

a:hover{
    cursor: pointer;
}

</style>