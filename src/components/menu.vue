<template>
  <div class="menu">

    <div class="nav-wrapper">
      <router-link to="/search"><i class="large material-icons menu-icon">zoom_in</i></a>
      <div class="nav-text">搜索</div>
    </div>
    <div class="nav-wrapper">
      <router-link to="/home"><i class="large material-icons menu-icon">home</i></a>
      <div class="nav-text">主页</div>
    </div>
    <div class="nav-wrapper">
      <div class="menu-center"><span class="menu-center-text">订</span></div>
    </div>
    <div class="nav-wrapper">
      <router-link to="/message"><i class="large material-icons menu-icon">chat_bubble</i></a>
      <div class="nav-text">消息</div>
    </div>
    <div class="nav-wrapper">
      <router-link to="/user"><i class="large material-icons menu-icon">account_box</i></a>
      <div class="nav-text">用户中心</div>
    </div>
    <a href="#search"><i class="large material-icons menu-icon"></i></a>

  </div>
</template>
<script>
require('../assets/scss/menu.scss');
</script>
