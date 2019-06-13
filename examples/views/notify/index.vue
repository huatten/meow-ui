<template>
  <div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="clickPop()">通知栏</mw-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      bShow: {}
    };
  },
  methods: {
    clickPop() {
      console.log('111')
      this.$notify('通知栏')
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  margin: 10px;
}
</style>