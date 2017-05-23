import Vue from 'vue';
import routes from './routers';
import $ from 'webpack-zepto';
import VueRouter from 'vue-router';
import store from './vuex/user';
import Alert from './libs/alert.js';

Vue.use(Alert);
Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;
$.ajaxSettings.xhrFields = { withCredentials: true }; // 发送带cookie

if (window.sessionStorage.user) {
  store.dispatch('setUserInfo', JSON.parse(window.sessionStorage.user));

  if (window.sessionStorage.shop) {
    store.dispatch('setShopInfo', JSON.parse(window.sessionStorage.shop));
  }
} else {
  window.sessionStorage.clear();
}

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  // 跳转时scroll到顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.user_info.id) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

const app = new Vue({
  router,
  store
});

app.$mount('#app');
