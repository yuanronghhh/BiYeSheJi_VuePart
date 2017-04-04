<template>
  <div class="content-wrapper block">
    <div class="access">
      <a href="#shangjiahuodong" class="ac-wrapper">
        <div class="ac-icon ac-one"><i class="material-icons">group</i></div>
        <div class="ac-text">餐厅活动</div>
      </a>
      <a href="#remencaidan" class="ac-wrapper">
        <div class="ac-icon ac-two"><i class="material-icons">format_list_bulleted</i></div>
        <div class="ac-text">热门菜单</div>
      </a>
      <a href="#haopingruchao" class="ac-wrapper">
        <div class="ac-icon ac-three"><i class="material-icons">local_florist</i></div>
        <div class="ac-text">好评如潮</div>
      </a>
      <a href="#jingpintuijian" class="ac-wrapper">
        <div class="ac-icon ac-four"><i class="material-icons">local_dining</i></div>
        <div class="ac-text">精品推荐</div>
      </a>
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
