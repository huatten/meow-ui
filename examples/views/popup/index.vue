<template>
  <div class="popup">
    <section>
      <mw-button type="info" :inline="false" @click="clickPop('center')">中间弹出</mw-button>
      <mw-popup v-model="bShow.center">
        <div class="center common">center</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop('left')">左侧弹出</mw-button>
      <mw-popup v-model="bShow.left" position="left">
        <div class="left common">left</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop('right')">右侧弹出</mw-button>
      <mw-popup v-model="bShow.right" position="right">
        <div class="right common">right</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop('top')">顶部弹出</mw-button>
      <mw-popup v-model="bShow.top" position="top">
        <div class="top common">top</div>
      </mw-popup>
    </section>
    <section>
      <mw-button type="info" :inline="false" @click="clickPop('bottom')">底部弹出</mw-button>
      <mw-popup v-model="bShow.bottom" position="bottom">
        <div class="bottom common">bottom</div>
      </mw-popup>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      bShow: {}
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
section {
  margin: 20px;
}
.common {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
.center {
  width: 360px;
  height: 200px;
}
.left {
  width: 360px;
  height: 100%;
}
.right {
  width: 360px;
  height: 100%;
}
.top {
  width: 100%;
  height: 300px;
}
.bottom {
  width: 100%;
  height: 300px;
}
</style>