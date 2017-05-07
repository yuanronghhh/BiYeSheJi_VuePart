<template>
  <div class="detail">
    <div class="main-bg"></div>
    <nv-head page-type="详情" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">
      <nv-slider></nv-slider>

      <div class="content block" :item-id="item.id">
        <div class="label">名称: <label class="label detail-name">{{ item.name }}</label></div>
        <div class="label">价格: {{ item.price }}<label class="unit">元/份<label></div>
        <div class="label">描述: <label class="detail-description">{{ item.description }}</label></div>
      </div>

      <div class="btn-block block">
        <button class="btn add-to-menu">添加到菜单</button>
        <button class="btn add-to-collection">添加到收藏</button>
        <button class="btn share">向好友推荐</button>
      </div>

      <nv-bar leftText="用户评价"></nv-bar>
      <template v-for="comment in comments">
        <ul class="comments block" :comment-id="comment.id">
          <li class="comment-user">用户{{ comment.nick_name }}: </li>
          <li class="comment-content">{{ comment.content }}</li>
          <li class="create-at"><label class="label">创建时间:</label>{{ comment.create_at }}</li>
        </ul>
      </template>

      <div class="next-page">下一页</div>

    </div>
  </div>
</template>
<script>
require("../assets/scss/detail.scss");
import nvHead from '../components/header.vue';
import nvSlider from '../components/slider.vue';
import nvBar from '../components/bar.vue';
export default {
  components: {
    nvHead,
    nvSlider,
    nvBar
  },
  methods: {
    getCommentsByItemId: function(id){
      console.log("id getcommments is: ", id);
      return [{
        id: 1,
        nick_name: '就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三',
        content: 'what did you say ?',
        create_at: "2017/02/02"
      }, {
        id: 2,
        nick_name: 'two',
        content: '就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三就独立声卡就大大撒大发发阿三what did you say just now?',
        create_at: "2017-02-03"
      }];
    }
  },
  data () {
    return {
      item: {},
      comments: []
    }
  },
  mounted () {
    this.item = {
      "id": 10,
      "name": "就独立声卡就大大撒大发发阿三",
      "price": 13
    };
    this.id = this.$route.params.id;
    this.comments = this.getCommentsByItemId(this.id);
  }
};
</script>
