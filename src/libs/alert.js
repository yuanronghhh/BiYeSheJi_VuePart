import Vue from 'vue';
import $ from 'webpack-zepto';

export default {
  install () {
    let timer = null;
    Vue.prototype.$alert = (msg) => {
      let $alert = $('<div class="message-alert"></div>');
      $('body').append($alert);
      $alert.html(msg);
      $alert.addClass('alert-show');
      clearTimeout(timer);
      timer = setTimeout(() => {
        $(".message-alert").remove();
      }, 2000);
    };
  }
};
