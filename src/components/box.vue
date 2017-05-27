<template>
  <div class="box">
    <b><div class="title" v-text="title"></div></b>
    <textarea :placeholder="holder" v-model="value"></textarea>
    <div class="btn" @click="submit()">完成</div>
  </div>
</template>
<script>
import nvBar from '../components/bar.vue';
import $ from 'webpack-zepto';

export default {
  components: {
    nvBar
  },
  data () {
    return {
      value: ''
    };
  },
  methods: {
    submit: function(){
      $(".box").hide();
      this.$parent.box_value = this.value;
      this.$parent.submit();
    }
  },
  props: {
    "title": String,
    "holder": String
  }
}
</script>
<style lang="scss">
.box {
  position: fixed;
  bottom: 35%;
  margin: 0px 10%;
  padding: 20px 5%;
  width: 70%;
  border: dashed 1px black;
  background: white;
  z-index: 20;

  .btn {
    text-align: right;
    width: 30px;
    padding: 5px;
  }

  textarea {
    height: 100px;
    width: 99%;
  }
}
</style>
