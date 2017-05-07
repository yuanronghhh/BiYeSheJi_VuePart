<template>
  <div>
    <div class="main-bg"></div>
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
          <router-link to="/hot-menu" class="ac-wrapper">
            <div class="ac-icon ac-two"><i class="material-icons" >format_list_bulleted</i></div>
            <div class="ac-text">热门列表</div>
          </router-link>
          <router-link to="/most-stars" class="ac-wrapper">
            <div class="ac-icon ac-three"><i class="material-icons">local_florist</i></div>
            <div class="ac-text">好评如潮</div>
          </router-link>
          <router-link to="/recommend" class="ac-wrapper">
            <div class="ac-icon ac-four"><i class="material-icons">local_dining</i></div>
            <div class="ac-text">餐厅推荐</div>
          </router-link>
        </div>

      </div>

      <div class="content-wrapper">

        <div class="access">
          <router-link to="/user/collection" class="ac-wrapper">
            <div class="ac-icon ac-four"><i class="material-icons">star</i></div>
            <div class="ac-text">我的收藏</div>
          </router-link>
          <router-link to="/user/message" class="ac-wrapper">
            <div class="ac-icon ac-three"><i class="material-icons">message</i></div>
            <div class="ac-text">我的消息</div>
          </router-link>
          <router-link to="/user/history" class="ac-wrapper">
            <div class="ac-icon ac-one"><i class="material-icons">history</i></div>
            <div class="ac-text">历史列表</div>
          </router-link>
          <router-link :to="{ name: 'user', params: { login_name: 'login_name' }}" class="ac-wrapper">
            <div class="ac-icon ac-five"><i class="material-icons">person</i></div>
            <div class="ac-text">个人中心</div>
          </router-link>
        </div>

      </div>


      <nv-bar left-text="猜你喜欢" right-text='"懂你"' ></nv-bar>
        <nv-list :items="guessLike"></nv-list>
      <nv-bar left-text="近期操作" right-text='"记录"' ></nv-bar>
        <nv-card></nv-card>

    </div>
  </div>
</template>
<script>
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
import nvSlider from '../components/slider.vue';
import nvContent from './content.vue';
import nvCard from '../components/card.vue';
import nvList from '../components/list.vue';
import nvBar from '../components/bar.vue';
var guessLike = [{
  id: 1,
  title: "[特价]麻辣鸡翅",
  profile: "介绍。。。，需要两行才好看些。。。。。。。。",
  price: "12"
}, {
  id: 2,
  title: "[特价]麻辣鸡翅",
  profile: "介绍。。。，需要两行才好看些。。。。。。。。",
  price: "12"
}];

export default {
  components: {
    nvHead,
    nvMenu,
    nvSlider,
    nvContent,
    nvList,
    nvBar,
    nvCard
  },
  data () {
    return {
      guessLike: guessLike
    }
  }
};
</script>
