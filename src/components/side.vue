<template>
  <div class="side">
    <div class="side-user">
      <a href=""><img class="user-image" src="../assets/images/slider_01.png" alt="" /></a>
      <div class="name"> <span>用户名: </span> greyhound </div>
      <div class="email"> <span>邮箱:</span> 635044633@qq.com </div>
    </div>
    <div class="panel">
      <a href="/user/message"><i class="material-icons">message</i><div class="line message">消息</div></a>
      <a href="/user/collection"><i class="material-icons">star</i><div class="line collection">收藏</div></a>
      <a href="/community"><i class="material-icons">group</i><div class="line collection">社区</div></a>
      <a href="/user"><i class="material-icons">settings</i><div class="line user-info">我的</div></a>
      <a href="/site/about"><i class="material-icons">person</i><div class="line about">关于作者</div></a>
      <a href="/site/help"><i class="material-icons">help</i><div class="line help">帮助或反馈</div></a>
    </div>
  </div>
</template>
<script>
require('../assets/scss/side.scss');
</script>
