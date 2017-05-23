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
      $alert.addClass("alert-show");
      $alert.html(msg);
      clearTimeout(timer);

      $(".show-tip").remove();
      timer = setTimeout(() => {
        $(".alert-show").remove();
        $(".show-tip").remove();
      }, 2000);
    };

    var showTip = (msg) => {
      let $tip = $('<div class="show-tip"></div>');
      $('body').append($tip);
      $tip.html(msg);
      clearTimeout(timer);

      $(".alert-show").remove();
      timer = setTimeout(() => {
        $(".show-tip").remove();
        $(".alert-show").remove();
      }, 2000);
    };

    Vue.prototype.$errorHandler = (xhr, dataType, error) => {
      try {
        var data = JSON.parse(xhr.responseText);
        messageAlert(data.message);
      } catch (e) {
        messageAlert("失败");
      }
    };

    Vue.prototype.$alert = messageAlert;
    Vue.prototype.$showTip = showTip;
  }
};
