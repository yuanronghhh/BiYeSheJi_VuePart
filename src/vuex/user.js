import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
  state: {
    user_info: {}
  },
  getters: {
    getUserInfo(state) {
      return state.user_info;
    }
  },
  mutations: {
    setUserInfo(state, user_info) {
      state.user_info = user_info;
    }
  },
  actions: {
    setUserInfo({ commit }, user_info) {
      commit('setUserInfo', user_info);
    }
  }
});

export default userStore;
