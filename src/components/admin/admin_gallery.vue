<template>
<div>

    <div class="container text-left">
    
        <h3>Cadastrar Imagens</h3>
        <hr/>
        <h3>Exibir Imagens Cadastradas</h3>
        <h5 class="text-black-50">Sem imagens cadastradas</h5>
    </div>

</div>
</template>


<script>

import { mapMutations } from 'vuex'

export default {
    created(){
        this.enable_admin(1)
        this.hidden_d_Navbar()
    },
    methods: {
        ...mapMutations([
            'enable_admin',
            'hidden_d_Navbar'
        ])
    } 
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

</style>