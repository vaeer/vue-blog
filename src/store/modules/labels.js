import { getLabelList } from '@/services/labels';

const state = {
  labelList: []
};

const mutations = {
  GET_LABEL_LIST(state, payload) {
    state.labelList = payload;
  }
};

const actions = {
  async getLabelList({commit}, payload) {
    const res = await getLabelList(payload);
    commit('GET_LABEL_LIST', res.result);
  }
};

const getters = {};

export default{
  state,
  mutations,
  actions,
  getters
};