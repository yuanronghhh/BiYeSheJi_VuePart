import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const userStore = new Vuex.Store({
  state: {
    user_info: {},
    shop_info: []
  },
  getters: {
    getUserInfo(state) {
      return state.user_info;
    },
    getShopInfo(state) {
      return state.shop_info;
    }
  },
  mutations: {
    setUserInfo(state, user_info) {
      state.user_info = user_info;
    },
    setShopInfo(state, shop_info) {
      state.shop_info = shop_info;
    }
  },
  actions: {
    setUserInfo({ commit }, user_info) {
      commit('setUserInfo', user_info);
    },
    setShopInfo({ commit }, shop_info) {
      commit("setShopInfo", shop_info);
    }
  }
});

export default userStore;
