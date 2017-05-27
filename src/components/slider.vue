<template>
  <div id="slider" class="slider">
    <div class="slider-wrapper" id="slider-wrapper">
      <router-link to="#img" class="slider-link"><img class="slider-img1" src="../assets/images/huodong1.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img2" src="../assets/images/4.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img3" src="../assets/images/huodong1.jpg" /></router-link>
      <router-link to="#img" class="slider-link"><img class="slider-img4 img-copy" src="../assets/images/4.jpg" /></router-link>
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
import Slider from '../libs/slider.js';

export default {
  methods: {
    startSlide: function(){
      var slider = new Slider();
      slider.init();
    }
  },
  mounted () {
    this.startSlide();
  }
}
</script>
