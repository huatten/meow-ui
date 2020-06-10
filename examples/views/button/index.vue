<template>
  <div class="button">
    <section>
      <h5>默认用法</h5>
      <div class="button-row">
        <mw-button>默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary">主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info">信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger">危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning">警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>线性按钮</h5>
      <div class="button-row">
        <mw-button plain>默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" plain>主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" plain>信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" plain>危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" plain>警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>圆角按钮</h5>
      <div class="button-row">
        <mw-button round>默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" round>主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" round>信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" round>危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" round>警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>图标按钮</h5>
      <div class="button-row">
        <mw-button icon-name="prompt">默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" icon-name="edit">主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" icon-name="settings">信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" icon-name="information">危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" icon-name="selection">警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮尺寸</h5>
      <div class="button-row">
        <mw-button type="primary" size="small">小按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" size="large">大按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>块级按钮</h5>
      <div class="button-row" style="display: block; margin:15px 0 15px 0;">
        <mw-button :inline="false">默认按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin:15px 0 15px 0;">
        <mw-button type="primary" :inline="false">主要按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="info" :inline="false">信息按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="danger" :inline="false">危险按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="warning" :inline="false">警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮禁用状态</h5>
      <div class="button-row">
        <mw-button disabled>默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" disabled>主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" disabled>信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" disabled>危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" disabled>警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮加载状态</h5>
      <div class="button-row">
        <mw-button type="primary" loading>主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" loading>信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" loading>危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" loading>警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮加载样式</h5>
      <div class="button-row">
        <mw-button type="primary" loading loading-type="carousel" loading-size="8">主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" loading loading-type="spinner" loading-size="18">主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" loading loading-type="carousel" loading-size="8">信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" loading loading-type="spinner" loading-size="18">信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" loading loading-type="carousel" loading-size="8">危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" loading loading-type="spinner" loading-size="18">危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" loading loading-type="carousel" loading-size="8">警告按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" loading loading-type="spinner" loading-size="18">警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮加载图标大小</h5>
      <div class="button-row">
        <mw-button type="primary" loading loading-size="15">主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" loading loading-type="spinner" loading-size="14">信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" loading loading-type="carousel" loading-size="6">危险按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>按钮点击波纹</h5>
      <div class="button-row">
        <mw-button ripple>默认按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="primary" ripple>主要按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="info" ripple>信息按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="danger" ripple>危险按钮</mw-button>
      </div>
      <div class="button-row">
        <mw-button type="warning" ripple>警告按钮</mw-button>
      </div>
    </section>
    <section>
      <h5>控制波纹扩散速度</h5>
      <div class="button-row" style="display: block; margin:15px 0 15px 0;">
        <mw-button :inline="false" ripple speed="10">默认按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin:15px 0 15px 0;">
        <mw-button type="primary" :inline="false" ripple speed="10">主要按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="info" :inline="false" ripple speed="10">信息按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="danger" :inline="false" ripple speed="10">危险按钮</mw-button>
      </div>
      <div class="button-row" style="display: block; margin: 15px 0 15px 0;">
        <mw-button type="warning" :inline="false" ripple speed="10">警告按钮</mw-button>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.button {
  padding: 0 30px 30px 30px;
  height: 100%;
  &-row {
    display: inline-block;
    margin: 0 30px 10px 0;
  }
}
section {
  padding-top: 30px;
  h5 {
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
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
