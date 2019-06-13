<template>
  <div>
    <div class="mw-field">
      <mw-button type="info" :inline="false" @click="notify('default', 1000)">默认通知栏</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="primary" :inline="false" @click="notify('success', 2000)">成功通知栏</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="danger" :inline="false" @click="notify('failed', 3000)">失败通知栏</mw-button>
    </div>
    <div class="mw-field">
      <mw-button type="warning" :inline="false" @click="notify('warning', 4000)">警告通知栏</mw-button>
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
    notify(type, duration) {
      this.$notify('通知栏',{type: type, duration: duration, callback(){console.log(type + "回掉函数")}})
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  margin: 10px;
}
</style>