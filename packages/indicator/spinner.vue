<template>
  <div class="mw-indicator--spinner">
    <mw-icon name="spinner" :svg="true" :size="size"></mw-icon>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-spinner",
  props: {
    size: {
      type: [Number, String],
      default: 30
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
