
<template>
<div class="table">

  <div class="comment-table">
    <table>
      <thead>
        <th v-for="col in cols">{{ col }}</th>
        <th class="edit">保存</th>
        <th class="delete">删除</th>
      </thead>
      <tbody>
        <tr v-for="comment in comments">
          <td><div   v-text="comment.id           "></div></td>
          <td><input v-model="comment.content     "></input></td>
          <td><input v-model="comment.item_id     "></input></td>
          <td><div   v-text="comment.user_id      "></div></td>
          <td><input v-model="comment.user_name   "></input></td>
          <td><input v-model="comment.status      "></input></td>
          <td><div   v-text="comment.create_at    "></div  ></td>
          <td><div   v-text="comment.update_at    "></div  ></td>
          <td><button class="btn" @click="updateComment(comment)">保存</button></td>
          <td><button class="btn" @click="deleteComment(comment)">删除</button></td>
        </tr>
        <tr>
          <td><div>-<div></td>
          <td><input v-model="new_comment.content      " placeholder="点击更改"></input></td>
          <td><div>-</div></td>
          <td><div>-</div></td>
          <td><input v-model="new_comment.phone_number " placeholder="点击更改"></input></td>
          <td><div>-</div></td>
          <td><div>-</div></td>
          <td colspan="2"><button class="btn" @click="addComment(new_comment)">添加</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</template>
<script>
require('../assets/scss/main.scss');
import $ from 'webpack-zepto';
import config from '../config.js';

export default {
  data () {
    return {
      new_comment: {},
      comments: [],
      cols: [],
      items: []
    };
  },
  methods: {
    addComment: function(comment){

      $.ajax({
        url: config.domain + "/comment/create",
        type: 'POST',
        data: this.new_comment,
        success: (res) => {
          this.comments.push(comment);
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    deleteComment: function(comment) {

      $.ajax({
        url: config.domain + "/comment/delete",
        type: 'POST',
        data: comment,
        success: (res) => {
          this.comments = this.comments.filter(function(ele) {
            if(comment.id === ele.id) {
              return false;
            }
            return true;
          });
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    updateComment: function(comment){

      $.ajax({
        url: config.domain + "/comment/" + comment.name + "/update",
        type: 'POST',
        data: comment,
        success: (res) => {
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    getComments: function() {

      $.ajax({
        url: config.domain + "/admin/comments",
        type: 'GET',
        success: (res) => {
          var dt = Object.keys(res.data[0]).filter(function(ele){
            if(ele === 'password') {
              return false;
            }
            return true;
          });
          this.cols = dt;
          this.comments = res.data;
        },
        error: this.$errorHandler
      })
    }
  },
  mounted () {
    this.getComments();
  }
}
</script>
<style lang="scss">
.table {
  padding: 0 2%;

  .btn {
    width: 100%;
  }
}
</style>
