<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="我的评论" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <nv-loading></nv-loading>

      <div class="user-comment card" v-for="comment in comments">
        <router-link :to="{ name:'detail', params: { id: comment.item_id } }">
          <i class="material-icons">loyalty</i>
          <p class="content">
            {{ comment.content }}
          </p>
        </router-link>
        <div class="time">{{  formatByString(comment.create_at) }}</div>
      </div>

      <nv-backtop></nv-backtop>
    </div>
  </div>
</template>
<script>
import nvBacktop from "../components/backtop.vue";
import nvHead from '../components/header.vue';
import nvLoading from '../components/loading.vue';
import Tools from '../libs/tools.js'

import config from '../config.js';
import store from '../vuex/user.js';
import $ from 'webpack-zepto';

export default {
  components: {
    nvHead,
    nvBacktop,
    nvLoading
  },
  data () {
    return {
      comments: []
    };
  },
  methods: {
    formatByString: function(time_string) {
      var tools = new Tools();
      var tm = new Date(time_string);
      return tools.formatDate(tm.getTime());
    },

    // 通过用户id获取评论
    getCommentByUserId: function(id) {

      $.ajax({
        url: config.domain + '/user/comments',
        type: "POST",
        data: {
          "user_id": id
        },
        success: (res) => {
          var data = res.data;
          if(data.length > 0){
            this.comments = data;
            this.$children[1].loading = false;
          } else {
            $(".loading").html("没有数据");
          }
        },
        error: this.$errorHandler
      });
    }
  },
  mounted () {
    var id = store.state.user_info.id;
    this.getCommentByUserId(id);
  }
}
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.user-comment {
  .material-icons {
    float: left;
    padding: 5px 2%;
  }
  padding: 5px 2%;
  .content {
    padding: 5px;
    margin-left: 10%;
  }
  border: dashed 1px $BODY_COLOR;
  .time {
    text-align: right;
    padding: 1px 2%;
  }
}
</style>

