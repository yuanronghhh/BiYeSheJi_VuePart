<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="列表" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <div class="filter-wrapper">
        <div class="selection">
          <ul> <span>分类: </span>
            <li v-for="filter in category.filters" @click="getItems(filter, 'filter')" class="filter" v-text="filter"></li>
          </ul>
        </div>

        <div class="selection">
          <ul> <span>排序: </span>
            <li v-for="order of category.orders" @click="getItems(order[Object.keys(order)[0]], 'order')" class="filter" v-text="Object.keys(order)[0]">
          </ul>
        </div>
      </div>

      <nv-list :items="items" :show_add="true"></nv-list>
      <div class="list-bottom"></div>
      <div class="store" >
        <span @click="showAdded()">
          <i class="material-icons shop-icon">shopping_cart</i>
          <i id="key-up" class="material-icons shop-icon" >keyboard_arrow_up</i>
          <div class="label">总价 {{ total }}</div>
        </span>

        <button class="btn pay" @click="addRemark()">结账</button>

        <div class="shop" v-show="show_shop">
          <ul v-for="item in shop">
            <li class="name">{{ item.name }}</li>
            <li class="price">{{ item.price }}</li>
            <li class="delete" @click="deleteFromStore(item)" ><i class="material-icons">remove</i></li>
          </ul>
        </div>
      </div>

      <nv-box holder="添加备注(可为空)" title="添加备注" v-show="show_box"></nv-box>

      <nv-backtop></nv-backtop>
    </div>
  </div>
</template>
<script>
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import nvList from '../components/list.vue';
import nvBacktop from "../components/backtop.vue";
import nvBox from "../components/box.vue";

import config from '../config.js';
import $ from 'webpack-zepto';
import store from '../vuex/user';

export default {
  components: {
    nvBox,
    nvBacktop,
    nvHead,
    nvList
  },
  data () {
    return {
      items: [],
      category: {
        filters: [
          "全部",
          "近期推出",
          "下酒菜",
          "锅仔火锅",
          "美食牛肉",
          "乡里农家菜",
          "厨房推介",
          "风味小炒",
          "汤类",
          "田园时蔬",
          "鱼类",
          "茄子",
          "凉菜",
          "特色菜",
          "甜品世界"
        ],
        orders: [
          {"全部": ""},
          {"价格": "price"},
          {"评论数量": "comment_count"},
          {"更新时间": "update_at"},
          // {"收藏数": "collect_count"},
          {"创建时间": "create_at"}
        ]
      },
      show_shop: false,
      show_box: false,
      form: {
        type: '',
        order: ''
      },
      shop: []
    };
  },
  computed: {
    total: function(){
      var count = 0;
      this.shop.forEach((ele, idx) => {
        count += ele.price;
      });

      return count;
    },
    shop: function() {
      return store.state.shop_info;
    },
    remark: function(){
      return this.box_value;
    }
  },
  methods: {
    showTip: function(){

      $.ajax({
        type: 'POST',
        url: config.domain + "/menu/showtip",
        data: {
          "data": JSON.stringify(this.shop)
        },
        success: (data) => {
          console.log(data);
          if(!data.message) {
            this.$alert("添加成功!");
          } else {
            this.$showTip(data.message);
          }
        },
        error: this.$errorHandler
      });
    },
    cleanData: function(){
      window.sessionStorage.removeItem("shop");
      store.state.shop_info = [];
    },
    addRemark: function() {
      this.show_box = true;
    },

    submit: function () {

      console.log(this);
      $.ajax({
        type: 'POST',
        url: config.domain + "/menu/create",
        data: {
          "remark": this.remark,
          "data": JSON.stringify(this.shop)
        },
        success: (data) => {
          this.$alert(data.message);
          this.cleanData();
          setTimeout(() => {
            this.$router.push({
              path: "/"
            });
          }, config.timeout);
        },
        error: this.$errorHandler
      });
    },

    showAdded: function(){
      if(this.show_shop) {
        this.show_shop = false;
        $("#key-up").html("keyboard_arrow_up");
      } else {
        this.show_shop = true;
        $("#key-up").html("keyboard_arrow_down");
      }
    },

    deleteFromStore: function(item) {
      for(var i = 0; i< this.shop.length; i++) {
        var s = this.shop[i];
        if(s.id === item.id) {
          store.state.shop_info.splice(i, 1);
          break;
        }
      }

      window.sessionStorage.shop = JSON.stringify(store.state.shop_info);
    },
    addToStore: function(item){
      this.showTip();
      this.shop.push(item);
      window.sessionStorage.shop = JSON.stringify(this.shop);
    },
    getItems: function(name, type){

      if(type) {
        if(name === "全部" || name === ''){
          if(this.form["order"].indexOf("DESC") > -1){
            this.form = {
              type: '',
              order: ''
            };
          } else {
            this.form = {
              type: '',
              order: 'create_at DESC'
            };
          }
        } else {
          // 分类
          if(type === 'filter'){
            this.form["type"] = name;
          }

          // 排序
          if(type === 'order') {
            var origin_name = this.form["order"].replace("DESC", "").trim();

            if(!origin_name) {
              origin_name = "create_at"; // 默认为创建时间
            }

            // 是否倒序排序
            if(this.form["order"].indexOf("DESC") > -1){
              this.form["order"] = origin_name;
            } else {
              this.form["order"] += " DESC";
            }

            if(!(origin_name === name)){
              // 默认倒序排
              this.form["order"] = name + " DESC";
            }

          }
        }

      }

      var params = $.param(this.form);
      $.ajax({
        url: config.domain + "/item?" + params,
        type: 'GET',
        success: (data) => {
          if(data.length > 0){
            this.items = data;
          } else {
            this.$alert("没有数据");
          }
        },
        error: this.$errorHandler
      });
    }
  },
  mounted () {
    if(window.sessionStorage.shop) {
      store.dispatch('setShopInfo', JSON.parse(window.sessionStorage.shop));
    }

    $.ajax({
      url: config.domain + '/item',
      type: 'GET',
      success: (data) => {
        if(data.length > 0) {
          this.items = data;
        } else {
          $(".list").html("<div class='show-message'>没有数据</div>");
        }
      },
      error: (xhr, errorType, error) => {
        try {
          var data = JSON.parse(xhr.responseText);
          this.$alert(data.message);
          setTimeout(() => {
            this.$router.push({
              path: '/login'
            });
          }, config.timeout);
        } catch (e) {
          $(".list").html("<div class='show-message'>没有数据</div>");
        }
      }
    });
  }
};
</script>
