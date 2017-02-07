<template>
  <div>
    <div class="header" v-show="!search_input">
      <div class="material-icons 
                  header-left
                  header-icon" 
           @click="showMenu()">menu
      </div>
      <div class="title" v-text="pageType"></div>
      <a href="#search">
        <div class="header-right material-icons header-icon" @click="showSearch()">search</div>
      </a>
    </div>

    <div class="search header" v-show="search_input">
      <a href="#cancel"><i class="material-icons header-icon" @click="cancelSearch()">cancel</i></a>
      <input class="input-control" type="text" v-model="search_keywords" @keyup.enter="postSearch()"/>
      <a href="#postSearch">
        <div class="header-right material-icons header-icon" @click="postSearch()">search</div>
      </a>
    </div>

    <nv-side v-show="show"
             :nick-name="nick_name"
             :user-image="user_image">
    </nv-side>
  </div>
</template>
<script>
require('../assets/scss/header.scss');
require('../assets/scss/icon.scss');
import $ from 'webpack-zepto';
import nvSide from '../components/side.vue';

export default {
  replace: true,
  props: {
    pageType: String,
    rightIcon: String
  },
  methods: {
    showMenu () {
      this.show = !this.show;
    },
    showSearch () {
      this.search_input = true;
    },
    cancelSearch () {
      this.search_input = false;
    },
    postSearch () {
      $.ajax({
        type: 'POST',
        url: '/search',
        dataType: 'json',
        data: {
          "search_words": this.search_keywords
        },
        success: function (data, status, xhr) {
          console.log(data);
        },
        error: function (xhr, errorType, error) {
          console.log(error);
        }
      });
      this.cancelSearch();
    }
  },
  data () {
    return {
      search_input: false,
      search_keywords: '',
      show: false,
      nick_name: '',
      user_image: ''
    };
  },
  components: {
    nvSide
  }
};
</script>
