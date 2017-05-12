<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="列表" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">
      <nv-list :filter="true" :items="list_data"></nv-list>
    </div>
  </div>
</template>
<script>
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import nvList from '../components/list.vue';
export default {
  components: {
    nvHead,
    nvList
  },
  data () {
    return {
      list_data: [{
        id: 1,
        title: "[特价]开心麻辣鸡翅",
        profile: "介介绍。。。，需要两行才好看些。。。。。。。。介绍。。。，需要两行才好看些。。。。。。。。绍。。。，需要两行才好看些。。。。。。。。",
        price: "12"
      }]
    }
  },
  mounted () {
  }
};
</script>
