<template>
  <div>
    <nv-head page-type="我的" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <div class="background">
        <div class="card block">
          <span class="title">基本信息</span>
          <div class="basic-info">
            <label class="name">昵称: </label>{{ user_info.name }}
            <router-link to="/update/name">更改</a>
          </div> 
          <div class="basic-info">
            <label class="email"> 邮箱: </label>{{ user_info.email }}
          </div>
          <div class="basic-info">
            <label class="phone_number">电话号码: </label>{{ user_info.phone_number }}
            <router-link to="/update/phone_number">更改</a>
          </div>
          <div class="basic-info">
            <label class="money">余额: </label>{{ user_info.money }} 元
            <router-link to="/update/money">充值</a>
          </div>

        </div>

        <div class="panel">
          <a href="/user/collection"><i class="material-icons icon-collect">folder_special</i><div class="line collection">我的收藏</div></a>
          <a href="/user/message"><i class="material-icons icon-msg">chat</i><div class="line message">我的消息</div></a>
          <a href="/user/collection"><i class="material-icons icon-collect">comment</i><div class="line collection">我的评论</div></a>
          <a href="/user/collection"><i class="material-icons icon-user">perm_contact_calendar</i><div class="line collection">我的朋友</div></a>
          <a href="/user"><i class="material-icons icon-msg">history</i><div class="line">近期操作</div></a>
        </div>

        <button to="/signout" @click="signOut()" class="btn signout">注销登录</button>
      </div>

    </div>
  </div>
</template>
<script>
require("../components/card.vue");
import nvHead from '../components/header.vue';
import nvBar from '../components/bar.vue';
import config from '../config.js';
import store from '../vuex/user';
import $ from 'webpack-zepto';

export default {
  components: {
    nvHead,
    nvBar
  },
  data () {
    return {
      user_info: {}
    }
  },
  methods: {
    signOut: function() {
      $.ajax({
        url: config.domain + '/signout',
        type: 'GET',
        success: (data) => {
          window.sessionStorage.clear();
          store.dispatch('setUserInfo', {});

          this.$alert(data.message);
          var self = this;
          setTimeout(function(){
            self.$router.push({
              path: "/"
            });
          });
        },
        error: this.$errorHandler
      })
    },
    getUserInfo: function() {
      $.ajax({
        url: config.domain + '/user',
        type: 'GET',
        success: (data) => {
          this.user_info = data.user;
        },
        error: this.$errorHandler
      })
    }
  },
  mounted () {
    this.getUserInfo();
  }
};
</script>
<style lang="scss">
.background {
  background: white;
}
.title {
  font-size: 12px;
}
.basic-info {
  padding: 10px 2%;
  a {
    float: right;
  }
  label {
    margin: 0 2%;
  }
}
.signout {
  position: absolute;
  left: 0px;
  right: 0px;
  width: 96%;
}
label {
  color: grey;
}
</style>
