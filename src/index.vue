<template lang="pug">
  .index
    span {{foo}}
    img(src="@/assets/empty-avatar.png")
</template>

<style scoped lang="stylus">
  .index
    color black
</style>

<script lang="ts">
  import Vue from 'vue'


  export default Vue.extend({
    data() {
      return {
        foo: 'foo'
      }
    }
  })
</script>
