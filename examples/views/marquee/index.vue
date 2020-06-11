<template>
  <div class="marquee">
    <section>
      <h5>默认用法</h5>
      <div class="block">
        <mw-marquee>
          <mw-marquee-item @click="newsClick">我只有一个消息鸭</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>居中显示</h5>
      <div class="block">
        <mw-marquee align="center">
          <mw-marquee-item @click="newsClick">我只有一个消息鸭居中呢</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>居右显示</h5>
      <div class="block">
        <mw-marquee align="right">
          <mw-marquee-item @click="newsClick">我只有一个消息鸭居右呢</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>设置高度</h5>
      <div class="block">
        <mw-marquee align="center" height="50">
          <mw-marquee-item @click="newsClick">我只有一个消息设置了高度</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>默认向上滚动</h5>
      <div class="block">
        <mw-marquee >
          <mw-marquee-item
            v-for="(item,index) in scrollList"
            :key="index"
            @click="newsClick"
          >{{index+1}}、{{item}}</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>向下滚动</h5>
      <div class="block">
        <mw-marquee direction="down">
          <mw-marquee-item
            v-for="(item,index) in scrollList"
            :key="index"
            @click="newsClick"
          >{{index+1}}、{{item}}</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
    <section>
      <h5>设置滚动间隔时间</h5>
      <div class="block">
        <mw-marquee duration="4000">
          <mw-marquee-item
            v-for="(item,index) in scrollList"
            :key="index"
            @click="newsClick"
          >{{index+1}}、{{item}}</mw-marquee-item>
        </mw-marquee>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      scrollList: [
        "勇士最高价续约重伤员？",
        "波士顿先驱报：凯尔特人正与霍弗德商讨一份",
        "伦纳德将在夺冠庆典时传达重要信息",
        "讲不出再见！库里告别勇士甲骨文球馆"
      ]
    };
  },
  methods: {
    newsClick(e) {
      this.$toast(e.target.innerHTML);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.marquee {
  padding: 30px 0;
}
section {
  margin: 0 30px 80px 30px;
  h5 {
    margin-bottom: 50px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}
</style>
