<template>


    <div class="container">
    
      <div class="text-center">
        <h2>Passo 1</h2>
        <h4>Nos conte sobre você</h4>
      </div>

      <div class="row">
        <div class="col-md-6 offset-md-3">
          <hr class="mb-5">
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName_person">Primeiro Nome</label>
                <input type="text" class="form-control" id="firstName_person" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Campo obrigatório!
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName_person">Sobrenome</label>
                <input type="text" class="form-control" id="lastName_person" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Campo obrigatório!
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="phone">Telefone (WhatsApp)</label>
              <div class="input-group">
                <input type="text" class="form-control" id="phone" placeholder="(99) 9 9999-9999" required>
                <div class="invalid-feedback" style="width: 100%;">
                  Campo obrigatório!
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="usuário@dominio.com">
              <div class="invalid-feedback">
                Campo obrigatório!
              </div>
            </div>

            <div class="mb-3">
              <label for="degree_of_kinship">Grau de Parentesco</label>
              <input type="text" class="form-control" id="degree_of_kinship" placeholder="Digite seu grau de parentesco com o(a) homenageado(a)" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
    
          </form>
        </div>
      </div>


      <div class="text-center">
        <h2>Passo 2</h2>
        <h4>Nos conte sobre a sua pessoa querida</h4>
      </div>

    
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <hr class="mb-5">
          <form class="needs-validation" novalidate>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">Primeiro Nome</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Campo obrigatório!
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Sobrenome</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
                <div class="invalid-feedback">
                  Campo obrigatório!
                </div>
              </div>
            </div>


            <div class="row">
                <div class="col-md-6 mb-3">
                <label for="phone">Idade</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="phone" placeholder="Ex: 26" required>
                    <div class="invalid-feedback" style="width: 100%;">
                    Campo obrigatório!
                    </div>
                </div>
                </div>

                <div class="col-md-6 mb-3">
                <label for="phone">Ano de nascimento</label>
                <div class="input-group">
                    <input type="text" class="form-control" id="phone" placeholder="Ex: 1993" required>
                    <div class="invalid-feedback" style="width: 100%;">
                        Campo obrigatório!
                    </div>
                </div>
                </div>
            </div>


            <div class="mb-3">

              <label for="_homenagem">Homenagem</label>
              <textarea class="form-control" rows="4" id="_homenagem" placeholder="Digite sua homenagem..."></textarea>
              <div class="invalid-feedback">
                Campo obrigatório!
              </div>

              <label class="mt-3" for="_homenagem">Epitáfio</label>
              <textarea class="form-control" rows="2" id="_homenagem" placeholder="Resuma o que a pessoa tinha de mais especial..."></textarea>
              <div class="invalid-feedback">
                Campo obrigatório!
              </div>

            </div>
            
            <div class="row mt-3">
                <div class="col">
                    <label for="born_city">Estado de Nascimento</label>
                    <select class="form-control" id="born_city" @change="change_born_cities($event)" required>
                      <option v-for="state in states" :value="state.sigla" :key="state.id" > {{state.sigla}} </option>
                    </select>
                </div>

                <div class="col">
                    <label for="born_state">Cidade de Nascimento</label>
                    <select class="form-control" id="born_state" required >
                      <option v-for="city in born_cities" :value="city.nome" :key="city.id"> {{city.nome}} </option>
                    </select>
                </div>
                
            </div>

            <div class="row mt-3 mb-5">
                
                <div class="col">
                    <label for="dead_city">Estado de falecimento</label>
                    <select class="form-control" id="dead_city" @change="change_death_cities($event)" required>
                      <option v-for="state in states" :value="state.sigla" :key="state.id"> {{state.sigla}} </option>
                    </select>
                </div>

                <div class="col">
                    <label for="dead_state">Cidade de falecimento</label>
                    <select class="form-control" id="dead_state" required>
                      <option v-for="city in death_cities" :value="city.nome" :key="city.id"> {{city.nome}} </option>
                    </select>
                </div>
                
            </div>
            <div class="text-left">
                <div class="row mt-5">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="opcao1" checked>
                            <label class="form-check-label" for="examplecheckboxs1">
                                Autorizo a inserção deste tributo a plataforma ViasCrucis
                            </label>
                        </div>
                    </div>
                    
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="opcao1" checked>
                            <label class="form-check-label" for="examplecheckboxs1">
                                Confirmo ter autorização da família da vítima
                            </label>
                        </div>
                    </div>                
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="opcao1" checked>
                            <label class="form-check-label" for="examplecheckboxs1">
                                Concordo com a edição imparcial do texto tributo e do epitáfio
                            </label>
                        </div>
                    </div>                
                </div>
                <div class="row mt-2">
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="examplecheckboxs" id="examplecheckboxs1" value="opcao1" checked>
                            <label class="form-check-label" for="examplecheckboxs1">
                                Estou ciente de que a publicação pode levar até 45 dias   
                            </label>
                        </div>
                    </div>                
                </div>
            </div>
            <button class="btn btn-primary btn-lg btn-block mt-5 mb-5" type="submit">Enviar história</button>
       
          </form>
        </div>
      </div>
    </div>

   
</template>

<script>


import Axios from 'axios'

export default {

    components: {},
    data(){
        return{
            states: [],
            born_cities: [],
            death_cities: []
        }
    },
    created(){
        Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then( res => {
          this.states = res.data
          var sig = this.states[0].sigla.toLowerCase()
          
          Axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sig}/municipios`).then(res =>{
            this.born_cities = res.data
            this.death_cities = res.data
          })
        })
        
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


    }

}

</script>

<style scoped>

.container .text-center{
    margin-top:95px;
}
</style>