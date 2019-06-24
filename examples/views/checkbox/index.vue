<template>
  <div class="demo-checkbox">
    <div class="mw-field">
      <h5>基本案例</h5>
      <p>1.下面的选项中，什么瓜不能吃？</p>
      <mw-checkbox label="冬瓜" v-model="checkbox1" name="冬瓜"></mw-checkbox>
      <mw-checkbox label="西瓜" v-model="checkbox1" name="1"></mw-checkbox>
      <mw-checkbox label="南瓜" v-model="checkbox1" name="南瓜"></mw-checkbox>
      <mw-checkbox label="傻瓜" v-model="checkbox1" name="傻瓜"></mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>基本案例</h5>
      <p>1.下面的选项中，什么瓜不能吃？</p>
      <mw-checkbox-group v-model="like">
        <mw-checkbox label="冬瓜" name="冬瓜"></mw-checkbox>
        <mw-checkbox label="西瓜" name="xigua"></mw-checkbox>
        <mw-checkbox label="南瓜" name="南瓜"></mw-checkbox>
        <mw-checkbox label="傻瓜" name="傻瓜"></mw-checkbox>
      </mw-checkbox-group>
    </div>
    <!-- <div class="mw-field">
      <h5>更改布局方式</h5>
      <p>2.考试的时候大家都用什么铅笔？</p>
      <mw-checkbox v-model="checkbox2" value="1" horizontal icon-position="right">SB</mw-checkbox>
      <mw-checkbox v-model="checkbox2" value="2" horizontal>2B</mw-checkbox>
      <mw-checkbox v-model="checkbox2" value="3" horizontal>NB</mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>自定义颜色</h5>
      <p>3.下面哪个装备王者荣耀里面的射手该出的？</p>
      <mw-checkbox v-model="checkbox3" value="1" color="#f00">痛苦面具</mw-checkbox>
      <mw-checkbox v-model="checkbox3" value="2" color="#f00">救赎之意</mw-checkbox>
      <mw-checkbox v-model="checkbox3" value="3" color="#f00">圣杯</mw-checkbox>
      <mw-checkbox v-model="checkbox3" value="4" color="#f00">闪电匕首</mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>禁止选择</h5>
      <p>4.程序猿最渴望拥有？</p>
      <mw-checkbox v-model="checkbox4" value="1">苹果笔记本</mw-checkbox>
      <mw-checkbox v-model="checkbox4" value="2">超大显示器</mw-checkbox>
      <mw-checkbox v-model="checkbox4" value="3">Apple Watch</mw-checkbox>
      <mw-checkbox v-model="checkbox4" value="4" disabled>女朋友</mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>更改checkbox尺寸</h5>
      <p>5.自带消音和4倍镜的狙击枪是？</p>
      <mw-checkbox v-model="checkbox5" value="1" icon-size="26">SKS</mw-checkbox>
      <mw-checkbox v-model="checkbox5" value="2" icon-size="25">MK14</mw-checkbox>
      <mw-checkbox v-model="checkbox5" value="3" icon-size="24">VSS</mw-checkbox>
      <mw-checkbox v-model="checkbox5" value="4" icon-size="23">Kar98K</mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>更改checkbox位置</h5>
      <p>6.盖伦的武器是什么呀？</p>
      <mw-checkbox v-model="checkbox6" value="1" icon-size="24" icon-position="right">暴风大保健</mw-checkbox>
      <mw-checkbox v-model="checkbox6" value="2" icon-size="24" icon-position="right">霜之哀伤</mw-checkbox>
      <mw-checkbox v-model="checkbox6" value="3" icon-size="24" icon-position="right">方天画戟</mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>更改checkbox样式类型</h5>
      <p>7.马可波罗的激情绿茵皮肤上的号码是多少？</p>
      <mw-checkbox v-model="checkbox7" value="1" icon="collection" icon-inverse="settings">1号</mw-checkbox>
      <mw-checkbox v-model="checkbox7" value="2" icon="collection" icon-inverse="settings">45号</mw-checkbox>
      <mw-checkbox v-model="checkbox7" value="3" icon="collection" icon-inverse="settings">30号</mw-checkbox>
      <mw-checkbox
        v-model="checkbox7"
        value="4"
        icon="collection"
        icon-inverse="settings"
        disabled
        icon-disabled="close"
      >23号</mw-checkbox>
    </div>-->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      checkbox1: false,
      like: [],
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      checkbox6: false,
      checkbox7: false
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