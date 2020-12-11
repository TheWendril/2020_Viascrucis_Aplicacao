<template>

<div> 

    <div class="container text-left" v-if="admin_access">
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
                        <b>Ano de falecimento:</b> {{story.anoFalecimento}}
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

        <h3 class="mt-5">Solicitações de Histórias</h3>
        <hr/>
        <h5 class="text-black-50"> {{all_stories.length}} história(s) cadastradas...</h5>

        <div class="row shadow p-5 rounded-lg border mt-5 list-group" v-for="story in all_stories" :key="story._id">
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
                        <b>Ano de Falecimento:</b> {{story.anoFalecimento}}
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
                    <button class="btn btn-outline-danger ml-2" @click="reprove_assert_story(story)">Deletar</button>
                </div>
            </div>
        </div>


    </div>
    <div v-else>
        <h1><b>Acesso Negado</b></h1>
    </div>
</div>

</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Axios from 'axios'
import api_url from '../../../APIPath'

export default {

    data(){
        return {
            stories: [],
            all_stories: [],
            list: [{id: 1}, {id: 2}, {id: 3}]
        }
    },

    created(){

        this.enable_admin(0)
        

        var valid = localStorage.token
        if(valid != undefined && valid != null && valid != '')
            this.admin_ON(valid)
        

        Axios.get(api_url + '/stories/await', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}).then(res => {
            this.stories = res.data
        })
        .catch(err => console.log(err))
        

        Axios.get(api_url + '/stories', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}}).then(res => {
            this.all_stories = res.data
        })
        .catch(err => console.log(err))
        

        this.hidden_d_Navbar()
        
    },

    methods: {
        ...mapMutations([
            'enable_admin', 'hidden_d_Navbar', 'admin_ON'
        ]),

        aprove_story: function(story){
            
            Axios.put(api_url + '/stories', {_id: story._id}, {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}})
                .then(res => {
                    console.log(res)
                    alert('Historia Aprovada com Sucesso')})
                .catch(err => {
                    console.log(err)
                    alert('Falha ao Aprovar história')
                })
            
            var index = this.stories.indexOf(story)
            this.stories.splice(index, index + 1)
            
        },

        reprove_story: function(story){
        
            Axios.delete(api_url + '/stories', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}, data: {_id: String(story._id)}})
                .then(res => {
                    console.log(res)
                    alert('Historia Reprovada com Sucesso')})
                .catch(err => {
                    console.log(err)
                    alert('Falha ao Reprovar história')
                })

            this.stories.splice(this.stories.indexOf(story), this.stories.indexOf(story) + 1)
        
        },
        reprove_assert_story: function(story){
        
            Axios.delete(api_url + '/stories', {headers: {authorization: 'Bearer ' + localStorage.getItem('token')}, data: {_id: String(story._id)}})
                .then(res => {
                    console.log(res)
                    alert('Historia Reprovada com Sucesso')})
                .catch(err => {
                    console.log(err)
                    alert('Falha ao Reprovar história')
                })

            this.all_stories.splice(this.all_stories.indexOf(story), this.all_stories.indexOf(story) + 1)
        
        },

        deleta: function(i){
            this.list.splice(this.list.indexOf(i), this.list.indexOf(i) + 1)
        }
    },

    computed: {
    
        stories_number: () => this.stories.length,

        ...mapState({
            admin_access: state => state.admin_access,
            token: state => state.token
        })
    
    }
}

</script>

<style scoped>

.container{
    margin-top: 110px
}

</style>