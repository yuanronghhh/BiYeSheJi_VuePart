<template>
  <div class="comment-block">
    <nv-bar leftText="用户评价"></nv-bar>

    <template v-for="comment in comments">
      <ul class="comments" :comment-id="comment.id">
        <li class="comment-user">用户<i>{{ comment.user_name }}: </i></li>
        <li class="comment-content"><b>{{ comment.content }}</b></li>
        <li class="create-at"><label class="label"></label>{{ comment.create_at }}</li>
      </ul>
    </template>

    <div class="add" @click="editComment">
      <i class="material-icons comment">comment</i>
    </div>

    <div class="edit-comment" v-show="show_edit">
      <nv-bar leftText="评论"></nv-bar>
      <textarea rows="6" v-model="comment.content" placeholder="吐槽一下"></textarea>
      <div class="btn"><div class="text" @click="addComment()">发送</div><i class="material-icons">send</i></div>
    </div>

    <div class="all-page" @click="showAllComments()">查看所有</div>
  </div>
</template>
<script>
import nvBar from '../components/bar.vue';
import $ from 'webpack-zepto';
import config from '../config.js';
import store from '../vuex/user.js';
import Tools from '../libs/tools.js';

export default {
  components: {
    nvBar
  },
  methods: {
    showAllComments: function(){
    },
    hideBackground: function(){
      this.show_edit = false;
      $(".bg").hide();
    },
    editComment: function(){
      this.show_edit = true;
      $(".bg").show();
    },
    addComment: function() {

      $.ajax({
        type: 'POST',
        url: config.domain + "/comment/create",
        data: this.comment,
        success: (data) => {
          var cmt = {};
          var tools = new Tools();
          var tm = Date.now();

          cmt["create_at"] = tools.formatDate(tm);
          cmt["user_name"] = store.state.user_info.name;
          cmt["content"] = this.comment.content;
          this.comments.push(cmt);
        },
        error: this.$errorHandler
      });

      this.show_edit = false;
      $(".bg").hide();
    },
    nextPage: function(){

      $.ajax({
        type: 'POST',
        url: config.domain + "/comment/getcomments",
        data: this.comment,
        success: (data) => {
          var tools = new Tools();
          var now = Date.now();
          this.comment.create_at = tools.formatDate(now);
          this.comments.push(this.comment);
        },
        error: this.$errorHandler
      });
    }
  },
  data () {
    return {
      show_edit: false,
      comment: {}
    }
  },
  props: {
    "comments": Array
  },
  mounted () {
    var id = this.$route.params.id;
    this.comment.item_id = id;
    $(".bg").remove();
    $("body").append('<div class="bg"></div>');
    $(".bg").off().on('click', () => {
      this.hideBackground();
    });
  }
}
</script>
<style lang="scss">
.comment-block {
  padding: 2px 2%;

  .edit-comment {
    position: fixed;
    bottom: 30%;
    width: 80%;
    margin: 0 5%;
    background: white;
    padding: 5%;
    textarea {
      width: 96%;
      padding: 10px 2%;
      border: dashed 1px black;
    }
    z-index: 20;

    .btn {
      text-align: center;
      display: inline-block;
      float: right;
      padding: 0px;
      padding-right: 5px;
      .text {
        float: left;
        padding: 5px;
      }
    }
  }

  .comment {
    padding: 8px 0% 0px 8px;

  }

  .add {
    position: fixed;
    bottom: 14%;
    right: 10%;
    color: #48632c;
    background: #f1f0f0;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    cursor: pointer;
  }
}
</style>
