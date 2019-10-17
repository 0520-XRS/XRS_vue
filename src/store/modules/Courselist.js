import {RE_ALLCOURSE } from '../mutation-types'
import { reCourse } from '../../api'
const state = {
  Course:[]
}
const mutations = {
  [RE_ALLCOURSE](state, { Course }) {
    state.Course = Course
  }
}
const actions = {
  async getCourse({ commit }) {
    const result = await reCourse()
    if (result.code === 0) {
      const Course = result.data
      commit(RE_ALLCOURSE, { Course })
    }
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