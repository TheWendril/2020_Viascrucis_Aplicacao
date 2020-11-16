<template>
<div class="mb-5 container-fluid border-bottom">
    <div class="container carousel mt-5 mb-5 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner shadow">
                    <div class="carousel-item active">
                    <img class="d-block w-100" src="../assets/slide-1.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/slide-2.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/slide-3.png" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src="../assets/slide-4.png" alt="Third slide">
                    </div>
                </div>
                
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Anterior</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Próximo</span>
                </a>
        </div>
        <p class="mt-5">Acesse nossa <a href="#">galeria</a> e veja as melhores fotos de sla oq</p>
        
    </div>
    
</div>
</template>

<script>
export default {
    
    data(){
        return{
            showGallery: false
        }
    },

    methods : {
        
    }
}
</script>

<style scoped>
.carousel{
    padding-left:5%;
    padding-right:5%;
}
</style>