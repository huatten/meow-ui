<template>
  <div class="demo-switch">
    <div class="mw-field">
      <mw-cell title="基础开关" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose"></mw-switch>
        </div>
      </mw-cell>
      <mw-cell title="禁用开关关闭状态" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose" disabled></mw-switch>
        </div>
      </mw-cell>
      <mw-cell title="禁用开关打开状态" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose" disabled></mw-switch>
        </div>
      </mw-cell>
      <mw-cell title="不同状态下的加载状态" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose" loading></mw-switch>
        </div>
      </mw-cell>
      <mw-cell title="自定义开关大小" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose" size="24"></mw-switch>
        </div>
      </mw-cell>
      <mw-cell title="自定义开关颜色" >
        <div slot="right" class="right">
          <mw-switch v-model="isClose" size="24" background="#3483ff" loading></mw-switch>
        </div>
      </mw-cell>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isClose: false
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  padding: 0 15px;
  background: #fff;
}
</style>