<template>

    <div class="container mt-5 border-bottom pt-5 mb-5 pb-5">

        <div class="row">

            <div class="col-sm-7 text-center mb-5">
                <a href="https://earth.google.com/earth/rpc/cc/drive?state=%7B%22ids%22%3A%5B%221F8zMYn62HEHlAEVQlEzuCN990VbRCW9L%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22105946936912304654613%22%2C%22resourceKeys%22%3A%7B%7D%7D&usp=sharing" target="_blank">
                    <img class="my-auto map-image shadow p-2" src="../assets/map.png"/>
                </a>
            </div>

            <div class="col-sm-5 text-center my-auto map-text-info">

                <p class="text-justify">Estamos utilizando as coordenadas geográficas para obtermos a posição exata do memorial na beira da estrada. Com isso, não só registramos, mas conduzimos você ao local onde se encontra edificado o memorial, promovendo interação e uma experiência única de visitação.</p>
                <a href="https://earth.google.com/earth/rpc/cc/drive?state=%7B%22ids%22%3A%5B%221F8zMYn62HEHlAEVQlEzuCN990VbRCW9L%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22105946936912304654613%22%2C%22resourceKeys%22%3A%7B%7D%7D&usp=sharing" target="_blank"> <button class="btn btn-outline-primary shadow mb-4">Ver Mapas</button> </a>

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