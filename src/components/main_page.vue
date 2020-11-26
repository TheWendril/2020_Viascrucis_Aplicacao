<template>
    
    <div>

        <banner ></banner>
        <about></about>
        <about_map></about_map>
        <Slide_carousel/>
        <footer_form></footer_form>
    </div>

</template>

<script>

import banner from './banner.vue'
import about from './about.vue'
import about_map from './about_map.vue'
import footer_form from './footer_form'
import Banner from './banner.vue'
import Slide_carousel from './slide_carousel.vue'

import { mapMutations } from 'vuex'

export default {

    components:{
        banner,
        about,
        about_map,
        footer_form,
        Banner,
        Slide_carousel
    },
    methods: {
        ...mapMutations([
            'enable',
            'show_d_Navbar'
        ])
    },
    created(){
        this.show_d_Navbar()
        this.enable(0)
    }

}
</script>

<style scoped>

</style>