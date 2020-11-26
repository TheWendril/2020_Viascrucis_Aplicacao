<template>
<div class="container text-left">
    <h3>Historias</h3>
   <div class="row shadow p-5 rounded-lg border mt-5" v-for="story in stories" :key="story._id">
        <div class="col ">
            <div class="row">
                <div class="col">
                    <h5>Informações do remetente: </h5>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <b>Nome:</b> {{story.firstName}}
                </div>
                <div class="col">
                    <b>Sobrenome:</b> {{story.lastName}}
                </div>
                <div class="col">
                    <b>Telefone:</b> {{story.telefone}}
                </div>

            </div>
            <div class="row mt-2">
                <div class="col">
                    <b>Email:</b> {{story.email}}
                </div>
                <div class="col">
                    <b>Grau de Parentesco:</b> {{story.degreeOfKinship}}
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <h5>Informações da pessoa querida: </h5>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <b>Nome:</b> {{story.firstNameHonor}}
                </div>
                <div class="col">
                    <b>Sobrenome:</b> {{story.lastNameHonor}}
                </div>
                <div class="col">
                    <b>Idade:</b> {{story.idade}}
                </div>
                <div class="col">
                    <b>Ano de nascimento:</b> {{story.anoNascimento}}
                </div>
            </div>
            <div class="row mt-2">
                <div class="col-md-12">
                    <b>Homenagem:</b> {{story.textTribute}}
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <b>Epitáfio:</b> {{story.epitafio}}
                </div>
            </div>
            <div class="row mt-2">
                <div class="col">
                    <b>Cidade de Nascimento:</b> {{story.bornCity}}
                </div>
                <div class="col">
                    <b>Estado de Nascimento:</b> {{story.bornState}}
                </div>
                <div class="col">
                    <b>Cidade de Falecimento:</b> {{story.deadCity}}
                </div>
                <div class="col">
                    <b>Estado de Falecimento:</b> {{story.deadState}}
                </div>
            </div>
        </div>
    </div>

    <div v-if="stories.length == 0">
        <h5 class="text-black-50">Não há histórias cadastradas</h5 >
    </div>
</div>
</template>

<script>

import {mapMutations} from 'vuex'
import Axios from 'axios'

export default {

    data(){
        return{
            stories: []
        }
    },

    created(){
        this.enable(2)
        Axios.get('http://localhost:3000/stories').then(res => {this.stories = res.data})
    },

    methods: {
        ...mapMutations(['enable'])
     }
}
</script>

<style scoped>

.container{
    margin-top: 110px;
}

</style>