<template>

<div class="container" v-if="admin_access">
    
    <h1>Construir aqui</h1>    
</div>    

</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            admin_access: state => state.admin_access
        })
    }    
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

</style>
