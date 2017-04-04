<template>
  <div class="bar">
    <span v-text="barLeftText"></span>
    <div class="text-right" v-text="barRightText"></div>
  </div>
</template>
<script>
require('../assets/scss/bar.scss');
export default {
  replace: true,
  props: {
    barLeftText: String,
    barRightText: String
  }
}
</script>
