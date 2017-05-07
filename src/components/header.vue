<template>
  <div>
    <div class="block header" v-show="!search_input">
      <div class="material-icons 
                  header-left
                  header-icon" 
           v-text="left_icon"
           @click="left_click($event)">menu
      </div>

      <div class="title" v-text="pageType"></div>

      <a href="#search">
        <div class="header-right 
                    material-icons
                    header-icon"
                    v-text="right_icon"
                    @click="showSearch()">search</div>
      </a>

    </div>

    <div class="search header block" v-show="search_input">
      <a href="#cancel"><i class="material-icons header-icon" @click="cancelSearch()">cancel</i></a>
      <input class="input-control" type="text" @blur="cancelSearch()" v-model="search_keywords" @keyup.enter="postSearch()"/>
      <a href="#postSearch">
        <div class="header-right material-icons header-icon" @click="postSearch()">search</div>
      </a>
    </div>

    <nv-side :nick-name="nick_name"
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
    left_icon: String,
    right_icon: String
  },
  methods: {
    left_click: function(ele){
      if(ele.target.innerText === "keyboard_arrow_left") {
        window.history.back();
      } else {
        this.showMenu();
      }
    },
    showMenu () {
      this.$children[0].showSide();
      this.cleanInput();
    },
    showSearch () {
      this.search_input = true;
      this.cleanInput();
    },
    cancelSearch () {
      this.search_input = false;
      this.cleanInput();
    },
    cleanInput () {
      this.$data.search_keywords = "";
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
      this.cleanInput();
    }
  },
  data () {
    return {
      search_input: false,
      search_keywords: '',
      nick_name: '',
      user_image: ''
    };
  },
  components: {
    nvSide
  }
};
</script>
