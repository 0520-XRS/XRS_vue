import {RE_ALLCOURSE,ADD_LIST } from '../mutation-types'
import { reCourse } from '../../api'
const state = {
  Course:[],
  CourseLists:[]
}
const mutations = {
  [RE_ALLCOURSE](state, { Course }) {
    state.Course = Course
  },
  [ADD_LIST](state,{list}){
    state.CourseLists.push(list)
  }
}
const actions = {
  async getCourse({ commit }) {
    const result = await reCourse()
    if (result.code === 0) {
      const Course = result.data
      commit(RE_ALLCOURSE, { Course })
    }
  },
  open2({commit},{list}){
    commit(ADD_LIST,{list})
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