<template>
  <div class="detail">
    <nv-head page-type="详情" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">
      <nv-slider></nv-slider>

      <div class="content block" :item-id="item.id">
        <div class="label">名称: <label class="label name">{{ item.name }}</label></div>
        <div class="label">价格: {{ item.price }}<label class="unit">元/份<label></div>
        <div class="label">关键字: <label class="keywords">{{ item.keywords }}</label></div>
        <div class="label">描述: <div class="description">{{ item.description }}</div></div>
      </div>

      <div class="btn-block block">
        <button class="btn add-to-menu" @click="addToStore(item)">添加到菜单</button>
        <button class="btn share">向好友推荐</button>
      </div>

      <nv-comment :comments="comments"></nv-comment>
    </div>
  </div>
</template>
<script>
require("../assets/scss/detail.scss");
import $ from "webpack-zepto";
import config from '../config.js';
import Tools from '../libs/tools.js';
import store from '../vuex/user.js';

import nvHead from '../components/header.vue';
import nvSlider from '../components/slider.vue';
import nvComment from '../components/comment.vue';

export default {
  components: {
    nvHead,
    nvSlider,
    nvComment
  },
  methods: {
    addToStore: function(item){
      try {
        var shop = store.state.shop_info;
        shop.push(item);
        window.sessionStorage.shop = JSON.stringify(shop);
      } catch(e) {
        console(e);
      }
      this.$alert("添加成功");
    },
    getCommentsByItemId: function(id){

      $.ajax({
        url: config.domain + "/comment",
        type: 'POST',
        data: {
          "item_id": id
        },
        success: (res) => {
          console.log(res);
          var data = res.data;
          var tools = new Tools();

          for(var i = 0; i< data.length; i++) {
            var tm = new Date(data[i].create_at);
            data[i].create_at = tools.formatDate(tm.getTime());
          }

          this.comments = data;
        },
        error: this.$errorHandler
      });
    },
    getItemById: function(id) {

      $.ajax({
        url: config.domain + "/item/" + id + "/detail",
        type: 'GET',
        success: (res) => {
          this.item = res.data;
        },
        error: this.$errorHandler
      });
    }
  },
  data () {
    return {
      item: {},
      comments: []
    }
  },
  mounted () {
    var id = this.$route.params.id;
    this.getItemById(id);
    this.getCommentsByItemId(id);
  }
};
</script>
