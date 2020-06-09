<template>
  <div class="loading">
    <section>
      <h5>加载类型</h5>
      <ul>
        <li>
          <mw-loading></mw-loading>
        </li>
        <li>
          <mw-loading type="carousel"></mw-loading>
        </li>
        <li>
          <mw-loading type="spinner"></mw-loading>
        </li>
      </ul>
    </section>
    <section>
      <h5>自定义颜色</h5>
      <ul>
        <li>
          <mw-loading fill="#3483ff"></mw-loading>
        </li>
        <li>
          <mw-loading type="carousel" fill="#ed6a0c"></mw-loading>
        </li>
        <li>
          <mw-loading type="spinner" fill="#f00"></mw-loading>
        </li>
      </ul>
    </section>
    <section>
      <h5>自定义大小</h5>
      <ul>
        <li>
          <mw-loading size="30" width="2"></mw-loading>
        </li>
        <li>
          <mw-loading type="carousel" size="10"></mw-loading>
        </li>
        <li>
          <mw-loading type="spinner" size="30"></mw-loading>
        </li>
      </ul>
    </section>
    <section>
      <h5>加载文案以及自定义文案颜色</h5>
      <ul>
        <li>
          <mw-loading fill="#f90" color="#f90" text="加载中"></mw-loading>
        </li>
        <li>
          <mw-loading type="carousel" fill="#f00" color="#f00" size="10" text="加载中"></mw-loading>
        </li>
        <li>
          <mw-loading type="spinner" fill="#3483ff" color="#3483ff" text="加载中"></mw-loading>
        </li>
      </ul>
    </section>
    <section>
      <h5>文案垂直排列</h5>
      <ul>
        <li>
          <mw-loading color="#f90" vertical text="加载中"></mw-loading>
        </li>
        <li>
          <mw-loading type="carousel" fill="#3483ff" size="10" vertical text="加载中"></mw-loading>
        </li>
        <li>
          <mw-loading type="spinner" size="24" vertical text="加载中"></mw-loading>
        </li>
      </ul>
    </section>
    <section>
      <h5>全屏loading</h5>
      <mw-button type="info" @click="showLoad">点击开启全屏loading</mw-button>
      <mw-loading color="#fff" v-if="show" size="30" vertical fullScreen text="加载中..."></mw-loading>
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
  methods: {
    showLoad() {
      this.show = true;
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.loading {
  padding: 20px 20px;
  background-color: #dee2e6;
}
section {
  margin-bottom: 50px;
  h5 {
    color: rgba(69, 90, 100, 0.6);
    margin-bottom: 30px;
    font-size: 30px;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }
  .mw-loading {
    margin: 10px 0;
  }
}
</style>
