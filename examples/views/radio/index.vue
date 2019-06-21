<template>
  <div class="demo-radio">
    <div class="mw-field">
      <h5>基本案例</h5>
      <p>1.下面的选项中，什么瓜不能吃？</p>
      <mw-radio label="冬瓜" v-model="radio1" value="1"></mw-radio>
      <mw-radio label="西瓜" v-model="radio1" value="2"></mw-radio>
      <mw-radio label="南瓜" v-model="radio1" value="3"></mw-radio>
      <mw-radio label="傻瓜" v-model="radio1" value="4"></mw-radio>
    </div>
    <div class="mw-field">
      <h5>更改布局方式</h5>
      <p>2.考试的时候大家都用什么铅笔？</p>
      <mw-radio v-model="radio2" value="1" horizontal>SB</mw-radio>
      <mw-radio v-model="radio2" value="2" horizontal>2B</mw-radio>
      <mw-radio v-model="radio2" value="3" horizontal>NB</mw-radio>
    </div>
    <div class="mw-field">
      <h5>自定义颜色</h5>
      <p>3.下面哪个装备王者荣耀里面的射手该出的？</p>
      <mw-radio v-model="radio3" value="1" color="#f00">痛苦面具</mw-radio>
      <mw-radio v-model="radio3" value="2" color="#f00">救赎之意</mw-radio>
      <mw-radio v-model="radio3" value="3" color="#f00">圣杯</mw-radio>
      <mw-radio v-model="radio3" value="4" color="#f00">闪电匕首</mw-radio>
    </div>
    <div class="mw-field">
      <h5>更改Radio尺寸</h5>
      <p>4.自带消音和4倍镜的狙击枪是？</p>
      <mw-radio v-model="radio4" value="1" icon-size="26">SKS</mw-radio>
      <mw-radio v-model="radio4" value="2" icon-size="25">MK14</mw-radio>
      <mw-radio v-model="radio4" value="3" icon-size="24">VSS</mw-radio>
      <mw-radio v-model="radio4" value="4" icon-size="23">Kar98K</mw-radio>
    </div>
    <div class="mw-field">
      <h5>更改Radio位置</h5>
      <p>5.盖伦的武器是什么呀？</p>
      <mw-radio v-model="radio5" value="1" icon-size="24" icon-position="right">暴风大保健</mw-radio>
      <mw-radio v-model="radio5" value="2" icon-size="24" icon-position="right">霜之哀伤</mw-radio>
      <mw-radio v-model="radio5" value="3" icon-size="24" icon-position="right">方天画戟</mw-radio>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      radio1: 0,
      radio2: 0,
      radio3: 0,
      radio4: 0,
      radio5: 0
    };
  },
  methods: {
    cellClick() {
      console.log("点击了单元格");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  padding: 15px;
  background: #fff;
  margin-bottom: 10px;
  h5 {
    font-size: 15px;
    color: #f90;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #000;
    margin-bottom: 20px;
  }
}
</style>