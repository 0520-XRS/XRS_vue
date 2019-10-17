import {RE_ALLCOURSE } from './mutation-types'
export default {
  [RE_ALLCOURSE](state, { Course }) {
    state.Course = Course
  }
}