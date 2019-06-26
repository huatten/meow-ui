<template>
  <div class="demo-slider">
    <div class="mw-field">
      <mw-slider v-model="value1"></mw-slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      value1: 30
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  margin: 20px 15px;
}
</style>