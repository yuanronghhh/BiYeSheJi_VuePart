<template>
  <div>
    <div class="side">

      <div class="side-user" v-if="user_info.email">
        <img class="user-image" :src="getPictureUrl()" />
        <div class="name">昵称: <span v-text="user_info.name"></span> </div>
        <div class="email">邮箱: <span v-text="user_info.email"></span> </div>
      </div>

      <div class="side-user" v-if="!user_info.email">
        <router-link to="/user"><img class="user-image" src="../assets/images/slider_01.png" alt="" /></router-link>
        <div>
          <router-link to="/login"><button class="btn">登录</button></a>
          <router-link to="/signup"><button class="btn">注册</button></a>
        </div>
      </div>

      <div class="search">
        <input type="text" @keyup.enter="postSearch()" v-model="search_words"　placeholder="搜索美食" />
        <div class="material-icons side-search" @click="postSearch()">search</div>
      </div>

      <div class="panel">

        <div class="admin" v-if="isAdmin(user_info)">
          <router-link  to="/admin" class="admin" v-if="isAdmin(user_info)">
            <i class="material-icons icon-collect">code</i><div class="line collection">管理控制台</div>
          </router-link>
        </div>

        <router-link  to="/user/comment">
          <i class="material-icons icon-collect">comment</i><div class="line collection">我的评论</div>
        </router-link>
        <router-link  to="/user/order">
          <i class="material-icons icon-collect">list</i><div class="line collection">我的订单</div>
        </router-link>
        <router-link to="/user">
          <i class="material-icons icon-user">settings</i><div class="line user-info">用户中心</div>
        </router-link>

        <router-link to="/site/router-linkbout">
          <i class="material-icons icon-us">person</i><div class="line about">关于餐厅</div>
        </router-link>
        <router-link to="/community">
          <i class="material-icons icon-cmt">group</i><div class="line collection">合作</div>
        </router-link>
        <router-link to="/site/help">
          <i class="material-icons icon-help">help</i><div class="line help">帮助或反馈</div>
        </router-link>
      </div>

    </div>
  </div>
</template>
<script>
require('../assets/scss/side.scss');
import { mapGetters } from 'vuex';
import $ from 'webpack-zepto';

export default {
  replace: true,
  data () {
    return {
      search_words: '',
      user_info: {}
    };
  },
  computed: {
    ...mapGetters({
      user_info: 'getUserInfo'
    })
  },
  methods: {
    isAdmin (user) {
      if(user.status === 2) {
        return true;
      } else {
        return false;
      }
    },
    getPictureUrl () {
      var url = this.user_info.picture_url || require("../assets/images/slider_01.png");
      return url;
    },
    hideBackground () {
      this.$el.firstChild.classList.remove("show-side");
      $(".bg").hide();
    },
    showSide () {
      this.$el.firstChild.classList.add("show-side");
      $(".bg").show();
    },
    postSearch () {
      var kw = this.$data.search_words;
      this.$parent.postSearch(kw);
      this.hideBackground();
      this.$data.search_words = "";
    }
  },
  mounted () {
    $(".panel").off().on("click", () => {
      this.hideBackground();
    });

    $(".side-user").off().on("click", () => {
      this.hideBackground();
    });
  }
};
</script>
