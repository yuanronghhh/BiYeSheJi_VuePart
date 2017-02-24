<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="易单"></nv-head>
    <div class="main-body">
      <nv-slider></nv-slider>

      <div class="block tnav">
        <span class="ltext">美食直达</span>
        <span class="rtext">"等你来吃"</span>
      </div>
      <nv-block></nv-block>
      <div class="block tnav">
        <span class="ltext">猜你喜欢</span>
        <span class="rtext">"懂你"</span>
      </div>
      <div class="block tnav">
        <span class="ltext">近期操作</span>
        <span class="rtext">"点滴分享"</span>
      </div>

    </div>
  </div>
</template>
<script>
require('../assets/scss/main.scss');
require('../assets/scss/bar.scss');
import nvHead from '../components/header.vue';
import nvMenu from '../components/menu.vue';
import nvSlider from '../components/slider.vue';
import nvBlock from '../components/content_block.vue';
export default {
  components: {
    nvHead,
    nvMenu,
    nvSlider,
    nvBlock
  }
};
</script>
