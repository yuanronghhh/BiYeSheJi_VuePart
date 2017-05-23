<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="修改密码" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>

    <div class="main-body">
      <div class="block updatepass-page">

        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="account input-control" 
                 id="account" 
                 v-model="updatepass_form.old_pass"
                 placeholder="旧密码" 
                 type="password" />
        </div>

        <div class="input-group">
          <a><i class="large material-icons form-label">lock</i></a>
          <input class="account input-control" 
                 id="account" 
                 v-model="updatepass_form.new_pass"
                 placeholder="新密码" 
                 type="password" />
        </div>

        <button class="btn submit updatepass" @click="updatePass()">修改</button>
      </div>
    </div>

  </div>
</template>
<script>
require('../assets/scss/main.scss');
import nvHead from '../components/header.vue';
import $ from 'webpack-zepto';
import config from '../config.js';
import Form from '../libs/forms.js';

export default {
  data () {
    return {
      updatepass_form: {}
    }
  },
  methods: {
    updatePass: function(){
      let form = new Form();
      form.validateData(['new_pass', 'old_pass'], this.updatepass_form);
      if(!form.is_valid){
        this.$alert(form.error.message);
        $('#' + form.error.key).focus();
        return;
      }

      $.ajax({
        type: "POST",
        url: config.domain + '/updatePass',
        data: this.updatepass_form,
        success: (data) => {
          this.$alert(data.message);
          this.$router.push({
            path: '/user'
          });
        },
        error: this.$errorHandler
      });
    }
  },
  components: {
    nvHead
  },
  mounted () {
  }
};
</script>
<style lang="scss">
.updatepass-page {
  margin: 10px 5%;
  padding: 0px 5%;
}
</style>
