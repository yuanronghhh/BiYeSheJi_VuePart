<template>
  <div class="home">
    <nv-head page-type="易单" left_icon="menu" right_icon="search"></nv-head>
    <div class="main-body">

      <nv-slider></nv-slider>
      <nv-bar left-text="美食直达" right-text='"等你来吃"' ></nv-bar>

      <div class="content-wrapper">

        <div class="access">
          <router-link to="/activities" class="ac-wrapper">
            <div class="ac-icon ac-one"><i class="material-icons">group</i></div>
            <div class="ac-text">餐厅活动</div>
          </router-link>
          <router-link to="/items" class="ac-wrapper">
            <div class="ac-icon ac-two"><i class="material-icons" >format_list_bulleted</i></div>
            <div class="ac-text">餐厅菜单</div>
          </router-link>
          <router-link to="/most-stars" class="ac-wrapper">
            <div class="ac-icon ac-three"><i class="material-icons">local_florist</i></div>
            <div class="ac-text">好评如潮</div>
          </router-link>
        </div>


        <div class="access block">
          <router-link to="/user/comment" class="ac-wrapper">
            <div class="ac-icon ac-three"><i class="material-icons">message</i></div>
            <div class="ac-text">我的评论</div>
          </router-link>
          <!-- <router-link to="/user/history" class="ac-wrapper">
            <div class="ac-icon ac-one"><i class="material-icons">history</i></div>
            <div class="ac-text">历史列表</div>
          </router-link> -->
          <router-link to="/user" class="ac-wrapper">
            <div class="ac-icon ac-five"><i class="material-icons">person</i></div>
            <div class="ac-text">个人中心</div>
          </router-link>
        </div>

      </div>



      <nv-bar left-text="猜你喜欢" right-text='"懂你"' ></nv-bar>
      <nv-list :items="guessLike"></nv-list>
      <!-- <nv-bar left-text="近期操作" right-text='"记录"' ></nv-bar> -->
      <!-- <nv-card></nv-card> -->
    </div>

    <div class="bg"></div>
  </div>
</template>
<script>
import $ from "webpack-zepto";
import config from '../config.js';
import nvHead from '../components/header.vue';
import nvSlider from '../components/slider.vue';
import nvContent from './content.vue';
import nvCard from '../components/card.vue';
import nvList from '../components/list.vue';
import nvBar from '../components/bar.vue';

export default {
  components: {
    nvHead,
    nvSlider,
    nvContent,
    nvList,
    nvBar,
    nvCard
  },
  data () {
    return {
      guessLike: []
    };
  },
  methods: {
    getGuessLike: function() {
      $.ajax({
        type: "GET",
        url: config.domain + "/item/getguesslike",
        success: (data, status, xhr) => {
          this.guessLike = data;
        },
        error: (xhr, errorType, error) => {
          this.guessLike = [{
            id: 1,
            profile: 'dsla',
            title: "djslkadj",
            price: 12
          }];
        }
      });
    },
    hideBackground: function(){
      $(".show-side").removeClass("show-side");
      $(".show-edit").removeClass("show-side");
      $(".bg").hide();
    }
  },
  mounted () {
    $(".bg").off().on("click", () => {
      this.hideBackground();
    });
    this.getGuessLike();
  }
};
</script>
