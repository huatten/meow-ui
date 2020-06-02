<template>
  <div class="action-sheet">
    <section>
      <mw-button type="info" :inline="false" @click="show=true">基本</mw-button>
      <mw-action-sheet v-model="show"></mw-action-sheet>
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
  methods: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
section {
  margin: 20px;
}
h5 {
  font-size: 30px;
  color: rgba(69, 90, 100, 0.6);
  margin: 30px 0 30px 20px;
}
</style>