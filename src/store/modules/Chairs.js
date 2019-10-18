import {RE_CHAIR } from '../mutation-types'
import { reChair } from '../../api'
const state = {
  Chair:[]
}
const mutations = {
  [RE_CHAIR](state, { Chair }) {
    state.Chair = Chair
  }
}
const actions = {
  async getChair({ commit }) {
    const result = await reChair()
    if (result.code === 0) {
      const Chair = result.data
      commit(RE_CHAIR, { Chair })
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