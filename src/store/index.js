import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import Courselist from './modules/Courselist.js'
import Chairs from './modules/Chairs.js'
import CourseDetail from './modules/CourseDetail.js'
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,                                            
    modules:{
      Courselist,
      Chairs,
      CourseDetail
    }
})