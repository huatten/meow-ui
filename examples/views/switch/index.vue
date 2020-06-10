<template>
  <div class="switch">
    <section>
      <h5>基础开关</h5>
      <mw-switch v-model="isClose"></mw-switch>
    </section>
    <section>
      <h5>禁用开关关闭状态</h5>
      <mw-switch v-model="isClose" disabled></mw-switch>
    </section>
    <section>
      <h5>禁用开关打开状态</h5>
      <mw-switch v-model="isOpen" disabled></mw-switch>
    </section>
    <section>
      <h5>不同状态下的加载状态</h5>
      <mw-switch v-model="isClose" loading></mw-switch>
    </section>
    <section>
      <h5>自定义开关大小</h5>
      <mw-switch v-model="isClose" size="22"></mw-switch>
    </section>
    <section>
      <h5>自定义开关颜色</h5>
      <mw-switch v-model="isOpen" background="#3483ff" loading></mw-switch>
    </section>
    <section>
      <h5>异步控制开关</h5>
      <mw-switch :value="asyncFlag" :loading="loadFlag" @input="onInput"></mw-switch>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isClose: false,
      isOpen: true,
      asyncFlag: false,
      loadFlag: false
    };
  },
  methods: {
    onInput(asyncFlag) {
      this.loadFlag = true;
      setTimeout(() => {
        this.asyncFlag = asyncFlag;
        this.loadFlag = false;
      }, 2000);
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.switch {
  padding: 30px;
}
section {
  margin-bottom: 55px;
  h5 {
    margin-bottom: 30px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}
</style>
