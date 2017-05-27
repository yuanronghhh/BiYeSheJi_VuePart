<template>
  <div class="admin">
    <nv-head left_icon="home" pageType="管理"></nv-head>
    <div class="main-body">
      <div class="admin-nav">
        <div class="nav">
          <router-link to="/admin/user">用户管理</router-link>
        </div>
        <div class="nav">
          <router-link to="/admin/comment">评论管理</router-link>
        </div>
        <div class="nav">
          <router-link to="/admin/order">订单管理</router-link>
        </div>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import nvHead from '../components/header.vue';

export default {
  components: {
    nvHead
  },
  mounted () {
    this.$router.push({
      "path": '/admin/user'
    });
  }
}
</script>
<style lang="scss">
.admin {
  .admin-nav {
    text-align: center;
    margin: 0px 0% 10px 0%;
  }

  .nav {
    display: inline-block;
    margin: 20px 2%;
    padding: 10px 2%;
    background: rgb(251, 251, 251);
  }
}
</style>
