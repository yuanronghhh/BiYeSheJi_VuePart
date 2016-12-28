<template>
  <div>
    <nv-head page-type="注册"></nv-head>

    <div class="main-body">
      <div class="block signup-page">

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="input-control" placeholder="昵称" type="text" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">email</i></a>
          <input class="input-control" placeholder="邮箱" type="text" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control" placeholder="密码" type="text" />
        </div>
        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="input-control" placeholder="重复密码" type="text" />
        </div>

        <button class="btn submit signup">注册</button>
        <div class="tip">
          <a href="/login" class="tip-left"><span>已有账号?</span></a>
          <a href="/resetpass"><span>重置密码</span></a>
        </div>
      </div>
      <nv-menu></nv-menu>
    </div>

  </div>
</template>
<script>
require('../assets/scss/signup.scss');
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
export default {
  components: {
    nvHead,
    nvMenu
  }
};
</script>
