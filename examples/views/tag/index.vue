<template>
  <div class="tag">
    <section>
      <h5>基本用法</h5>
      <ul>
        <li>
          <mw-tag>特惠</mw-tag>
        </li>
        <li>
          <mw-tag>返5000</mw-tag>
        </li>
        <li>
          <mw-tag>3个月</mw-tag>
        </li>
        <li>
          <mw-tag>新手专享</mw-tag>
        </li>
      </ul>
    </section>
    <section>
      <h5>圆角</h5>
      <ul>
        <li>
          <mw-tag round>特惠</mw-tag>
        </li>
        <li>
          <mw-tag round>返5000</mw-tag>
        </li>
        <li>
          <mw-tag round>3个月</mw-tag>
        </li>
        <li>
          <mw-tag round>新手专享</mw-tag>
        </li>
      </ul>
    </section>
    <section>
      <h5>空心</h5>
      <ul>
        <li>
          <mw-tag plain>特惠</mw-tag>
        </li>
        <li>
          <mw-tag plain>返5000</mw-tag>
        </li>
        <li>
          <mw-tag plain>3个月</mw-tag>
        </li>
        <li>
          <mw-tag plain>新手专享</mw-tag>
        </li>
      </ul>
    </section>
    <section>
      <h5>自定义颜色</h5>
      <ul>
        <li>
          <mw-tag color="#f00">特惠</mw-tag>
        </li>
        <li>
          <mw-tag plain text-color="#f00">返5000</mw-tag>
        </li>
        <li>
          <mw-tag color="#2b7bf3">3个月</mw-tag>
        </li>
        <li>
          <mw-tag plain text-color="#2b7bf3">新手专享</mw-tag>
        </li>
      </ul>
    </section>
    <section>
      <h5>可关闭</h5>
      <ul>
        <li>
          <mw-tag closable @close="closeTag">特惠</mw-tag>
        </li>
        <li>
          <mw-tag closable plain @close="closeTag">返5000</mw-tag>
        </li>
        <li>
          <mw-tag closable plain text-color="#f00" @close="closeTag">3个月</mw-tag>
        </li>
        <li>
          <mw-tag closable color="#2b7bf3" @close="closeTag">新手专享</mw-tag>
        </li>
      </ul>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "tag",
  data() {
    return {};
  },
  methods: {
    closeTag(t) {
      this.$toast(`您关闭了《${t}》标签`);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.tag {
  padding: 24px;
}
section {
  margin-bottom: 50px;
  h5 {
    margin-bottom: 20px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
