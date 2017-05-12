<template>
  <div>
    <div class="side">

      <div class="side-user" v-if="user_info.email">
        <router-link :to="{ name: 'user', params: {name: user_info.name} }">
          <img class="user-image" :src="getPictureUrl()" />
        </router-link>
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
        <input type="text" @keyup.enter="postSearch()" v-model="search_keywords"　placeholder="搜索美食" />
        <div class="material-icons side-search" @click="postSearch()">search</div>
      </div>

      <div class="panel">
        <a href="/user/collection"><i class="material-icons icon-collect">star</i><div class="line collection">收藏</div></a>
        <a href="/user/message"><i class="material-icons icon-msg">message</i><div class="line message">消息</div></a>
        <a href="/user"><i class="material-icons icon-user">settings</i><div class="line user-info">我的</div></a>
        <a href="/site/about"><i class="material-icons icon-us">person</i><div class="line about">关于餐厅</div></a>
        <a href="/community"><i class="material-icons icon-cmt">group</i><div class="line collection">合作</div></a>
        <a href="/site/help"><i class="material-icons icon-help">help</i><div class="line help">帮助或反馈</div></a>
      </div>

    </div>
    <div v-on:click="hideSide()"></div>
  </div>
</template>
<script>
require('../assets/scss/side.scss');
import { mapGetters } from 'vuex';

export default {
  replace: true,
  data () {
    return {
      search_keywords: '',
      user_info: {}
    };
  },
  computed: {
    ...mapGetters({
      user_info: 'getUserInfo'
    })
  },
  methods: {
    getPictureUrl () {
      var url = this.user_info.picture_url || require("../assets/images/slider_01.png");
      return url;
    },
    hideSide () {
      this.$el.firstChild.classList.remove("show-side");
      this.$el.lastChild.classList.remove("side-bg");
    },
    showSide () {
      this.$el.firstChild.classList.add("show-side");
      this.$el.lastChild.classList.add("side-bg");
    },
    postSearch () {
      var kw = this.$data.search_keywords;
      this.$parent.postSearch(kw);
      this.hideSide();
      this.$data.search_keywords = "";
    },
    mounted: function() {
      console.log('side mounted');
    }
  }
};
</script>
