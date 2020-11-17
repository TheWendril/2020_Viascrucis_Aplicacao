<template>

        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top position-fixed">
            <div class="container">
            
            <a class="navbar-brand" href="index.html">
                <img src="../assets/logo-vc.png" width="134">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item" @click="navbar_item_click($event)">
                    <a :class="{'nav-link': nav_link, 'active': active_element[0]}" @click="active_switch(0)">Início</a>
                </li>
                <li class="nav-item " @click="navbar_item_click($event)">
                    <a :class="{'nav-link': nav_link, 'active': active_element[1]}" @click="active_switch(1)">Projeto</a>
                </li>
                <li class="nav-item" @click="navbar_item_click($event)">
                    <a class="nav-link" :class="{'nav-link': nav_link, 'active': active_element[2]}" @click="active_switch(2)"> Contato </a>
                </li>            
                </ul>
            </div>
            </div>
        </nav>


</template>

<script>

export default {
   
   data(){
       return{
           active_element: [true, false, false],
           nav_link : true
       }
   },

   methods: {

        navbar_item_click: function($event){
            console.log($event)
            this.$emit('navbar_click', this.active_element)
        },


        active_switch: function(index){

                var list = []
                for(var i = 0; i < 3; i++)
                    list.push(false)
                    
                this.active_element = list
                this.active_element[index] = true

        }
    }
}

</script>

<style scoped>


</style>