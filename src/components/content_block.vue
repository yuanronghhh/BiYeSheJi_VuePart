<template>
  <div class="content-wrapper">
    <div class="access">
      <div class="ac-wrapper">
        <div class="ac-icon ac-one"><i class="material-icons">group</i></div>
        <div class="ac-text">商家活动</div>
      </div>
      <div class="ac-wrapper">
        <div class="ac-icon ac-two"><i class="material-icons">format_list_bulleted</i></div>
        <div class="ac-text">热门菜单</div>
      </div>
      <div class="ac-wrapper">
        <div class="ac-icon ac-three"><i class="material-icons">local_florist</i></div>
        <div class="ac-text">好评如潮</div>
      </div>
      <div class="ac-wrapper">
        <div class="ac-icon ac-four"><i class="material-icons">local_dining</i></div>
        <div class="ac-text">精品推荐</div>
      </div>
    </div>
  </div>
</template>
<script>
require("../assets/scss/content_block.scss");
export default {
  props: {
    blockText: String
  }
}
</script>
