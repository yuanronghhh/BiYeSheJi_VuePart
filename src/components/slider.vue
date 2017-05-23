<template>
  <div id="slider" class="slider">
    <div class="slider-wrapper" id="slider-wrapper">
      <router-link to="#img" class="slider-link"><img class="slider-img1" src="../assets/images/huodong1.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img2" src="../assets/images/huodong1.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img3" src="../assets/images/huodong1.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img4 img-copy" src="../assets/images/huodong1.jpg" /></router-link>
    </div>

    <!-- <div class="slider-circle-wrapper">
      <div class="slider-circle"></div>
      <div class="slider-circle"></div>
      <div class="slider-circle"></div>
    </div> -->

  </div>
</template>
<script>
require('../assets/scss/slider.scss');

export default {
  data: function () {
    return {};
  },
  mounted: function(){
  }
}
</script>
