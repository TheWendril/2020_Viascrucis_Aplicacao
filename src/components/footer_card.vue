<template>

    <div class="border-bottom border-primary card shadow">
        
        <div class="row text-center">
            <div class="col bg-light">
                <img :src="src_img"/>
            </div>
        </div>
        
        <div class="row text-center">
            <div class="col bg-light">
                <p>{{title}}</p>
            </div>
        </div>
        
        <div class="row text-center">
            <div class="col bg-light">
                <p>{{content}}</p>
            </div>
        </div>
    
    </div>

</template>

<script>

export default{

    props: {
        title: String,
        src_img: String,
        content: String
    }
}

</script>

<style scoped>

.card{
    
}



</style>