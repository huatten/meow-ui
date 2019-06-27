<template>
  <div class="demo-slider">
    <div class="mw-field">
      <p>基本</p>
      <mw-slider v-model="value1"></mw-slider>
    </div>
    <div class="mw-field">
      <p>禁用</p>
      <mw-slider v-model="value2" disabled></mw-slider>
    </div>
    <div class="mw-field">
      <p>自定义轨道高度</p>
      <mw-slider v-model="value3" bar-height="3"></mw-slider>
    </div>
    <div class="mw-field">
      <p>自定义颜色</p>
      <mw-slider v-model="value4" active-color="#f00" unactive-color="#ccc"></mw-slider>
    </div>
    <div class="mw-field">
      <p>指定步长</p>
      <mw-slider v-model="value5" :step="10"></mw-slider>
    </div>
    <div class="mw-field">
      <p>隐藏tooltip</p>
      <mw-slider v-model="value6" :showtip="false"></mw-slider>
    </div>
    <div class="mw-field">
      <p>自定义滑块</p>
      <mw-slider v-model="value7"><span slot="handle" class="bar">{{value6}}</span></mw-slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      value1: 10,
      value2: 20,
      value3: 30,
      value4: 40,
      value5: 10,
      value6: 50,
      value7: 60,
    };
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  margin: 20px 18px;
}
p {
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
}
.bar{
  width: 30px;
  height: 20px;
  display: block;
  background-color: #f00;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}
</style>