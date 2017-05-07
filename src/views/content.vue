<template>
  <div class="content-wrapper">

    <div class="access">
      <router-link to="/activities" class="ac-wrapper">
        <div class="ac-icon ac-one"><i class="material-icons">group</i></div>
        <div class="ac-text">餐厅活动</div>
      </router-link>
      <router-link to="/hot-menu" class="ac-wrapper">
        <div class="ac-icon ac-two"><i class="material-icons" >format_list_bulleted</i></div>
        <div class="ac-text">热门列表</div>
      </router-link>
      <router-link to="/most-stars" class="ac-wrapper">
        <div class="ac-icon ac-three"><i class="material-icons">local_florist</i></div>
        <div class="ac-text">好评如潮</div>
      </router-link>
      <router-link to="/recommend" class="ac-wrapper">
        <div class="ac-icon ac-four"><i class="material-icons">local_dining</i></div>
        <div class="ac-text">餐厅推荐</div>
      </router-link>
    </div>

  </div>
</template>
<script>
require("../assets/scss/content.scss");
export default {
}
</script>
