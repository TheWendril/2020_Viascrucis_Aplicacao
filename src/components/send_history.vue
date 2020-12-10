<template>


    <div class="container">
    
      <div class="text-center">
        <h2>Passo 1</h2>
        <h4>Nos conte sobre você</h4>
      </div>

    <form @submit.prevent="post_form" class="needs-validation" novalidate>
         
      <div class="row">
         <div class="col-md-6 offset-md-3">
            <hr class="mb-5">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName_person">Primeiro Nome</label>
                      <input type="text" :class="{'form-control': true, 'is-invalid': json_request.firstName == '' && check}" id="firstName_person"  v-model="json_request.firstName" placeholder="" required>
                      <div class="invalid-feedback">
                        Campo obrigatório!
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName_person">Sobrenome</label>
                      <input type="text" :class="{'form-control': true, 'is-invalid': json_request.lastName == '' && check}" id="lastName_person" v-model="json_request.lastName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Campo obrigatório!
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="phone">Telefone (WhatsApp)</label>
                    <div class="input-group ">
                      <input type="text" :class="{'form-control': true, 'is-invalid': json_request.telefone == null && check}" id="phone" v-model="json_request.telefone" placeholder="(99) 9 9999-9999" required>
                      <div class="invalid-feedback" style="width: 100%;">
                        Campo obrigatório!
                      </div>
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" :class="{'form-control': true, 'is-invalid': json_request.email == '' && check}" id="email" v-model="json_request.email" placeholder="usuário@dominio.com" required>
                    <div class="invalid-feedback">
                      Campo obrigatório!
                    </div>
                  </div>

                  <div class="mb-3">
                    <label for="degree_of_kinship">Grau de Parentesco</label>
                    <input type="text" :class="{'form-control': true, 'is-invalid': json_request.degreeOfKinship == '' && check}" id="degree_of_kinship" v-model="json_request.degreeOfKinship" placeholder="Digite seu grau de parentesco com o(a) homenageado(a)" required>
                    <div class="invalid-feedback">
                      Campo obrigatório.
                    </div>
                  </div>
                
              </div>
        </div>


            <div class="text-center">
              <h2>Passo 2</h2>
              <h4>Nos conte sobre a sua pessoa querida</h4>
            </div>

          
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <hr class="mb-5">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">Primeiro Nome</label>
                      <input type="text" :class="{'form-control': true, 'is-invalid': json_request.firstNameHonor == '' && check}" v-model="json_request.firstNameHonor" id="firstName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Campo obrigatório!
                      </div>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Sobrenome</label>
                      <input type="text" :class="{'form-control': true, 'is-invalid': json_request.lastNameHonor == '' && check}" v-model="json_request.lastNameHonor" id="lastName" placeholder="" value="" required>
                      <div class="invalid-feedback">
                        Campo obrigatório!
                      </div>
                    </div>
                  </div>


                  <div class="row">

                      <div class="col-md-6 mb-3">
                      <label for="phone">Ano de nascimento</label>
                      <div class="input-group">
                          <input type="text" :class="{'form-control': true, 'is-invalid': json_request.anoNascimento == null && check}" id="phone" v-model="json_request.anoNascimento" placeholder="Ex: 1993" required>
                          <div class="invalid-feedback" style="width: 100%;">
                              Campo obrigatório!
                          </div>
                      </div>
                      </div>

                      <div class="col-md-6 mb-3">
                      <label for="phone">Ano de falecimento</label>
                      <div class="input-group">
                          <input type="text" :class="{'form-control': true, 'is-invalid': json_request.anoFalecimento == null && check}" id="phone"  v-model="json_request.anoFalecimento" placeholder="Ex: 2005" required>
                          <div class="invalid-feedback" style="width: 100%;">
                            Campo obrigatório!
                          </div>
                      </div>
                      </div>
                  </div>


                  <div class="mb-3">

                    <label for="_homenagem">Homenagem</label>
                    <textarea :class="{'form-control': true, 'is-invalid': json_request.textTribute == '' && check}" rows="4" required id="_homenagem" v-model="json_request.textTribute" placeholder="Digite sua homenagem..."></textarea>
                    <div class="invalid-feedback">
                      Campo obrigatório!
                    </div>

                    <label class="mt-3" for="_homenagem">Epitáfio <div class="text-black-50 d-flex">(Opcional)</div></label>
                    <textarea class="form-control" rows="2" required id="_homenagem" v-model="epitafio" placeholder="Resuma o que a pessoa tinha de mais especial..."></textarea>

                  </div>
                  
                  <div class="row mt-3">
                      <div class="col">
                          <label for="born_city">Estado de Nascimento</label>
                          <select :class="{'form-control': true, 'is-invalid': json_request.bornState == '' && check}" id="born_city" v-model="json_request.bornState" @change="change_born_cities($event)" required>
                          <option v-for="state in states" :value="state.sigla" :key="state.id"> {{state.sigla}} </option>
                          </select>
                      </div>

                      <div class="col">
                          <label for="born_state">Cidade de Nascimento</label>
                          <select :class="{'form-control': true, 'is-invalid': json_request.bornCity == '' && check}" id="born_state" v-model="json_request.bornCity" required >
                            <option v-for="city in born_cities" :value="city.nome" :key="city.id"> {{city.nome}} </option>
                          </select>
                      </div>
                      
                  </div>

                  <div class="row mt-3 mb-5">
                      
                      <div class="col">
                          <label for="dead_city">Estado de falecimento</label>
                          <select :class="{'form-control': true, 'is-invalid': json_request.deadState == '' && check}" id="dead_city" @change="change_death_cities($event)" v-model="json_request.deadState" required>
                            <option v-for="state in states" :value="state.sigla" :key="state.id"> {{state.sigla}} </option>
                          </select>
                      </div>

                      <div class="col">
                          <label for="dead_state">Cidade de falecimento</label>
                          <select :class="{'form-control': true, 'is-invalid': json_request.deadCity == '' && check}" id="dead_state" v-model="json_request.deadCity" required> 
                            <option v-for="city in death_cities" :value="city.nome" :key="city.id"> {{city.nome}} </option>
                          </select>
                      </div>
                      
                  </div>
                  
                  <div class="text-left">
                      <div class="row mt-5">
                          <div class="col">
                            <div class="form-check" >
                                <input :class="{'form-check-input': true, 'is-invalid': !terms[0] && check}"  type="checkbox" v-model="terms[0]" name="examplecheckboxs" id="examplecheckboxs1" value="opcao1" >
                                <label class="form-check-label"  for="examplecheckboxs1">
                                    Autorizo a inserção deste tributo a plataforma ViasCrucis
                                </label>
                            </div>
                          </div>
                          
                      </div>
                      <div class="row mt-2">
                          <div class="col">
                              <div class="form-check">
                                  <input :class="{'form-check-input': true, 'is-invalid': !terms[1] && check}" type="checkbox" v-model="terms[1]" name="examplecheckboxs" id="examplecheckboxs2" value="opcao2" >
                                  <label class="form-check-label" for="examplecheckboxs2">
                                      Confirmo ter autorização da família da vítima
                                  </label>
                              </div>
                          </div>                
                      </div>
                      <div class="row mt-2">
                          <div class="col">
                              <div class="form-check">
                                  <input :class="{'form-check-input': true, 'is-invalid': !terms[2] && check}" type="checkbox" v-model="terms[2]" name="examplecheckboxs" id="examplecheckboxs3" value="opcao3">
                                  <label class="form-check-label" for="examplecheckboxs3">
                                      Concordo com a edição imparcial do texto tributo e do epitáfio
                                  </label>
                              </div>
                          </div>                
                      </div>
                      <div class="row mt-2">
                          <div class="col">
                              <div class="form-check">
                                  <input :class="{'form-check-input': true, 'is-invalid': !terms[3] && check}" type="checkbox" v-model="terms[3]" name="examplecheckboxs" id="examplecheckboxs4" value="opcao4" >
                                  <label class="form-check-label" for="examplecheckboxs4">
                                      Estou ciente de que a publicação pode levar até 45 dias   
                                  </label>
                              </div>
                          </div>                
                      </div>
                  </div>
                  
                  <input class="btn btn-primary btn-lg btn-block mt-5 mb-5" type="submit" @click="check_form" value="Enviar formulário"> 
                  
              </div>
        
      </div>
    </form>
  </div>    

   
