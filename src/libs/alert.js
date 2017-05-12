import Vue from 'vue';
import $ from 'webpack-zepto';

export default {
  install () {
    let timer = null;

    /**
     * 通用alert
     */
    var messageAlert = (msg) => {
      let $alert = $('<div class="message-alert"></div>');
      $('body').append($alert);
      $alert.html(msg);
      $alert.addClass('alert-show');
      clearTimeout(timer);
      timer = setTimeout(() => {
        $(".message-alert").remove();
      }, 2000);
    };

    Vue.prototype.$errorHandler = (xhr, dataType, error) => {
      try {
        var data = JSON.parse(xhr.responseText);
        messageAlert(data.message);
      } catch (e) {
        console.log(e);
      }
    };

    Vue.prototype.$alert = messageAlert;
  }
};
