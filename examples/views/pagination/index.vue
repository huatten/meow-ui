<template>
  <div class="pagination">
    <section>
      <h5>基础用法</h5>
      <div class="block">
        <mw-pagination v-model="cur1" :total="50"></mw-pagination>
      </div>
      <div class="block">
        <mw-pagination v-model="cur2" :total="100"></mw-pagination>
      </div>
    </section>
    <section>
      <h5>改变操作文案</h5>
      <div class="block">
        <mw-pagination v-model="cur3" :total="50" prev-text="prev" next-text="next"></mw-pagination>
      </div>
      <div class="block">
        <mw-pagination v-model="cur4" :total="100" prev-text="prev" next-text="next"></mw-pagination>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      cur1: 1,
      cur2: 3,
      cur3: 3,
      cur4: 7,
    };
  },
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.pagination {
  padding: 20px 20px;
}
section {
  margin-bottom: 80px;
  h5 {
    color: rgba(69, 90, 100, 0.6);
    margin-bottom: 30px;
    font-size: 30px;
  }
  .block {
    margin-bottom: 40px;
    background-color: #fff;
  }
}
</style>
