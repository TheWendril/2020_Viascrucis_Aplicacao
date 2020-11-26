<template>

<div class="container text-left"> 

<h3>Cadastrar Historia</h3>
<hr/>
    <div class="row">
        <div class="col">

            um porrada de formulario aqui dnv 

        </div>
    </div>



<h3 class="mt-5">Solicitações de Histórias</h3>
<hr/>
<h5 class="text-black-50"> {{stories.length}} história(s) em espera...</h5>
    <div class="row shadow p-5 rounded-lg border mt-5 list-group" v-for="story in stories" :key="story._id">
        <div class="col ">
            <div class="row">
                <div class="col">
                    <h5>Informações do remetente: </h5>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <b>Nome:</b> {{story.firstName}}
                </div>
                <div class="col-md-4">
                    <b>Sobrenome:</b> {{story.lastName}}
                </div>
                <div class="col">
                    <b>Telefone:</b> {{story.telefone}}
                </div>

            </div>
            <div class="row mt-2">
                <div class="col-md-4">
                    <b>Email:</b> {{story.email}}
                </div>
                <div class="col-md-4">
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
                <div class="col">
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
            <div class="row d-flex flex-row-reverse mt-5">
                <button class="btn btn-outline-danger ml-2" @click="reprove_story(story)">Reprovar</button>
                <button class="btn btn-outline-success" @click="aprove_story(story)">Aprovar</button>
            </div>
        </div>
    </div>

    <div v-if="stories.length == 0">
        <h5 class="text-black-50">Não há histórias para análise</h5 >
    </div>

</div>

</template>

<script>
import { mapMutations } from 'vuex'
import Axios from 'axios'

export default {

    data(){
        return {
            stories: [],
            list: [{id: 1}, {id: 2}, {id: 3}]
        }
    },

    created(){
        this.enable_admin(0)

        Axios.get('http://localhost:3000/adminStories').then(res => {
            this.stories = res.data
        })
        .catch(err => console.log(err))
        this.hidden_d_Navbar()
        
    },

    methods: {
        ...mapMutations([
            'enable_admin', 'hidden_d_Navbar'
        ]),

        aprove_story: function(story){
            
            Axios.put('http://localhost:3000/adminStories', {_id: story._id}).then(console.log('História Aprovada com Sucesso'))
            var index = this.stories.indexOf(story)
            this.stories.splice(index, index + 1)
            
        },

        reprove_story: function(story){
        
            Axios.delete('http://localhost:3000/adminStories', {data: {_id: String(story._id)}}).then(console.log('História Reprovada com Sucesso'))
            this.stories.splice(this.stories.indexOf(story), this.stories.indexOf(story) + 1)
        },
        deleta: function(i){
            console.log(this.list.indexOf(i))
            this.list.splice(this.list.indexOf(i), this.list.indexOf(i) + 1)
        }
    },

    computed: {
        stories_number: () => this.stories.length
    }
}

</script>

<style scoped>

.container{
    margin-top: 110px
}

</style>