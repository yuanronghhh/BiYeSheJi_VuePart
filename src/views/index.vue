<template>
  <div>

    <nv-head page-type="主页"></nv-head>
    <div class="main-body">
      <router-link to="/login">login</router-link>
      <nv-home></nv-home>
      <nv-menu></nv-menu>
    </div>

  </div>
</template>
<script>
require('../assets/scss/main.scss');
import nvHome from '../components/home.vue';
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
export default {
  components: {
    nvHome,
    nvHead,
    nvMenu
  }
};
</script>
