<template>
  <svg
    version="1.1"
    v-if="svg"
    aria-hidden="true"
    class="mw-icon mw-icon-svg"
    :class="[`mw-svg-${name}`]"
    :style="{fill: color}"
    :width="size"
    :height="size"
    @click="$emit('click', $event)"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
  <i
    v-else
    class="mw-icon mw-icon-font"
    :class="`mw-icon-${name}`"
    :style="{'font-size': size + 'px', color}"
    @click="$emit('click', $event)"
  ></i>
</template>
<script type="text/ecmascript-6">
export default {
  name: "mw-icon",
  props: {
    svg: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      default: ""
    },
    size: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>