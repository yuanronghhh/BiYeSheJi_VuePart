<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="注册" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>

    <div class="main-body">
      <div class="block signup-page">

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="input-control" id="name" v-model="signup_form.name" placeholder="昵称" type="text" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">email</i></a>
          <input class="input-control" id="email" v-model="signup_form.email" placeholder="邮箱" type="text" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control" id="password" v-model="signup_form.password"
                                                     placeholder="密码" type="password" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control" id="repass" v-model="signup_form.repass"
                                                   placeholder="重复密码" type="password" />
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <label>男: </label><input class="input-control" id="gender" name="gender" value="男" type="radio" v-model="signup_form.gender"/>
          <label>女: </label><input class="input-control" id="gender" name="gender" value="女" type="radio" v-model="signup_form.gender"/>
        </div>

        <button class="btn submit signup" @click="signup">注册</button>
        <div class="tip">
          <router-link to="/login" class="tip-left"><span>已有账号?</span></router-link>
          <router-link to="/resetpass"><span>重置密码</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require('../assets/scss/signup.scss');
import nvHead from '../components/header.vue';
import Form from '../libs/forms.js';
import config from '../config.js';
import $ from 'webpack-zepto';

export default {
  data: function () {
    return {
      signup_form: {}
    };
  },
  methods: {
    signup () {
      var form = new Form();
      var pass = form.getProp(this.signup_form, 'password');
      var repass = form.getProp(this.signup_form, 'repass');
      if(pass !== repass){
        this.$alert('两次密码输入不一致!');
        $('#password').focus();
        return;
      }
      form.validateData(['name', 'password', 'repass', 'email', 'gender'], this.signup_form);
      if(!form.is_valid){
        this.$alert(form.error.message);
        $('#' + form.error.key).focus();
        return ;
      }
      $.ajax({
        type: 'POST',
        url: config.domain + '/signup',
        data: form.cleaned_data,
        success: (data, status, xhr) => {
          this.$alert(data.message);
          setTimeout(() => {
            this.$router.push({
              path: '/login'
            });
          }, 2000);
        },
        error: this.$errorHandler
      });
    }
  },
  components: {
    nvHead
  }
};
</script>
