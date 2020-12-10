<template>
    
    <div class="container marketing mt-5 mb-5 border-bottom">
        <div class="row text-center mb-5">
            <div class="col-lg-4 rounded">
                <img class="rounded-circle mb-2 info-card" src="../assets/vias.png" >
                <h3 class="mt-2 text-dark">Vias</h3>
                <p> Somos pesquisadores que preservamos as memórias das pessoas que tiveram sua trajetória interrompida na estrada da vida. 	
                    A ideia é utilizar esse espaço para registrar a caminhada do nosso ente querido, preservando e mantendo suas histórias e biografia.</p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4 rounded">
                <img class="rounded-circle mb-2 info-card" src="../assets/relatos.png" >
                <h3 class="mt-2 text-dark">Relatos</h3>
                <p>Os relatos dão conta das memorias colhidas com os moradores das residências próximas as rodovias, aos quais se disponibilizaram a narrar os acontecimentos que antecederam as construções dos memoriais estradeiros. Além disso, essas narrativas dos Chicos (as) e Franciscos (as) anunciam os perigos envoltos nas curvas das rodovias.</p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4 rounded">
                <img class="rounded-circle mb-2 info-card" src="../assets/book.png">
                <h3 class="mt-2 text-dark">Nosso Livro</h3>
                <p>Nesse e-book gratuito, você vai encontrar uma excelente seleção de imagens e textos sobre as cruzes na beira da estrada . Você vai nos acompanhar na estrada, encontrando e conhecendo os variados tipos de memoriais que homenageiam os estradeiros falecidos.</p>
                <p><a class="btn btn-primary" @click="new_book_click" href="https://drive.google.com/file/d/1OIJSfl8-rAYZgWHe2atD7o5477PCBGLo/view?usp=sharing" target="_blank" role="button">Ler livro&raquo;</a></p>
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div>

</template>

<script>

import Axios from 'axios'
import api_url from '../../APIPath'

export default {

    methods: {
        new_book_click: function(){
            Axios.put(api_url + '/book', {_id: "5fd189a48e38f233d9147330"}).then(res => {
                console.log('Novo Click Registrado ', res)
            }
            ).catch(err => {
                console.log(err)
            })
        }
    }
    
}
</script>

<style scoped>

.container{
    padding-left:5%;
    padding-right:5%;
}

.info-card{
    width: 105px;
    height: 105px;
    border: solid 1px rgb(54, 195, 225);
}

.col-lg-4{
    padding:20px;
}

</style>