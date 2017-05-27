<template>
<div class="table">

  <div class="menu-table">
    <table>
      <thead>
        <th v-for="col in cols">{{ col }}</th>
        <th class="delete">删除</th>
        <th class="finish">完成订单</th>
        <th class="finish">退订订单</th>
      </thead>
      <tbody>
        <tr v-for="menu in menus">
          <td><div   v-text="menu.id           "></div></td>
          <td><div   v-text="menu.total       "></div></td>
          <td><div   v-text="menu.status         "></div></td>
          <td><div   v-text="menu.user_name    "></div></td>
          <td><div   v-text="menu.remark      "></div></td>
          <td>
            <ul v-for="c in parseContent(menu.content)">
              <li>{{ c.name }}</li>
              <li>{{ c.price }}</li>
            </ul>
          </td>
          <td><div   v-text="formatByString(menu.create_at)"></div></td>
          <td><div   v-text="formatByString(menu.update_at)"></div  ></td>
          <td><button class="btn" @click="deleteMenu(menu)">删除</button></td>
          <td><button class="btn" @click="updateMenu(menu)">完成订单</button></td>
          <td><button class="btn" @click="cancelMenu(menu)">同意退单</button></td>
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
import Tools from '../libs/tools.js'

export default {
  data () {
    return {
      new_menu: {},
      menus: [],
      cols: [],
      items: [],
      collections: []
    };
  },
  methods: {

    formatByString: function(time_string) {
      var tools = new Tools();
      var tm = new Date(time_string);
      return tools.formatDate(tm.getTime());
    },

    parseContent: function(content) {
      return JSON.parse(content);
    },
    cancelMenu: function(menu){

      $.ajax({
        url: config.domain + "/menu/" + menu.id + "/admit",
        type: 'POST',
        data: menu,
        success: (res) => {
          this.$alert(res.message);
        },
        error: this.$errorHandler
      });
    },
    deleteMenu: function(menu) {

      $.ajax({
        url: config.domain + "/menu/" + menu.id + "/delete",
        type: 'POST',
        data: menu,
        success: (res) => {
          this.$alert(res.message);
          this.menus = this.menus.filter(function(ele){
            if(ele.id === menu.id){
              return false;
            }

            return true;
          });

        },
        error: this.$errorHandler
      });
    },
    updateMenu: function(menu) {

      $.ajax({
        url: config.domain + "/menu/" + menu.id + "/update",
        type: 'POST',
        data: menu,
        success: (res) => {
          this.$alert(res.message);

        },
        error: this.$errorHandler
      });

    },

    getMenus: function() {

      $.ajax({
        url: config.domain + "/menu",
        type: 'GET',
        success: (res) => {

          var dt = Object.keys(res.data[0]).filter(function(ele){
            if(ele === 'create_by') {
              return false;
            }
            return true;
          });

          this.cols = dt;
          this.menus = res.data;
        },
        error: this.$errorHandler
      })
    }
  },
  mounted () {
    this.getMenus();
  }
}
</script>
<style lang="scss">
.table {
  padding: 0 2%;

  .btn {
    width: 100%;
  }
  ul {
    li {
      float: left;
      width: 50%;
    }
  }
}
</style>
