<template>
  <div class="demo-checkbox">
    <div class="mw-field">
      <h5>复选项</h5>
      <p>1.下面的哪个明星你最讨厌？</p>
      <mw-checkbox label="鹿晗" v-model="checked" name="鹿晗"></mw-checkbox>
      <mw-checkbox label="黄家驹" v-model="checked" disabled name="黄家驹"></mw-checkbox>
    </div>
    <div class="mw-field">
      <h5>复选项组</h5>
      <p>1.下面的选项中，什么瓜不能吃？</p>
      <mw-checkbox-group v-model="noteat">
        <mw-checkbox label="冬瓜" name="冬瓜"></mw-checkbox>
        <mw-checkbox label="西瓜" name="西瓜"></mw-checkbox>
        <mw-checkbox label="傻瓜" name="傻瓜"></mw-checkbox>
        <mw-checkbox label="南瓜" name="南瓜"></mw-checkbox>
        <mw-checkbox label="呆瓜" name="呆瓜"></mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>更改布局方式</h5>
      <p>2.考试的时候大家都用什么铅笔？</p>
      <mw-checkbox-group v-model="qianbi">
        <mw-checkbox name="SB" horizontal>SB</mw-checkbox>
        <mw-checkbox name="2B" horizontal>2B</mw-checkbox>
        <mw-checkbox name="NB" horizontal>NB</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>自定义颜色</h5>
      <p>3.下面哪个装备王者荣耀里面的射手该出的？</p>
      <mw-checkbox-group v-model="chuzhuang">
        <mw-checkbox name="痛苦面具" color="#f00">痛苦面具</mw-checkbox>
        <mw-checkbox name="救赎之意" color="#f00">救赎之意</mw-checkbox>
        <mw-checkbox name="圣杯" color="#f00">圣杯</mw-checkbox>
        <mw-checkbox name="闪电匕首" color="#f00">闪电匕首</mw-checkbox>
        <mw-checkbox name="破军" color="#f00">破军</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>禁止选择</h5>
      <p>4.程序猿最渴望拥有？</p>
      <mw-checkbox-group v-model="girl" disabled>
        <mw-checkbox name="粘人女朋友">粘人女朋友</mw-checkbox>
        <mw-checkbox name="墨迹女朋友">墨迹女朋友</mw-checkbox>
        <mw-checkbox name="好看女朋友">好看女朋友</mw-checkbox>
        <mw-checkbox name="女朋友">女朋友</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>限制选择数量(最多两项)</h5>
      <p>5.什么天气适合吃火锅？</p>
      <mw-checkbox-group v-model="huoguo" :max="2">
        <mw-checkbox name="春天">春天</mw-checkbox>
        <mw-checkbox name="雨天" disabled>雨天</mw-checkbox>
        <mw-checkbox name="夏天">夏天</mw-checkbox>
        <mw-checkbox name="秋天">秋天</mw-checkbox>
        <mw-checkbox name="冬天">冬天</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>更改checkbox尺寸</h5>
      <p>6.自身不带消音和4倍镜的狙击枪是？</p>
      <mw-checkbox-group v-model="qiang">
        <mw-checkbox name="SKS" icon-size="26">SKS</mw-checkbox>
        <mw-checkbox name="MK14" icon-size="25">MK14</mw-checkbox>
        <mw-checkbox name="VSS" icon-size="24">VSS</mw-checkbox>
        <mw-checkbox name="Kar98K" icon-size="23">Kar98K</mw-checkbox>
        <mw-checkbox name="M416" icon-size="22">M416</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>更改checkbox位置</h5>
      <p>7.盖伦的武器不是什么呀？</p>
      <mw-checkbox-group v-model="gailun">
        <mw-checkbox name="暴风大保健" icon-position="right">暴风大保健</mw-checkbox>
        <mw-checkbox name="霜之哀伤" icon-position="right">霜之哀伤</mw-checkbox>
        <mw-checkbox name="方天画戟" icon-position="right">方天画戟</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>更改checkbox样式类型</h5>
      <p>8.马可波罗的激情绿茵皮肤上的号码是多少？</p>
      <mw-checkbox-group v-model="make">
        <mw-checkbox name="1号" icon="collection" icon-inverse="settings">1号</mw-checkbox>
        <mw-checkbox name="45号" icon="collection" icon-inverse="settings">45号</mw-checkbox>
        <mw-checkbox name="30号" icon="collection" icon-inverse="settings">30号</mw-checkbox>
        <mw-checkbox
          name="23号"
          icon="collection"
          icon-inverse="settings"
          disabled
          icon-disabled="close"
        >23号</mw-checkbox>
      </mw-checkbox-group>
    </div>
    <div class="mw-field">
      <h5>搭配cell组件</h5>
      <p>9.下面哪个英雄可以隐身？</p>
      <mw-checkbox-group v-model="yinsheng">
        <mw-cell>
          <mw-checkbox name="鬼谷子" icon-position="right">鬼谷子</mw-checkbox>
        </mw-cell>
        <mw-cell>
          <mw-checkbox name="花木兰" icon-position="right">花木兰</mw-checkbox>
        </mw-cell>
        <mw-cell>
          <mw-checkbox name="兰陵王" icon-position="right">兰陵王</mw-checkbox>
        </mw-cell>
        <mw-cell>
          <mw-checkbox name="沈梦溪" icon-position="right">沈梦溪</mw-checkbox>
        </mw-cell>
      </mw-checkbox-group>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      checked: false,
      noteat: ["傻瓜"],
      qianbi: [],
      chuzhuang: [],
      girl: ["雨天"],
      huoguo: [],
      qiang: [],
      gailun: [],
      make: [],
      yinsheng:[]
    };
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