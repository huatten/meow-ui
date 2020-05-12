<template>
  <div
    class="mw-skeleton-item"
    :class="`mw-skeleton-item--${type}`"
    :style="{'width': type==='bar' ? width + '%' : size + 'px', 'height': type==='bar' ? height + 'px': size + 'px'}"
  ></div>
</template>

<script type="text/ecmascript-6">
const DEFUALT_SIZE = 50;
const DEFUALT_HEIGHT = 20;
const DEFUALT_WIDTH = 100;
export default {
  name: "mw-skeleton-item",
  props: {
    type: {
      type: String,
      default: "bar"
    },
    size: {
      type: Number,
      default: DEFUALT_SIZE
    },
    width: {
      type: Number,
      default: DEFUALT_WIDTH
    },
    height: {
      type: Number,
      default: DEFUALT_HEIGHT
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
@mixin mwSkeletonBlink($time: 1.5s, $left: 1000px, $top: 104px) {
  animation-duration: $time;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: mw-skeleton-blink;
  animation-timing-function: linear;
  background: linear-gradient(to right, #f3f3f6 8%, #f8faff 18%, #f3f3f6 33%);
  background-size: $left $top;
}
.mw-skeleton-item {
  box-sizing: border-box;
  &--circle,
  &--square,
  &--bar {
    @include mwSkeletonBlink();
  }
  &--circle {
    border-radius: 50%;
  }
  @keyframes mw-skeleton-blink {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
}
</style>