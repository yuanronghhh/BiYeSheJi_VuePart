<template>
  <div class="tnav">
    <span class="ltext" v-text="leftText"></span>
    <span class="rtext" v-text="rightText"></span>
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
.tnav {
  padding: 10px 2%;
  margin: 0px 0px;
  width: 95.5%;
  color: black;
  display: inline-block;
  background: white;
  border: solid 1px #ececec;
  .rtext {
    float: right;
  }
}
</style>
