<template>
  <div class="mw-field">
    <section>
      <h5>加载类型</h5>
      <mw-loading></mw-loading>
      <mw-loading type="carousel"></mw-loading>
      <mw-loading type="spinner"></mw-loading>
    </section>
    <section>
      <h5>自定义颜色</h5>
      <mw-loading fill="#3483ff"></mw-loading>
      <mw-loading type="carousel" fill="#ed6a0c"></mw-loading>
    </section>
    <section>
      <h5>自定义大小</h5>
      <mw-loading size="21" fill="#3483ff" width="2"></mw-loading>
      <mw-loading type="carousel" fill="#3483ff" size="10"></mw-loading>
      <mw-loading type="spinner" size="50"></mw-loading>
    </section>
    <section>
      <h5>加载文案以及自定义文案颜色</h5>
      <mw-loading  color="#f90" text="加载中"></mw-loading>
      <mw-loading type="carousel" fill="#3483ff" size="10" text="加载中"></mw-loading>
      <mw-loading type="spinner" size="50" text="加载中"></mw-loading>
    </section>
    <section>
      <h5>文案垂直排列</h5>
      <mw-loading  color="#f90" vertical text="加载中"></mw-loading>
      <mw-loading type="carousel" fill="#3483ff" size="10" vertical text="加载中"></mw-loading>
      <mw-loading type="spinner" size="50" vertical text="加载中"></mw-loading>
    </section>
    <section>
      <h5>全屏loading</h5>
      <mw-button type="info" @click="showLoad">点击开启全屏loading</mw-button>
      <mw-loading color="#fff" v-if="show" vertical fullScreen text="加载中..."></mw-loading>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      show: false
    };
  },
  methods:{
    showLoad(){
      this.show = true
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-field {
  padding: 0 15px;
  margin: 20px 0;
}
section {
  margin-bottom: 10px;
  h5 {
    margin-bottom: 15px;
  }
  .mw-loading {
    margin: 10px 0;
  }
}
</style>