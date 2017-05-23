<template>
  <div class="loading" v-if="loading">
    Loading...
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: true
    }
  }
}
</script>
<style>
.loading {
  position: fixed;
  width: 100%;
  text-align: center;
  background: #f5f5f5;
  padding: 10px 0%;
}
</style>
