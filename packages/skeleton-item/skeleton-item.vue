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