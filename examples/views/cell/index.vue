<template>
  <div class="cell">
    <section>
      <h5>默认用法</h5>
      <div class="field">
        <mw-cell title="普通单元格" @click="cellClick"></mw-cell>
        <mw-cell title="动作单元格" arrow @click="cellClick"></mw-cell>
        <mw-cell title="禁用单元格" no-border disabled @click="cellClick"></mw-cell>
      </div>
    </section>
    <section>
      <h5>单行列表</h5>
      <div class="field">
        <mw-cell title="个人设置" arrow @click="cellClick">
          <template slot="left">
            <mw-icon name="settings" size="24"></mw-icon>
          </template>
        </mw-cell>
        <mw-cell title="设为默认地址">
          <template slot="right">
            <mw-switch v-model="switchFlag"></mw-switch>
          </template>
        </mw-cell>
        <mw-cell title="帮助中心" arrow @click="cellClick"></mw-cell>
        <mw-cell title="邀请好友" no-border right-text="已邀请3人"></mw-cell>
      </div>
    </section>
    <section>
      <h5>多行列表</h5>
      <div class="field">
        <mw-cell title="交通银行" right-text="已消费900元" abstract="每日限额10000元">
          <div slot="left" class="logo"></div>
        </mw-cell>
        <mw-cell title="招商银行" right-text="余额4000元" abstract="每日限额30000元">
          <div slot="left" class="logo"></div>
        </mw-cell>
        <mw-cell title="桂林银行" no-border right-text="可用30000元" abstract="每日限额8000元">
          <div slot="left" class="logo"></div>
        </mw-cell>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      switchFlag: true
    };
  },
  methods: {
    cellClick() {
      this.$toast("点击了单元格");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.cell {
  padding: 30px 0;
  section {
    h5 {
      color: rgba(69, 90, 100, 0.6);
      font-size: 30px;
      margin-left: 20px;
    }
    .field {
      padding: 0 30px;
      background: #fff;
      margin: 30px 20px;
    }
    .logo {
      width: 80px;
      height: 80px;
      margin-right: 10px;
      background-color: #e6e6e6;
      border-radius: 50%;
    }
  }
}
</style>
