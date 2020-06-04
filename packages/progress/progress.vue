<template>
  <div class="mw-progress">
    <div class="mw-progress-bar">
      <div class="mw-progress-bar-inner" :style="{width: barWidth}"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-progress",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  watch: {
    value: {
      handler(val) {
        val && this.updateValue(val);
      },
      immediate: true
    }
  },
  computed: {
    barWidth() {
      return this.value + "%";
    }
  },
  methods: {
    updateValue(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>

<style  lang="scss" rel="stylesheet/scss">
.mw-progress {
  display: flex;
  align-items: center;
  &-bar {
    flex: 1;
    height: 12px;
    background-color: #ebebeb;
  }
  &-bar-inner {
    height: 100%;
    transition: width 0.4s;
    background-color: #f82;
  }
}
</style>