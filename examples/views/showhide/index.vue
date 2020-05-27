<template>
  <div class="showhide">
    <section>
      <h5>默认用法</h5>
      <mw-showhide :text="text1"></mw-showhide>
      <mw-showhide>{{text4}}</mw-showhide>
    </section>
    <section>
      <h5>设置行高</h5>
      <mw-showhide :text="text2" :line-height="28"></mw-showhide>
      <mw-showhide :line-height="28">{{text4}}</mw-showhide>
    </section>
    <section>
      <h5>设置最大行数</h5>
      <mw-showhide :text="text1" :max-line="5"></mw-showhide>
    </section>
    <section>
      <h5>按钮文案</h5>
      <mw-showhide showText="查看全文" hideText="收起全文" :text="text1"></mw-showhide>
    </section>
    <section>
      <h5>按钮颜色</h5>
      <mw-showhide btnColor="#409eff" :text="text1"></mw-showhide>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      text1:
        "真当多人运动是王者五排啊。好多年前我就在ins上关注过周扬青，为人其实很低调，不嚣张，没有过激的言论，很踏实，而且很有背景。但是这种女人一旦发威，比那些平时炫富的草包强多了。所以，等着吃瓜吧，除非周扬青自己放弃了。",
      text2:
        "罗志祥的行为自然是错的，需要受到谴责的，但也不是一个渣字完全可以概括的。人性是非常非常复杂的东西，而我们都习惯性地认为别人是单纯的坏人，而我们自己是复杂的好人。我们总是觉得别人做坏事都是不可饶恕的，而我们做坏事都是情有可原被逼无奈的。",
      text3:
        "男人有钱就变坏，不是没有道理的。事实上不止男人，武则天这样受封建礼教洗礼的女人，一旦挣脱束缚有权有势，也会养一群的男宠。",
      text4:
        "维持我们节俭的，可能是我们的贫穷。维持我们检点的，可能是我们的丑陋。维持我们低调的，可能是我们的平庸。"
    };
  },
  created() {
    this.$_init();
  },
  methods: {
    $_init() {
      setTimeout(() => {}, 2000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.showhide {
  background: #fff;
  padding: 20px 0;
}
section {
  margin-bottom: 40px;
  h5 {
    margin-bottom: 15px;
    margin-left: 15px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}


</style>