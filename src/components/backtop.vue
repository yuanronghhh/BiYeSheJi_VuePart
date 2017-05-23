<template>
  <div class="backtop" v-if="show">
    <div class="material-icons up"
         @click="backTop()">keyboard_capslock
    </div>
  </div>
</template>
<script>
import $ from "webpack-zepto";

export default {
  data () {
    return {
      show: true
    };
  },
  methods: {
    backTop: function(){
      $(window).scrollTop(0);
    },
    showBar: function(){
    }
  },
  mounted () {
    // $(".main-body").scroll(function(){
    //   console.log(this);
    //   var viewH = this.height;
    //   var contentH = this.get(0).scrollHeight;
    //   var scrollTop = this.scrollTop();
    //   if(scrollTop / (contentH-viewH) >= 0.95) {
    //   }
    // });
  }
}

</script>
<style lang="scss">
.backtop {
  position: fixed;
  z-index: 0;
  right: 20px;
  bottom: 50px;
    .up {
      font-size: 30px;
      background: #e4e4e4;
      color: white;
      padding: 0%;
    }
}
</style>
