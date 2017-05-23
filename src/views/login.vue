<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="登录" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>

    <div class="main-body">
      <div class="block login-page">
        <div class="portrait">
          <img :src="portrait"></img>
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="account input-control" 
                 id="account" 
                 v-model="login_form.account" 
                 placeholder="昵称或邮箱" 
                 @change="checkAccount()"
                 type="text" />
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control password" 
                 id="password" 
                 v-model="login_form.password" 
                 placeholder="密码" 
                 @keyup.enter="login()"
                 type="password" />
        </div>

        <button class="btn submit login" @click="login()">登录</button>

        <div class="tip">
          <router-link to="/resetpass" class="tip-left"><span>忘记密码?</span></router-link>
          <router-link to="/signup"><span>注册</span></router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
require('../assets/scss/login.scss');
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import $ from 'webpack-zepto';
import config from '../config.js';
import Form from '../libs/forms.js';

export default {
  data () {
    return {
      login_form: {},
      portrait: ''
    }
  },
  methods: {
    checkAccount: function(){
      var default_url = require("../assets/images/Login_03.jpg");
      this.portrait = default_url;

      $.ajax({
        type: "POST",
        url: config.domain + '/checkaccount',
        data: this.login_form,
        success: (data) => {
          this.portrait = data.picture_url || default_url ;
        },
        error: (xhr, dataType, error) => {
          this.portrait = default_url;
        }
      });
    },

    login: function() {
      let form = new Form();
      form.validateData(['account', 'password'], this.login_form);
      if(!form.is_valid){
        this.$alert(form.error.message);
        if(form.error.key !== 'password'){
          $('#account').focus();
          return;
        }
        $('#' + form.error.key).focus();
        return;
      }

      $.ajax({
        type: 'POST',
        url: config.domain + '/login',
        data: this.login_form,
        success: (data, status, xhr) => {
          let user = data.user;
          this.$alert(data.message);
          window.sessionStorage.user = JSON.stringify(user);
          this.$store.dispatch('setUserInfo', user);
          this.$router.push({
            path: "/"
          });
        },
        error: this.$errorHandler
      });
    }
  },
  components: {
    nvHead
  },
  mounted () {
    this.checkAccount();
  }
};
</script>
