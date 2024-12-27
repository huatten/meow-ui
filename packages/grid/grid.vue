<template>
  <div
    class="mw-grid"
    :class="[!noBorder && !gap && 'mw-hairline--top']"
    :style="style"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import { addUnit } from "../_util/format";
export default {
  name: "mw-grid",
  props: {
    column: {
      type: [String, Number],
      default: 3
    },
    gap: {
      type: [String, Number],
      default: 0
    },
    center: {
      type: Boolean,
      default: true
    },
    square: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "vertical"
    },
    noBorder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      const { gap } = this;
      if (gap) {
        const gapValue = addUnit(gap);
        return {
          paddingLeft: gapValue
        };
      } else {
        return {};
      }
    }
  }
};
</script>

<style  lang="scss" rel="stylesheet/scss">

</style>
