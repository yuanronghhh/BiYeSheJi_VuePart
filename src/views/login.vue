<template>
  <div>
    <div class="block login-page">
      <div class="portrait">
        <img src="../assets/images/Login_03.jpg"></img>
      </div>

      <div class="input-group">
        <a><i class="large material-icons login-label">perm_contact_calendar</i></a>
        <input class="account input-control" placeholder="昵称或邮箱" type="text" />
      </div>

      <div class="input-group">
        <a><i class="large material-icons login-label">lock</i></a>
        <input class="input-control password" placeholder="密码" type="password" />
      </div>

      <button class="btn login">登录</button>

      <div class="tip">
        <a href="/forget"><span>忘记密码?</span></a>
        <a href="/signup" class="tip-signup"><span>注册</span></a>
      </div>
    </div>

  </div>
</template>
<script>
  require('../assets/scss/login.scss');
</script>
