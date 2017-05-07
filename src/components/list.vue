<template>
  <div class="list">

    <div class="filter-wrapper" v-if="filter">
      <span class="filter latest">最新</span>
      <span class="filter hot">最热</span>
      <span class="filter subtantial">最实惠</span>
      <span class="filter half-price">半价</span>
      <span class="filter most-comment">评论数量</span>
    </div>

    <template v-for="item in items">
      <router-link :to="{ name:'detail', params: { id: item.id } }" class="inner">
        <div class="img left"><img src="../assets/images/slider_01.png" alt=""></div>
        <div class="right">
          <div class="title" v-text="item.title"></div>
          <div class="profile" v-text="item.profile"></div>
          价格: <span class="price" v-text="item.price"></span><span>元/份</span>
        </div>
      </router-link>
    </template>

    <div class="list-bg"></div>

  </div>
</template>
<script>
require("../assets/scss/list.scss");
export default {
  props: {
    filter: Boolean,
    items: Array
  },
  methods: {
    getHref: function(item){
      return "/" + item.title;
    }
  }
}
</script>
