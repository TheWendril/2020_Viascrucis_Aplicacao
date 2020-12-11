<template>
    
    <div class="container-fluid banner position-relative overflow-hidden p-3 md-5 shadow text-center">
        <div class="row h-100">
            <div class="col-md-5 p-lg-5 mx-auto my-auto content-banner">    
                <img src="../assets/vc-banner.png" class="fixed img mb-3" width="300px"/>
                <p class="lead font-weight-normal text-light">Não são só cruzes. São biografias, histórias e saudades</p>
                <a class="btn btn-outline-light shadow" @click="open_send_history">Enviar história</a>
            </div>
        </div>
    </div>

</template>

<script>

import { mapActions } from 'vuex'

export default {

    methods:{
        
        open_send_history: function(){
            this.disable_all()
            this.$router.push('/enviar-historia')
        },

        ...mapActions([
            'disable_all'
        ])
    },



}
</script>

<style scoped>

.banner{
    
     background-image: url('https://viascrucis.s3.amazonaws.com/bg-masthead.jpg');
     background-position: center;
     background-repeat: no-repeat;
     height: 650px;

}

.content-banner{
    margin-top: auto;
    margin-bottom: auto;
}

</style>