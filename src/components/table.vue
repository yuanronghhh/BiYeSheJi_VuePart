<template>
<div class="table">

  <div class="user-table" v-if="show_user">
    <table>
      <thead>
        <th v-for="col in cols">{{ col }}</th>
        <th class="edit">保存</th>
        <th class="delete">删除</th>
        <th class="reset">重置密码</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td><div   v-text="user.id           "></div></td>
          <td><input v-model="user.name        "></input></td>
          <td><input v-model="user.picture_url "></input></td>
          <td><div   v-text="user.email        "></div></td>
          <td><input v-model="user.gender      "></input></td>
          <td><input v-model="user.money       "></input></td>
          <td><input v-model="user.status      "></input></td>
          <td><input v-model="user.phone_number"></input></td>
          <td><div   v-text="user.create_at    "></div  ></td>
          <td><div   v-text="user.update_at    "></div  ></td>
          <td><button class="btn" @click="updateUser(user)">保存</button></td>
          <td><button class="btn" @click="deleteUser(user)">删除</button></td>
          <td><button class="btn" @click="resetPass(user)">重置密码</button></td>
        </tr>
        <tr>
          <td><div>-<div></td>
          <td><input v-model="new_user.name         " placeholder="点击更改"></input></td>
          <td><input v-model="new_user.picture_url  " placeholder="点击更改"></input></td>
          <td><input v-model="new_user.email        " placeholder="点击更改"></input></td>
          <td><input v-model="new_user.gender       " placeholder="点击更改"></input></td>
          <td><div>-</div></td>
          <td><div>-</div></td>
          <td><input v-model="new_user.phone_number " placeholder="点击更改"></input></td>
          <td><div>-</div></td>
          <td><div>-</div></td>
          <td colspan="2"><button class="btn" @click="addUser(new_user)">添加</button></td>
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
      new_user: {},
      users: [],
      cols: [],
      items: [],
      collections: [],
      show_user: false
    };
  },
  methods: {
    resetPass: function(user) {
      $.ajax({
        url: config.domain + "/resetpass",
        type: 'POST',
        data: user,
        success: (res) => {
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    addUser: function(user){

      $.ajax({
        url: config.domain + "/user/create",
        type: 'POST',
        data: user,
        success: (res) => {
          this.users.push(user);
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    deleteUser: function(user) {

      $.ajax({
        url: config.domain + "/user/" + user.name + "/delete",
        type: 'POST',
        data: user,
        success: (res) => {
          this.users = this.users.filter(function(ele) {
            if(user.id === ele.id) {
              return false;
            }
            return true;
          });
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    updateUser: function(user){

      $.ajax({
        url: config.domain + "/user/" + user.name + "/update",
        type: 'POST',
        data: user,
        success: (res) => {
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    getUsers: function() {

      $.ajax({
        url: config.domain + "/admin/users",
        type: 'GET',
        success: (res) => {
          var dt = Object.keys(res.data[0]).filter(function(ele){
            if(ele === 'password') {
              return false;
            }
            return true;
          });
          this.cols = dt;
          this.users = res.data;
        },
        error: this.$errorHandler
      })
    }
  },
  mounted () {
    var type = this.$route.params.info;

    if(type === 'user') {
      this.show_user = true;
      this.getUsers();
    }

    if(type === 'item') {
    }

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
