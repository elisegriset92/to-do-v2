/* eslint no-shadow: 0 */


import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  results: [],
};

const mutations = {
  LIST(state, data) {
    state.results = data;
  },
};

const actions = {
  updateToDo: (store, data) => {
    store.commit('LIST', data);
  },
};

const getters = {
  results: state => state.results,
};

Vue.use(Vuex);
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;