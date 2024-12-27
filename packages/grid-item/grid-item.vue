<template>
  <div
    class="mw-grid-item"
    :class="{ 'mw-grid-item--square': square }"
    :style="itemStyle"
  >
    <div
      class="mw-grid-item-content"
      :class="[
        direction,
        center && 'mw-grid-item-content--center',
        square && 'mw-grid-item-content--square',
        !noBorder && !gap && 'mw-hairline',
      ]"
      :style="contentStyle"
    >
      <slot v-if="$scopedSlots.icon || $slots.icon" name="icon"></slot>
      <mw-icon v-else class="item-icon" :name="icon" size="42"></mw-icon>
      <slot v-if="$scopedSlots.text || $slots.text" name="text"></slot>
      <p v-else class="item-text">{{ text }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MIcon from "../icon";
import { addUnit } from "../_util/format";
export default {
  name: "mw-grid-item",
  props: {
    text: {
      type: String
    },
    icon: {
      type: String
    },
    index: {
      type: [String, Number],
      validator: function (val) {
        return /^[1-9]\d*$/.test(val * 1);
      }
    }
  },
  components: {
    [MIcon.name]: MIcon
  },
  computed: {
    itemStyle() {
      const { column, square, gap } = this.$parent;
      const percent = `${100 / column}%`;

      const style = {
        flexBasis: percent
      };
      if (square) {
        style.paddingTop = percent;
      } else if (gap) {
        const gapValue = addUnit(gap);
        style.paddingRight = gapValue;

        if (this.index > column) {
          style.marginTop = gapValue;
        }
      }
      return style;
    },
    contentStyle() {
      const { square, gap } = this.$parent;
      if (square && gap) {
        const gapValue = addUnit(gap);
        return {
          right: gapValue,
          bottom: gapValue,
          height: "auto"
        };
      } else {
        return {};
      }
    },
    square() {
      const { square } = this.$parent;
      return square;
    },
    center() {
      const { center } = this.$parent;
      return center;
    },
    noBorder() {
      const { noBorder } = this.$parent;
      return noBorder;
    },
    direction() {
      const { direction } = this.$parent;
      return direction;
    },
    gap() {
      const { gap } = this.$parent;
      return gap;
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
</style>
