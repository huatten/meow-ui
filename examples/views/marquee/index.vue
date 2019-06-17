<template>
  <div>
    <div class="mw-filed">
      <mw-marquee align="center">
        <mw-marquee-item @click="newsClick">我只有一个消息鸭居中呢</mw-marquee-item>
      </mw-marquee>
    </div>
    <div class="mw-filed">
      <mw-marquee>
        <mw-marquee-item v-for="(item,index) in scrollList" :key="index" @click="newsClick">{{item}}</mw-marquee-item>
      </mw-marquee>
    </div>
    <div class="mw-filed">
      <mw-marquee align="right" height="40" direction="down" duration="2500">
        <mw-marquee-item @click="newsClick">我是向下滚动的小鸭1</mw-marquee-item>
        <mw-marquee-item @click="newsClick">我是向下滚动的小鸭2</mw-marquee-item>
        <mw-marquee-item @click="newsClick">我是向下滚动的小鸭3</mw-marquee-item>
        <mw-marquee-item @click="newsClick">我是向下滚动的小鸭4</mw-marquee-item>
      </mw-marquee>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      scrollList: [
        "勇士最高价续约重伤员？",
        "波士顿先驱报：凯尔特人正与霍弗德商讨一份新合",
        "伦纳德将在夺冠庆典时传达重要信息",
        "讲不出再见！库里告别勇士甲骨文球馆"
      ]
    };
  },
  methods:{
    newsClick(e){
      this.$toast(e.target.innerHTML)
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-filed{
  margin: 10px;
}
</style>