<template>
  <div class="mw-indicator" :class="`mw-indicator--${type}`">
    <div class="mw-indicator__cont">
      <div class="mw-indicator__icon">
        <template v-if="type === 'roller'">
          <mw-roller :size="size" :fill="fill" :width="width"></mw-roller>
        </template>
        <template v-if="type === 'carousel'">
          <mw-carousel :size="size" :fill="fill"></mw-carousel>
        </template>
        <template v-if="type === 'spinner'">
          <mw-spinner :size="size"></mw-spinner>
        </template>
      </div>
      <div class="mw-indicator__text" v-if="text" :style="`color:${color}`">{{text}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MwRoller from "./roller";
import MwCarousel from "./carousel";
import MwSpinner from "./spinner";
export default {
  name: "mw-indicator",
  props: {
    type: {
      type: String,
      default: "roller"
    },
    text: {
      type: String,
      default: ""
    },
    fill: {
      type: String,
      default: "#fff"
    },
    width: {
      type: Number,
      default: 3
    },
    size: {
      type: [Number, String],
      default: 30
    },
    color: {
      type: String,
      default: "#666f83"
    }
  },
  data() {
    return {};
  },
  components: {
    MwRoller,
    MwCarousel,
    MwSpinner
  }
};
</script>