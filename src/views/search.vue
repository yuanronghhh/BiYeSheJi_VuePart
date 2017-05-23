<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="搜索结果" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>
    <div class="main-body">

      <nv-loading></nv-loading>
      <nv-list :items="items"></nv-list>
      <nv-backtop></nv-backtop>

    </div>
  </div>
</template>

<script>
import $ from 'webpack-zepto';
import config from '../config.js';
import nvList from '../components/list.vue';
import nvHead from '../components/header.vue';
import nvBacktop from '../components/backtop.vue';
import nvLoading from '../components/loading.vue';

export default {
  data () {
    return {
      items: []
    };
  },
  methods: {
    postSearch (search_words) {
      $.ajax({
        type: 'POST',
        url: config.domain + '/search',
        data: {
          "search_words": search_words
        },
        success: (data, status, xhr) => {
          if(data.length > 0) {
            this.$children[1].loading = false;
            this.items = data;
          } else {
            setTimeout(() => {
              $(".loading").html("无搜索结果");
            }, config.timeout);
          }
        },
        error: (xhr) => {
          var data = JSON.parse(xhr.responseText);
          setTimeout(() => {
            this.$children[1].loading = false;
            this.$alert(data.message);
          }, config.timeout);
        }
      });
    }
  },
  components: {
    nvLoading,
    nvList,
    nvHead,
    nvBacktop
  },
  mounted () {
    var data = this.$route.params.search_words;
    this.postSearch(data);
  }
}
</script>
<style lang="scss">

</style>
