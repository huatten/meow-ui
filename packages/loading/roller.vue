<template>
  <div class="mw-loading-roller" :style="`color:${fill}`">
    <svg
      viewBox="25 25 50 50"
      :style="{width: `${size}px`, height: `${size}px`}"
      class="roller-svg"
    >
      <circle cx="50" cy="50" r="20" :stroke-width="width" fill="none"></circle>
    </svg>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-roller",
  props: {
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
      default: 30
    }
  }
};
</script>
