<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="我的订单" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <nv-loading></nv-loading>

      <div class="user-order card" v-for="order in orders">
        <div class="head">
          <i class="material-icons">bookmark</i>
          <div>订单号: {{ order.id }}</div>
          <div>订单状态: {{ order.status }}
            <span @click="cancelOrder(order)">申请退单</span>
          </div>
        </div>

        <div class="detail">
          <ul>
            <li class="info"><b>名称</b></li>
            <li class="info"><b>价格</b></li>
          </ul>
          <ul v-for="o in parseContent(order.content)">
            <li class="info">
              <router-link :to="{ name: 'detail', params: { id: o.id } }">
                {{ o.name }}
              </router-link>
            </li>
            <li class="info">{{ o.price }}</li>
          </ul>
        </div>

        <div class="time">{{  formatByString(order.create_at) }}创建</div>
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
import $ from 'webpack-zepto';

export default {
  components: {
    nvHead,
    nvBacktop,
    nvLoading
  },
  data () {
    return {
      orders: []
    };
  },
  methods: {
    cancelOrder: function(order) {

      $.ajax({
        url: config.domain + '/menu/' + order.id + '/revert',
        type: "POST",
        success: (res) => {
          this.$alert(res.message);
          this.$router.push({
            "path": "/user"
          });
        },
        error: this.$errorHandler
      });
    },
    parseContent: function(content) {
      return JSON.parse(content);
    },

    formatByString: function(time_string) {
      var tools = new Tools();
      var tm = new Date(time_string);
      return tools.formatDate(tm.getTime());
    },

    getUserOrder: function() {

      $.ajax({
        url: config.domain + '/menu',
        type: "GET",
        success: (res) => {
          var data = res.data;
          if(data.length > 0){
            this.orders = data;
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
    this.getUserOrder();
  }
}
</script>
<style lang="scss">
@import '../assets/scss/main.scss';
.user-order {
  padding: 5px 2%;
  border: dashed 1px $BODY_COLOR;

  .head {
    display: inline-block;
    width: 100%;
    border: dashed 1px black;

    span {
      float: right;
    }
  }

  .detail {
    .info {
      width: 46%;
      padding: 2px 2%;
      float: left;
    }
  }

  .material-icons {
    float: left;
    padding: 5px 2%;
  }

  .content {
    padding: 5px;
    margin-left: 10%;
  }
  .time {
    text-align: right;
    padding: 1px 2%;
    clear: both;
  }
}
</style>

