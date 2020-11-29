<template>
    <div class="background-blur text-center" @click="hidden_content">
        <div class="row mh-100 h-100 d-flex">
            <div class="col mh-100 h-100 mx-auto d-flex justify-content-center align-items-center">
                <div>
                    <img class="a-img img" :src="font">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        font: String
    },
    methods: {
        hidden_content: function(){
            this.$emit('hiddenEvent')
        }
    }
}
</script>

<style scoped>



.background-blur{
    animation: amplier 500ms;
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgb(0, 0, 0, 0.7);    
    z-index: 333;
    top: 0;

}

.a-img{
    width: 60%;
}

@keyframes amplier {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 100%;
    }
}

</style>