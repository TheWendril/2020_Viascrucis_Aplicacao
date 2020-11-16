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
                <li class="nav-item">
                    <a :class="{'nav-link': nav_link, 'active': active_element[0]}" @click="active_switch(0)" href="index.html">Início</a>
                </li>
                <li class="nav-item">
                    <a :class="{'nav-link': nav_link, 'active': active_element[1]}" @click="active_switch(1)">Projeto</a>
                </li>
                <li class="nav-item" @click="contact_click">
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
       contact_click: function(){
           console.log('EVENTO EMITIDO')
           this.$emit('contact_click_event')
       },

       active_switch: function(index){
            
            for(var i = 0; i < 3; i++)
                this.active_element[i] = false
                
            console.log(index)
            this.active_element[index] = true

       }
   }
}

</script>

<style scoped>


</style>