<template>
  <div class="navbar">
    <section>
      <h5>默认用法</h5>
      <mw-navbar @click="clickHeader">标题</mw-navbar>
    </section>
    <section>
      <h5>增加左侧返回图标</h5>
      <mw-navbar left-icon-show @click="clickHeader">标题</mw-navbar>
    </section>
    <section>
      <h5>增加左侧返回文字</h5>
      <mw-navbar left-text="返回" @click="clickHeader">标题</mw-navbar>
    </section>
    <section>
      <h5>增加左侧返回文字和图标</h5>
      <mw-navbar left-icon-show left-text="返回" @click="clickHeader">标题</mw-navbar>
    </section>
    <section>
      <h5>增加右侧图标</h5>
      <mw-navbar
        left-icon-show
        left-text="返回"
        right-icon-show
        @click="clickHeader"
        @more="clickMore"
      >标题</mw-navbar>
    </section>
    <section>
      <h5>增加右侧图标和文字</h5>
      <mw-navbar
        left-icon-show
        left-text="返回"
        right-icon-show
        right-text="更多"
        @click="clickHeader"
        @more="clickMore"
      >标题</mw-navbar>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    clickHeader() {
      this.$toast("你点击了标题");
    },
    clickMore() {
      this.$toast("你点击了更多");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.navbar {
  padding: 20px 20px;
}
section {
  margin-bottom: 50px;
  h5 {
    color: rgba(69, 90, 100, 0.6);
    margin-bottom: 30px;
    font-size: 30px;
  }
}
</style>