</template>

<script>

import { mapMutations } from 'vuex'
import Axios from 'axios'
import api_url from '../../APIPath'

export default {

    components: {},
    data(){
        return{

            states: [],
            born_cities: [],
            death_cities: [],
            json_request: {},
            terms: [false, false, false, false],
            check: false,
            epitafio: '',   
        }
    },
    created(){
        
        this.json_request = {
              firstName: '',
              lastName: '',
              telefone: null,
              email: '',
              degreeOfKinship: '',
              firstNameHonor: '',
              lastNameHonor: '',
              anoFalecimento: null,
              anoNascimento: null,
              textTribute: '',
              bornCity: '',
              bornState: '',
              deadCity: '',
              deadState: '',
            }
        
        Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then( res => {
          this.states = res.data
          var sig = this.states[0].sigla.toLowerCase()
          
          Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sig}/municipios`).then(res =>{
            this.born_cities = res.data
            this.death_cities = res.data
          })
        })
        this.validate()
        this.disable_all()

    },

    methods: {
      
      change_born_cities: function($event){
        
        var sig = $event.target.value  
        Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sig}/municipios`).then(res =>{
          this.born_cities = res.data
        })
      },
      
      change_death_cities: function($event){
        
        var sig = $event.target.value  
        
        Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sig}/municipios`).then(res =>{
          this.death_cities = res.data
        })
      },

      ...mapMutations(['disable_all']),

      check_form: function(){
        this.check = true
      },

      post_form: function(){

        if(this.validate()){

          this.json_request['approved'] = false
          this.json_request['epitafio'] = this.epitafio
          
          Axios.post(api_url + '/stories/', this.json_request)
            
            .then(res => {
              
              alert('Formulário Enviado')
              console.log(res)
              this.$router.push('/')
            
            })
            .catch(err => {
              console.log(this.json_request, err)
            })

        }

    
      },
      validate: function(){
        
        var bool = true

        Object.keys(this.json_request).forEach(item => {
          
          if(this.json_request[item] == '' || this.json_request[item] == null){
            
            bool = false
          }
        })
        
        this.terms.forEach(item => {
          if(item == false)
            bool = false
            
          
        })
        return bool

      }

    },

    computed: {

    },
    

}

</script>

<style scoped>

.container .text-center{
    margin-top:95px;
}
</style>