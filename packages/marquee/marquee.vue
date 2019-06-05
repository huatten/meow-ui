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
