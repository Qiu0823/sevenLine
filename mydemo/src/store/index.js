import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import getter from './getter.js'
import action from './action.js'
import user from './modules/user.js'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getter,
  action,
  mutations,
  modules:{
    user,
  }
})
