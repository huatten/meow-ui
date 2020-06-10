<template>
  <div class="noticebar">
    <section>
      <h5>默认用法</h5>
      <div class="block">
        <mw-noticebar>我是默认的通知栏，什么都不传。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>设置圆角</h5>
      <div class="block">
        <mw-noticebar circular>我是默认的通知栏，什么都不传。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>多行显示</h5>
      <div class="block">
        <mw-noticebar :scrollable="false" wrapable>我是带有图标的的通知栏，文字太长了文字太长了，需要开启文本换行展示。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>带图标</h5>
      <div class="block">
        <mw-noticebar :scrollable="false" left-icon="information">我是带有图标的的通知栏。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>可关闭</h5>
      <div class="block">
        <mw-noticebar mode="close">我是一个点击可关闭的通知栏。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>点击查看详情</h5>
      <div class="block">
        <mw-noticebar mode="link">我是一个点击可查看详情的通知栏。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>设置6s消失</h5>
      <div class="block">
        <mw-noticebar
          left-icon="information"
          left-size="20"
          mode="close"
          time="6000"
        >我是带有图标的的通知栏，6s以后消失。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>文字太长滚动播放</h5>
      <div class="block">
        <mw-noticebar
          left-icon="information"
          left-size="20"
          mode="link"
        >我是带有图标的的通知栏，文字太长了，我现在要滚动才行，同时可点击查看详情。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>设置滚动延迟时间</h5>
      <div class="block">
        <mw-noticebar
          left-icon="information"
          left-size="20"
          mode="link"
          delay="3"
        >我是带有图标的的通知栏，文字太长了，我现在要滚动才行，3s后开始滚动</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>设置滚动速度</h5>
      <div class="block">
        <mw-noticebar
          left-icon="information"
          left-size="20"
          mode="link"
          speed="120"
        >我是带有图标的的通知栏，文字太长了，我现在要滚动才行，提速了哦同时可点击查看详情。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>设置滚动背景和文字颜色</h5>
      <div class="block">
        <mw-noticebar
          left-icon="settings"
          mode="close"
          background="rgba(89,158,248,.08)"
          color="#2f86f6"
        >我是带图标、可改变外观、可滚动、可关闭的的通知栏，要开始滚蛋了。</mw-noticebar>
      </div>
    </section>
    <section>
      <h5>使用插槽定义图标</h5>
      <div class="block">
        <mw-noticebar>
          <span slot="left">
            <mw-icon name="selection" size="24"></mw-icon>
          </span>我是带图标、可改变外观、可滚动、可关闭的的通知栏，要开始滚蛋了。
          <span slot="right" class="right-svg">
            <mw-icon name="delete" size="24"></mw-icon>
          </span>
        </mw-noticebar>
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
.noticebar {
  padding: 30px 0;
  background-color: #fff;
}
.block {
  margin: 0 20px;
}
section {
  margin-bottom: 70px;
  h5 {
    margin-bottom: 40px;
    margin-left: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}
</style>
