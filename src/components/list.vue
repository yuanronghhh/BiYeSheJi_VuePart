<template>
  <div class="list">

    <template v-for="item in items">
      <div class="collection">

        <router-link :to="{ name:'detail', params: { id: item.id } }" class="inner">
          <div class="img left"><img src="../assets/images/slider_01.png" alt=""></div>

          <div class="right">
            <div class="name" v-text="item.name"></div>
            <div class="profile" v-text="item.profile"></div>
            <div class="profile" v-text="item.comment_count"></div>
            <div class="price">
              <label class="type" v-text="item.type"></label>
              <label>价格:</label><span v-text="item.price">
              </span>元/份
            </div>
          </div>
        </router-link>

        <div class="add-to-store" v-if="show_add" @click="addToStore(item)">
          <i class="material-icons">add</i>
        </div>

      </div>
    </template>
  </div>
</template>
<script>
require("../assets/scss/list.scss");

export default {
  props: {
    items: Array,
    show_add: Boolean
  },
  data () {
    return {
    };
  },
  methods: {
    addToStore: function(item){
      this.$parent.addToStore(item);
    },
    getHref: function(item){
      return "/" + item.title;
    }
  }
}
</script>
