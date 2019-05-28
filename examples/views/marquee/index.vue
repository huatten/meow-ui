<template>
  <div>
    <mw-marquee :scrollList="scrollList"></mw-marquee>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      scrollList: [
        {
          mobile: "178****9005",
          nick: "马哈疼",
          prize: "3元现金红包",
          time: "1分钟前"
        },
        {
          mobile: "188****9098",
          nick: "哈哈哈",
          prize: "100元现金红包",
          time: "2分钟前"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>