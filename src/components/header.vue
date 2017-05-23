<template>
  <div>
    <div class="block header" v-show="!search_input">
      <div class="material-icons 
                  header-left
                  header-icon" 
           v-text="left_icon"
           @click="leftClick($event)">menu
      </div>

      <div class="title" v-text="pageType"></div>

      <a href="#">
        <div class="header-right 
                    material-icons
                    header-icon"
                    v-text="right_icon"
                    @click="rightClick($event)">search</div>
      </a>

    </div>

    <div class="search header block" v-show="search_input">
      <a href="#cancel"><i class="material-icons header-icon" @click="cancelSearch()">cancel</i></a>
      <input class="input-control" type="text" v-model="search_words" @keyup.enter="postSearch()"/>
      <div class="header-right material-icons header-icon" @click="postSearch()">search</div>
    </div>

    <nv-side :nick-name="nick_name"
             :user-image="user_image">
    </nv-side>
  </div>
</template>
<script>
require('../assets/scss/header.scss');
require('../assets/scss/icon.scss');
import nvSide from '../components/side.vue';

export default {
  replace: true,
  props: {
    pageType: String,
    left_icon: String,
    right_icon: String
  },
  methods: {
    leftClick: function(evt){
      if(evt.target.innerText === "keyboard_arrow_left") {
        return window.history.back();
      }
      if(evt.target.innerText === 'menu'){
        return this.showMenu();
      }

      window.location.href = '/';
    },
    rightClick: function(evt) {
      if(evt.target.innerText === "search") {
        this.showSearchaBar();
      }

      if(evt.target.innerText === "save") {
        this.$parent.updateInfo();
      }
    },
    showMenu () {
      this.$children[0].showSide();
      this.cleanInput();
    },
    showSearchaBar() {
      this.search_input = true;
      this.cleanInput();
    },
    cancelSearch () {
      this.search_input = false;
      this.cleanInput();
    },
    cleanInput () {
      this.$data.search_words = "";
    },
    postSearch (value) {
      var data = value || this.search_words;
      this.$router.push({
        path: '/search/' + data
      });
      this.cancelSearch();
      this.cleanInput();
    }
  },
  data () {
    return {
      search_input: false,
      search_words: '',
      nick_name: '',
      user_image: ''
    };
  },
  components: {
    nvSide
  }
};
</script>
