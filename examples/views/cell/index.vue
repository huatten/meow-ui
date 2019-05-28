<template>
  <div class="demo-cell">
    <div class="mw-field">
      <mw-cell title="普通单元格" @click="cellClick"></mw-cell>
      <mw-cell title="动作单元格" arrow @click="cellClick"></mw-cell>
      <mw-cell title="禁用单元格" disabled @click="cellClick"></mw-cell>
      <mw-cell title="设置" arrow @click="cellClick">
        <div slot="left" class="left">
          <mw-icon name="settings" size="40"></mw-icon>
        </div>
      </mw-cell>
      <mw-cell title="性别" arrow right-text="女" @click="cellClick">
        <div slot="left" class="left">
          <mw-icon name="information" size="40"></mw-icon>
        </div>
      </mw-cell>
      <mw-cell
        title="交通银行"
        arrow
        no-border
        right-text="余额"
        abstract="每日限额10000元"
        @click="cellClick"
      >
        <div slot="left" class="left">
          <mw-icon name="problem" size="40"></mw-icon>
        </div>
      </mw-cell>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods: {
    cellClick() {
      console.log("点击了单元格");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  padding: 0 15px;
  background: #fff;
  margin: 10px;
}
.left {
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>