import Vue from 'vue';
import routes from './routers';
import $ from 'webpack-zepto';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

new Vue({
  router
}).$mount('#app');