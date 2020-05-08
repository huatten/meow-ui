<template>
  <div class="divider">
    <section>
      <h5>默认用法</h5>
      <mw-divider></mw-divider>
    </section>
    <section>
      <h5>默认居中</h5>
      <mw-divider>居中对齐</mw-divider>
    </section>
    <section>
      <h5>展示位置-居左</h5>
      <mw-divider position="left">居左对齐</mw-divider>
    </section>
    <section>
      <h5>展示位置-居右</h5>
      <mw-divider position="right">居右对齐</mw-divider>
    </section>
    <section>
      <h5>渲染虚线</h5>
      <mw-divider dashed>渲染虚线</mw-divider>
    </section>
    <section>
      <h5>渲染点线</h5>
      <mw-divider dotted>渲染点线</mw-divider>
    </section>
    <section>
      <h5>自定义样式</h5>
      <mw-divider :style="{color: '#f00', borderColor: '#f90'}">自定义样式</mw-divider>
    </section>
    <section>
      <h5>垂直分割线</h5>
      <div class="vertical">
        <span>亚瑟</span>
        <mw-divider direction="vertical"></mw-divider>
        <span>老夫子</span>
        <mw-divider direction="vertical"></mw-divider>
        <span>安其拉</span>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.divider {
  background: #fff;
  padding: 20px 0;
}
section {
  margin-bottom: 30px;
  h5 {
    margin-bottom: 15px;
    margin-left: 15px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  .vertical {
    margin-left: 15px;
    span {
      font-size: 14px;
      color: #343a40;
    }
  }
}
</style>