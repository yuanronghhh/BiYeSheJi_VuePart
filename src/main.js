import Vue from 'vue';
import routes from './routers';
import $ from 'webpack-zepto';
import VueRouter from 'vue-router';
import Alert from './libs/alert.js';

Vue.use(Alert);

Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;

const router = new VueRouter({
  mode: 'history',
  routes: routes
});

const app = new Vue({
  router
});

app.$mount('#app');
