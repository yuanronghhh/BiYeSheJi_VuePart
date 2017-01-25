<template>
  <div class="content-wrapper">
    <div class="content-block">
      <a href=""><img class="block-img" src="../assets/images/slider_01.png" /></a>
      <a href=""><div class="block-text" v-text="blockText"></div></a>
    </div>
    <div class="content-block">
      <a href=""><img class="block-img" src="../assets/images/slider_01.png" /></a>
      <a href=""><div class="block-text" v-text="blockText"></div></a>
    </div>
  </div>
</template>
<script>
require("../assets/scss/content_block.scss");
export default {
  props: {
    blockText: String
  }
}
</script>
