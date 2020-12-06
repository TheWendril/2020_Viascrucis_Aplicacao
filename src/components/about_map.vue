<template>

    <div class="container mt-5 border-bottom">

        <div class="row">

            <div class="col-sm-7 text-center mb-5">

                <img class="my-auto map-image shadow p-2" src="../assets/map.png"/>

            </div>

            <div class="col-sm-5 text-center my-auto map-text-info">

                <p class="text-justify">Estamos utilizando as coordenadas geográficas para obtermos a posição exata do memorial na beira da estrada. Com isso, não só registramos, mas conduzimos você ao local onde se encontrada edificado o memorial, promovendo interação e uma experiência única de visitação. (Em breve)</p>
                <button class="btn btn-outline-primary shadow mb-4">Ver Mapas</button>

            </div>

        </div>

    </div>    

</template>

<script>
export default {
    
}
</script>

<style scoped>

.container{
    padding-top: 15px;
}

.map-image{
    width: 100%;
}

.map-text-info{
    padding-left: 50px;
    padding-right: 50px;
}

</style>