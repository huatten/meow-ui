<template>
  <div class="mw-marquee">
    <ul class="mw-marquee__cont" :class="{ 'mw-marquee__top': animate }">
      <li v-for="(item, index) in scrollList" :key="index" @click="_onClick(item)">
        <span>{{ item.mobile }}</span>
        <span>{{ item.nick }}</span>
        <span>{{ item.prize }}</span>
        <span>{{ item.time }}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "mw-marquee",
  props: {
    scrollList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      animate: false
    };
  },
  mounted() {
    setInterval(this._onScroll, 3000);
  },
  methods: {
    _onScroll() {
      this.animate = true;
      setTimeout(() => {
        this.scrollList.push(this.scrollList[0]);
        this.scrollList.shift();
        this.animate = false;
      }, 500);
    },
    _onClick(item) {
      this.$emit("click", item);
    }
  }
};
</script>
<style lang="scss" rel="stylesheet/scss">
.mw-marquee {
  width: 100%;
  min-height: 50px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  &__cont {
    position: absolute;
    top: 0;
    left: 0;
    background: #eeb75c;
    li {
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    span {
      flex: 1;
      width: 105px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
  }
  &__top {
    transition: all 0.5s linear;
    margin-top: -50px;
  }
}
</style>
