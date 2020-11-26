<template>
<div>

    <h1>teste</h1>

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

</style>