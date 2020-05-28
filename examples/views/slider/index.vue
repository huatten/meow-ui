<template>
  <div class="slider">
    <section>
      <h5>基本</h5>
      <mw-slider v-model="value1"></mw-slider>
    </section>
    <section>
      <h5>禁用</h5>
      <mw-slider v-model="value2" disabled></mw-slider>
    </section>
    <section>
      <h5>自定义轨道高度</h5>
      <mw-slider v-model="value3" bar-height="3"></mw-slider>
    </section>
    <section>
      <h5>自定义颜色</h5>
      <mw-slider v-model="value4" active-color="#f00" unactive-color="#ccc"></mw-slider>
    </section>
    <section>
      <h5>指定步长</h5>
      <mw-slider v-model="value5" :step="10"></mw-slider>
    </section>
    <section>
      <h5>指定范围边界</h5>
      <mw-slider v-model="value6" :min="-40" :max="60"></mw-slider>
    </section>
    <section>
      <h5>隐藏tooltip</h5>
      <mw-slider v-model="value7" :showtip="false"></mw-slider>
    </section>
    <section>
      <h5>自定义滑块</h5>
      <mw-slider v-model="value8" @change="onChange">
        <span slot="handle" class="bar">{{value8}}</span>
      </mw-slider>
    </section>
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
      value6: 22,
      value7: 60,
      value8: 40
    };
  },
  methods: {
    onChange() {
      this.$toast("当前的值是：" + this.value7);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.slider {
  padding: 20px 0;
  margin: 0 30px;
}
section {
  margin-bottom: 55px;
  h5 {
    margin-bottom: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}
.bar {
  width: 40px;
  height: 40px;
  display: block;
  background-color: #f00;
  border-radius: 30px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
}
</style>