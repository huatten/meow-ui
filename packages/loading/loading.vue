<template>
  <div
    :class="[
      'mw-loading', 
      `mw-loading--${type}`, 
      vertical && 'mw-loading--vertical', 
      fullScreen && 'mw-loading--fullScreen'
    ]"
  >
    <mw-overlay opacity="0.5" v-if="fullScreen && hasMask"></mw-overlay>
    <div class="mw-loading__cont">
      <div class="mw-loading__icon">
        <template v-if="type === 'roller'">
          <mw-roller :size="size" :fill="fill" :width="width"></mw-roller>
        </template>
        <template v-if="type === 'carousel'">
          <mw-carousel :size="size" :fill="fill"></mw-carousel>
        </template>
        <template v-if="type === 'spinner'">
          <mw-spinner :size="size" :fill="fill"></mw-spinner>
        </template>
      </div>
      <div class="mw-loading__text" v-if="text" :style="`color:${color}`">{{text}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MOverlay from "../overlay";
import MTransition from "../transition";
import MRoller from "./roller";
import MCarousel from "./carousel";
import MSpinner from "./spinner";
export default {
  name: "mw-loading",
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
      type: [Number, String],
      default: 3
    },
    size: {
      type: [Number, String],
      default: 20
    },
    color: {
      type: String,
      default: "#666f83"
    },
    vertical: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    hasMask: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  components: {
    [MOverlay.name]: MOverlay,
    [MTransition.name]: MTransition,
    [MRoller.name]: MRoller,
    [MCarousel.name]: MCarousel,
    [MSpinner.name]: MSpinner
  }
};
</script>