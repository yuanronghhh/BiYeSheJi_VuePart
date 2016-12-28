<template>
  <div>
    <div class="header">
      <router-link to="/" class="large 
                     material-icons
                     header-icon">navigate_before
      </router-link>
      <span class="title" v-text="pageType"></span>
      <a href="#more"><span class="large material-icons header-icon">n</span></a>
    </div>
  </div>
</template>
<script>
require('../assets/scss/header.scss');
require('../assets/scss/icon.scss');
export default {
  replace: true,
  props: {
    pageType: String
  }
};
</script>
