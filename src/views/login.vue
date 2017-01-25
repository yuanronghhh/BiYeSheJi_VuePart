<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="登录"></nv-head>

    <div class="main-body">
      <div class="block login-page">
        <div class="portrait">
          <img src="../assets/images/Login_03.jpg"></img>
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="account input-control" 
                 id="account" 
                 v-model="login_form.account" 
                 placeholder="昵称或邮箱" 
                 type="text" />
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control password" 
                 id="password" 
                 v-model="login_form.password" 
                 placeholder="密码" 
                 type="password" />
        </div>

        <button class="btn submit login" @click="login()">登录</button>

        <div class="tip">
          <a href="/forget" class="tip-left"><span>忘记密码?</span></a>
          <a href="/signup"><span>注册</span></a>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
require('../assets/scss/login.scss');
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
import $ from 'webpack-zepto';
import Form from '../libs/forms.js';

export default {
  data () {
    return {
      login_form: {}
    }
  },
  methods: {
    login () {
      let form = new Form();
      form.validateData(['account', 'password'], this.login_form);
      if(!form.is_valid){
        this.$alert(form.error.message);
        if(form.error.key !== 'password'){
          $('#account').focus();
          return;
        }
        $('#' + form.error.key).focus();
        return ;
      }
      $.ajax({
        type: 'POST',
        url: '/login',
        dataType: 'json',
        data: form.cleaned_data,
        success: function (data, status, xhr) {
          console.log(data);
        },
        error: function (xhr, errorType, error) {
          console.log(error);
        }
      });
    }
  },
  components: {
    nvHead,
    nvMenu
  }
};
</script>
