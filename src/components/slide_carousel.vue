<template>
<div class="mb-5 mt-5 pt-4 container-fluid">
    <div class="container carousel mt-5 mb-5 ">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner shadow ">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://viascrucis.s3.amazonaws.com/slide-1.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://viascrucis.s3.amazonaws.com/slide-2.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://viascrucis.s3.amazonaws.com/slide-3.png" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://viascrucis.s3.amazonaws.com/slide-4.png" alt="Third slide">
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
        <p class="mt-5">Acesse nossa <a class="link"  @click="go_to_gallery"> galeria </a> e veja todos os nossos registros!</p>
        
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

        go_to_gallery: function(){
            this.$router.push('/galeria')
        },

    }
}
</script>

<style scoped>
.carousel{
    padding-left:5%;
    padding-right:5%;
}

.link{
    color: rgb(53, 165, 240);
}


a:hover{
    cursor: pointer;
}

</style>
