<template>
  <div class="mw-loading-spinner">
    <span class="spinner" :style="spinnerStyle">
      <i v-for="(n, index) in num" :key="index" :style="_setRotate(index)"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-spinner",
  props: {
    fill: {
      type: String,
      default: "#666"
    },
    size: {
      type: [Number, String],
      default: 30
    },
    num: {
      type: [Number, String],
      default: 12
    }
  },
  data() {
    return {
      spinnerStyle: {
        width: `${this.size}px`,
        height: `${this.size}px`,
        color: this.fill,
        "animation-timing-function": `steps(${this.num})`
      }
    };
  },
  methods: {
    _setRotate(n) {
      const len = this.num;
      return {
        opacity: 1 - (0.75 / 12) * n,
        transform: `rotate(${(n + 1) * (360 / len)}deg)`
      };
    }
  }
};
</script>