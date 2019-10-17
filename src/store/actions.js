import {RE_ALLCOURSE } from './mutation-types'
import { reCourse } from '../api'
export default{
  async getCourse({ commit }) {
    const result = await reCourse()
    if (result.code === 0) {
      const Course = result.data
      commit(RE_ALLCOURSE, { Course })
    }
  }
}