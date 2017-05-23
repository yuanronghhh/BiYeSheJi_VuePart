<template>
  <div>
    <div class="main-bg"></div>
    <nv-head :page-type="title" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <div class="order" v-if="show-order">
        <nv-order :items="items"></nv-order>
      </div>

      <nv-backtop></nv-backtop>
    </div>
  </div>
</template>
<script>
import nvBacktop from "../components/backtop.vue";
import nvHead from '../components/header.vue';
import nvOrder from '../components/order.vue';

import config from '../config.js';
import $ from 'webpack-zepto';

export default {
  components: {
    nvHead,
    nvOrder,
    nvBacktop
  },
  methods: {

    getInfo: (url, method) => {
      $.ajax({
        url: config.domain + '/menu',
        type: method,
        success: (res) => {
          this.items = res.data;
        },
        error: this.$errorHandler
      });
    }
  },
  data () {
    return {
      items: []
    };
  },
  mounted () {
  }
}

</script>
