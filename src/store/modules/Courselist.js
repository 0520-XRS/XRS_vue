import {RE_ALLCOURSE } from '../mutation-types'
import { reCourse } from '../../api'
import Vue from 'vue'

const state = {
  Course:[]
}

const mutations = {
  [RE_ALLCOURSE](state, { Course }) {
    state.Course = Course
    // console.log(state) // 状态中有值
  }
}

const actions = {
  async getCourse({ commit }) {
    const result = await reCourse()
    // console.log(result) // 拿到数据了
    if (result.code === 0) {
      const Course = result.data
      // console.log(Course) //拿到了数组

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