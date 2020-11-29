import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import 'formvuelar/dist/formvuelar.css'

import router from './routes/index'

//import components


Vue.use(VueRouter)
Vue.use(Vuex)

// ROUTES


// VUEX

const store = new Vuex.Store({
  
  state: {
    admin_access: false,
    active_items: [true, false, false, false],
    show_default_navbar: true,
    admin_active_items: [true, false, false],
    token: ''

  },
  
  mutations: {
    
    disable_all(state){
      
      var tempList = []
      
      for(var i = 0; i < state.active_items.length; i++)
        tempList.push(false)
      
      state.active_items = tempList
    
    },

    enable(state, item){
 
      var tempList = []
      for(var i = 0; i < state.active_items.length; i++)
        tempList.push(false)
 
      tempList[item] = true
      state.active_items = tempList
    
    },
    
    enable_admin(state, item){
 
      var tempList = []
      for(var i = 0; i < state.admin_active_items.length; i++)
        tempList.push(false)
 
      tempList[item] = true
      state.admin_active_items = tempList
    
    },

    admin_ON(state, token){
      state.admin_access = true
      state.token = token
      localStorage.setItem('token', state.token)
    },

    admin_OFF(state){
      state.admin_access = false
      state.token = ''
      localStorage.removeItem('token')
    },

    get_Token(state){
      return state.token
    },

    hidden_d_Navbar(state){
      state.show_default_navbar = false
    },
    show_d_Navbar(state){
      state.show_default_navbar = true
    }

  },

  actions: {
    disable_all: ({commit}) => {commit('disable_all')}
  },

  getters: {

    valor: state => state.valor

  }

})


Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
