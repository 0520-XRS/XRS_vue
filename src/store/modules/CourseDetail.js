import {RECEIVE_ADDTOCART } from '../mutation-types'
import { reCourse } from '../../api'
const state = {
  courseInfos:[]
}
const mutations = {
  [RECEIVE_ADDTOCART](state,{course}){
    state.courseInfos.push(course)
  }
  
}
const actions = {
  addToCart({commit},{course}){
    commit(RECEIVE_ADDTOCART,{course})
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}