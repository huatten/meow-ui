<template>
  <div class="stepper">
    <section>
      <div class="field">
        <mw-cell title="基础用法">
          <div class="block" slot="right">
            <mw-stepper v-model="num1"></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="只读状态">
          <div class="block" slot="right">
            <mw-stepper v-model="num2" read-only></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="禁用状态">
          <div class="block" slot="right">
            <mw-stepper v-model="num3" disabled></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="设置边界 [-10, 10]">
          <div class="block" slot="right">
            <mw-stepper v-model="num4" :min="-10" :max="10"></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="设置步长为3">
          <div class="block" slot="right">
            <mw-stepper v-model="num5" :step="3"></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="设置步长为小数">
          <div class="block" slot="right">
            <mw-stepper v-model="num6" :step="0.2"></mw-stepper>
          </div>
        </mw-cell>
        <mw-cell title="只允许为整数" no-border>
          <div class="block" slot="right">
            <mw-stepper v-model="num7" is-init></mw-stepper>
          </div>
        </mw-cell>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      num1: 6,
      num2: 10,
      num3: 11,
      num4: 2,
      num5: 1,
      num6: 3,
      num7: 8
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.stepper {
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
  }
}
</style>
