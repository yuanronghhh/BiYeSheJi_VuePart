<template>
  <div class="order">
    <template v-for="item in items">
      <div class="collection">
        订单号:{{ item.id }}
        状态:{{ item.status }}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  },
  computed: {
  },
  methods: {
    getContent: function(item){
      return JSON.parse(item.content);
    }
  }
}
</script>

<style lang="scss">
.order {
  padding: 10px  5%;
  .collection {
    padding: 10px  1%;
  }
}
</style>
