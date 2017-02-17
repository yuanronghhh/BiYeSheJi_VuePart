<template>
  <div>
    <div class="side block">

      <div class="side-user">
        <a href=""><img class="user-image" src="../assets/images/slider_01.png" alt="" /></a>
        <div class="name"> <span>用户名: </span> greyhound </div>
        <div class="email"> <span>邮箱:</span> 635044633@qq.com </div>
      </div>

      <div class="panel">
        <a href="/user/collection"><i class="material-icons icon-collect">star</i><div class="line collection">收藏</div></a>
        <a href="/user/message"><i class="material-icons icon-msg">message</i><div class="line message">消息</div></a>
        <a href="/community"><i class="material-icons icon-cmt">group</i><div class="line collection">社区</div></a>
        <a href="/user"><i class="material-icons icon-user">settings</i><div class="line user-info">我的</div></a>
        <a href="/site/about"><i class="material-icons icon-us">person</i><div class="line about">关于作者</div></a>
        <a href="/site/help"><i class="material-icons icon-help">help</i><div class="line help">帮助或反馈</div></a>
      </div>

    </div>
    <div class="side-bg" v-on:click="hideSide()"></div>
  </div>
</template>
<script>
require('../assets/scss/side.scss');

export default {
  methods: {
    hideSide () {
      this.$parent.show = !this.$parent.show;
    }
  }
};
</script>
</script>
