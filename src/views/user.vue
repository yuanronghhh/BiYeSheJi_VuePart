<template>
  <div>
    <nv-head page-type="我的" left_icon="keyboard_arrow_left" right_icon="save"></nv-head>
    <div class="main-body">

      <div class="background">
        <div class="card block">
          <span class="title">基本信息</span>
          <div class="basic-info">
            <label class="name">昵称: </label>
            <input class="info" @focus="infoChanged()" v-model="user_info.name" />
          </div> 
          <div class="basic-info">
            <label class="email"> 邮箱: </label>{{ user_info.email }}
          </div>
          <div class="basic-info">
            <label class="phone_number">电话号码: </label>
            <input class="info" @focus="infoChanged()" v-model="user_info.phone_number" />
          </div>
          <div class="basic-info">
            <label class="picture_url">头像链接: </label>
            <input class="info" @focus="infoChanged()" v-model="user_info.picture_url" />
          </div>
          <div class="basic-info">
            <label class="money">余额: </label>{{ user_info.money }} 元
            <router-link to="/user/updateInfo">充值</a>
          </div>

          <div class="basic-info">
            <label to="/updatepass">更新密码</label>
            <router-link to="/updatepass">更改</a>
          </div>

        </div>

        <div class="panel">
          <router-link to="/user/collection">
            <i class="material-icons icon-collect">folder_special</i><div class="line collection">我的收藏</div>
          </router-link>
          <router-link to="/user/order"><i class="material-icons icon-msg">shop</i><div class="line message">我的订单</div></router-link>
          <router-link to="/user/comment"><i class="material-icons icon-collect">comment</i><div class="line collection">我的评论</div></router-link>
          <router-link to="/user/history"><i class="material-icons icon-msg">history</i><div class="line">近期操作</div></router-link>
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
  computed: {
    user_info: function(){
      return store.state.user_info;
    }
  },
  methods: {
    infoChanged: function() {
      $(".header-right").html("save");
    },
    updateInfo: function() {

      $.ajax({
        url: config.domain + "/user/" + this.user_info.name + '/update',
        type: "POST",
        data: this.user_info,
        success: (data) => {
          store.state.user_info = this.user_info;
          window.sessionStorage.setItem("user", JSON.stringify(this.user_info));
          this.$alert(data.message);
          this.$router.push({
            path: "/"
          });
        },
        error: this.$errorHandler
      });
    },
    signOut: function() {
      $.ajax({
        url: config.domain + '/signout',
        type: 'GET',
        success: (data) => {
          window.sessionStorage.clear();
          store.dispatch('setUserInfo', {});

          this.$alert(data.message);
          setTimeout(() => {
            this.$router.push({
              path: "/"
            });
          });
        },
        error: this.$errorHandler
      })
    },

    getUserInfoByType: function(type, value) {
      var user = {
        "phone_number": "1810583139"
      };

      if(!value) {
        return user[type];
      }
      return {};
    },

    getUserInfo: function() {
      $.ajax({
        url: config.domain + '/user',
        type: 'GET',
        success: (data) => {
          store.state.user_info = data.user;
        },
        error: this.$errorHandler
      })
    }
  },
  mounted () {
    $(".header-right").html("n");
    this.getUserInfo();
  }
};
</script>
<style lang="scss">
.background {
  background: white;
  .title {
    font-size: 12px;
  }
  .basic-info {
    padding: 10px 2%;
    input {
      font-weight: bold;
    }
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
}
</style>
