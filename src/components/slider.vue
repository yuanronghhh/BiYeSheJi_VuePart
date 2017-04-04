<template>
  <div id="slider" class="slider">
    <div class="slider-wrapper">
      <a href="#img" class="slider-link"><img class="slider-img1" src="../assets/images/huodong1.jpg" /></a>
      <a href="#img" class="slider-link"><img class="slider-img2" src="../assets/images/huodong1.jpg" /></a>
      <a href="#img" class="slider-link"><img class="slider-img3" src="../assets/images/huodong1.jpg" /></a>
      <a href="#img" class="slider-link"><img class="slider-img4 img-copy" src="../assets/images/huodong1.jpg" /></a>
    </div>
    <div class="slider-circle-wrapper">
      <div class="slider-circle"></div>
      <div class="slider-circle"></div>
      <div class="slider-circle"></div>
    </div>
  </div>
</template>
<script>
require('../assets/scss/slider.scss');
import Slider from "../libs/slider";

export default {
  data: function () {
    return {};
  },
  mounted: function(){
    var slider = new Slider();
    slider.init();
  }
}
</script>
