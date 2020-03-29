import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js';
import login from './modules/login.js';
import head from './modules/head.js';
Vue.use(Vuex)


const store=new Vuex.Store({
        getters,
        modules:{
            login,
            head
        }
})

export default store