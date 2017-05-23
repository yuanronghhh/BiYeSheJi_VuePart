<template>
  <div class="tnav">
    <div class="bar ltext" v-text="leftText"></div>
    <div class="bar rtext" v-text="rightText"></div>
  </div>
</template>
<script>
export default {
  props: {
    leftText: String,
    rightText: String
  }
}
</script>
<style lang="scss">
$BAR_PADDING: 2%;
.tnav {
  padding: 5px $BAR_PADDING;
  color: black;
  clear: both;
  .rtext {
    position: absolute;
    right: $BAR_PADDING;
  }
  .bar {
    display: inline-block;
    padding: 5px 0%;
  }
}
</style>
