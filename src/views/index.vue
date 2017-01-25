<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type=""></nv-head>
    <div class="main-body">
      <div class="home">
      </div>
    </div>
  </div>
</template>
<script>
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
export default {
  components: {
    nvHead,
    nvMenu
  },
  method: {
  }
};
</script>
