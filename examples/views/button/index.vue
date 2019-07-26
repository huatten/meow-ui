<template>
  <div>
    <section>
      <mw-button>默认按钮</mw-button>
      <mw-button type="primary">主要按钮</mw-button>
      <mw-button type="info" loading loading-size="8" loading-type="carousel">信息加载中...</mw-button>
      <mw-button type="info" loading loading-size="20">信息加载中...</mw-button>
      <mw-button type="danger" round>危险按钮</mw-button>
      <mw-button type="warning" icon-name="prompt" disabled>警告按钮</mw-button>
    </section>
    <section>
      <mw-button>默认按钮</mw-button>
      <mw-button type="primary" :inline="false" speed="10" native-type="reset">主要按钮</mw-button>
      <mw-button type="info" :inline="false" speed="20">信息按钮</mw-button>
      <mw-button type="danger" :inline="false" speed="30">危险按钮</mw-button>
      <mw-button type="warning" :inline="false" speed="40">警告按钮</mw-button>
    </section>
    <section>
      <mw-button plain type="primary">plain&&主要按钮</mw-button>
      <mw-button plain type="info">plain&&信息按钮</mw-button>
      <mw-button plain type="danger">plain&&危险按钮</mw-button>
      <mw-button plain type="warning">plain&&警告按钮</mw-button>
    </section>
    <section>
      <mw-button type="primary" size="small">小按钮</mw-button>
      <mw-button type="primary" size="large">大按钮</mw-button>
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
</style>