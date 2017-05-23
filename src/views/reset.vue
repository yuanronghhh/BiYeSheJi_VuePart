<template>
  <div>
    <div class="main-bg"></div>
    <nv-head page-type="重置密码" left_icon="keyboard_arrow_left" right_icon="n"></nv-head>

    <div class="main-body">
      <div class="block reset-page">

        <div class="input-group">
          <a><i class="large material-icons form-label">perm_contact_calendar</i></a>
          <input class="account input-control" 
                 id="account" 
                 v-model="rest_form.email"
                 placeholder="邮箱" 
                 type="text" />
        </div>

        <button class="btn submit reset" @click="resetPass()">重置</button>
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
      rest_form: {}
    }
  },
  methods: {
    resetPass: function(){
      let form = new Form();
      form.validateData(['email'], this.rest_form);
      if(!form.is_valid){
        this.$alert(form.error.message);
        $('#' + form.error.key).focus();
        return;
      }

      $.ajax({
        type: "POST",
        url: config.domain + '/resetpass',
        data: this.rest_form,
        success: (data) => {
          this.$alert(data.message);
          this.$router.push({
            path: '/login'
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
.reset-page {
  padding: 0 5%;
  margin: 10px 5%;
}
</style>
