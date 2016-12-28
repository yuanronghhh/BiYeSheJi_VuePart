<template>
  <div>
    <nv-head page-type="登录"></nv-head>

    <div class="main-body">
      <div class="block login-page">
        <div class="portrait">
          <img src="../assets/images/Login_03.jpg"></img>
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="account input-control" placeholder="昵称或邮箱" type="text" />
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control password" placeholder="密码" type="password" />
        </div>

        <button class="btn submit login">登录</button>

        <div class="tip">
          <a href="/forget" class="tip-left"><span>忘记密码?</span></a>
          <a href="/signup"><span>注册</span></a>
        </div>
      </div>
      <nv-menu></nv-menu>
    </div>

  </div>
</template>
<script>
require('../assets/scss/login.scss');
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
export default {
  components: {
    nvHead,
    nvMenu
  }
};
</script>
