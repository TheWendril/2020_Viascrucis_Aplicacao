import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import Vuex from 'vuex'
import 'formvuelar/dist/formvuelar.css'

//import components
import contact_form from './components/contact_form';
import send_history from './components/send_history';
import main_page from './components/main_page'
import gallery from './components/gallery'


Vue.use(VueRouter)
Vue.use(Vuex)

// ROUTES

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: main_page
    },
    {
      path: '/contato',
      component: contact_form
    },
    {
      path: '/enviar-historia',
      component: send_history
    },
    {
      path: '/galeria',
      component: gallery
    }
  ]
})


// VUEX

const store = new Vuex.Store({
  
  state: {
    active_items: [true, false, false],
    valor: 0
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
