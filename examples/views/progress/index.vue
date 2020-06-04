<template>
  <div class="progress">
    <section>
      <h5>默认用法</h5>
      <mw-progress v-model="width"></mw-progress>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      width: 30
    };
  },
  methods: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.progress {
  background: #fff;
  padding: 20px 0;
}
section {
  margin-bottom: 40px;
  h5 {
    margin-bottom: 15px;
    margin-left: 15px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 30px;
  }
}
</style>