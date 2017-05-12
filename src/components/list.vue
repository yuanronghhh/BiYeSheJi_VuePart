<template>
  <div class="list">

    <div class="filter-wrapper" v-if="filter">
      <div class="selection">
        <label for="">分类: </label>
        <template v-for="filter in filters">
          <router-link :to="getFilterLink(filter)" class="filter" v-text="filter"></router-link>
        </template>
      </div>

      <div class="selection">
        <label for="">排序: </label>
        <template v-for="sort in sorts">
          <router-link :to="getSortLink(sort)" class="filter" v-text="sort"></router-link>
        </template>
      </div>
    </div>

    <template v-for="item in items">
      <router-link :to="{ name:'detail', params: { id: item.id } }" class="inner">
        <div class="img left"><img src="../assets/images/slider_01.png" alt=""></div>
        <div class="right">
          <div class="title" v-text="item.title"></div>
          <div class="description" v-text="item.profile"></div>
          <div class="price"><label>价格:</label><span v-text="item.price"></span>元/份</div>
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
  data () {
    return {
      filters: [
        "全部",
        "炒菜",
        "饮品",
        "自助餐",
        "西餐",
        "汤类",
        "火锅",
        "水果",
        "甜点"
      ],
      sorts: [
        "全部",
        "价格",
        "销售量",
        "点击率",
        "评论数",
        "收藏数"
      ]
    }
  },
  methods: {
    getHref: function(item){
      return "/" + item.title;
    },
    getFilterLink: function(filter) {
      return "#/classify/" + filter;
    },
    getSortLink: function(sort) {
      return "#/sort/" + sort;
    }
  },
  mounted () {
  }
}
</script>
