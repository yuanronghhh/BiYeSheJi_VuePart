<template>
  <div>
    <nv-head page-type="用户中心"></nv-head>
    <div class="main-body">
      <router-link to="/my-order">my-order</router-link>
      <router-link to="/collection">collection</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/signout">signout</router-link>
      <router-link to="/update-info">update-info</router-link>
      <router-link to="/signup">signup</router-link>
    </div>
  </div>
</template>
<script>
import nvHead from '../components/header.vue';
export default {
  components: {
    nvHead
  }
};
</script>
