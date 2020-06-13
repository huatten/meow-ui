<template>
  <div class="transition">
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(0)">Fade</mw-button>
      <mw-popup v-model="bShow[0]" transition="mw-fade">
        <div class="common">mw-fade</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(1)">Fade Top</mw-button>
      <mw-popup v-model="bShow[1]" transition="mw-fade-top">
        <div class="common">mw-fade-top</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(2)">Fade Bottom</mw-button>
      <mw-popup v-model="bShow[2]" transition="mw-fade-bottom">
        <div class="common">mw-fade-bottom</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(3)">Fade Left</mw-button>
      <mw-popup v-model="bShow[3]" transition="mw-fade-left">
        <div class="common">mw-fade-left</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(4)">Fade Right</mw-button>
      <mw-popup v-model="bShow[4]" transition="mw-fade-right">
        <div class="common">mw-fade-right</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(5)">Zoom</mw-button>
      <mw-popup v-model="bShow[5]" transition="mw-zoom">
        <div class="common">mw-zoom</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(6)">Slide Top</mw-button>
      <mw-popup v-model="bShow[6]" transition="mw-slide-top">
        <div class="common">mw-slide-top</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(7)">Slide Bottom</mw-button>
      <mw-popup v-model="bShow[7]" transition="mw-slide-bottom">
        <div class="common">mw-slide-bottom</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(8)">Slide Left</mw-button>
      <mw-popup v-model="bShow[8]" transition="mw-slide-left">
        <div class="common">mw-slide-left</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(9)">Slide Right</mw-button>
      <mw-popup v-model="bShow[9]" transition="mw-slide-right">
        <div class="common">mw-slide-right</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop(10)">Bounce</mw-button>
      <mw-popup v-model="bShow[10]" transition="mw-bounce">
        <div class="common">mw-bounce</div>
      </mw-popup>
    </section>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "transition",
  data() {
    return {
      bShow: []
    };
  },
  methods: {
    clickPop(type) {
      this.$set(this.bShow, type, true);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.transition {
  section {
    margin: 24px;
  }
  .common {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 360px;
    height: 200px;
  }
}
</style>
