<template>
  <div>
    <div class="demo">
      <mw-noticebar>我是默认的通知栏，什么都不传。</mw-noticebar>
    </div>
    <div class="demo">
      <mw-noticebar left-icon="history" mode="close" >我是带有图标的的通知栏，可关闭。</mw-noticebar>
    </div>

    <div class="demo">
      <mw-noticebar left-icon="done" left-size="20" :svg="true" mode="close" time="5000">我是带有图标的的通知栏，5s以后消失。</mw-noticebar>
    </div>

    <div class="demo">
      <mw-noticebar left-icon="done" left-size="20" :svg="true" mode="link">我是带有图标的的通知栏，文字太长了，我现在要滚动才行，同时可点击查看详情。</mw-noticebar>
    </div>

    <div class="demo">
      <mw-noticebar :scrollable="false" wrapable>我是带有图标的的通知栏，文字太长了文字太长了，需要开启文本换行展示。</mw-noticebar>
    </div>
    <div class="demo">
      <mw-noticebar
        left-icon="problem"
        iconType="font"
        mode="close"
        background="rgba(89,158,248,.08)"
        color="#2f86f6"
        speed="120"
      >我是带图标、可改变外观、可滚动、可关闭的的通知栏，1秒以后开始滚了，滚得还快！</mw-noticebar>
    </div>
    <div class="demo">
      <mw-noticebar background="rgba(89,158,248,.08)" color="#2f86f6" speed="150">
        <span slot="left">
          <mw-icon name="problem" size="24"></mw-icon>
        </span>
        我是使用插槽自定义的带图标的通知栏，多来点文字滚滚
        <span slot="right" class="right-svg">
          <mw-icon name="close" size="24"></mw-icon>
        </span>
      </mw-noticebar>
    </div>
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
.demo {
  margin-bottom: 10px;
}
</style>