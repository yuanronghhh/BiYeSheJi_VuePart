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
  width: 96%;
  color: black;
  display: inline-block;
  background: #F5F5F5;
  .rtext {
    font-family: "方正姚体";
    float: right;
  }
}
</style>
