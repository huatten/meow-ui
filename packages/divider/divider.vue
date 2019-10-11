<template>
  <div
    class="mw-divider"
    :class="[hasSlot && `mw-divider--${position}`, dashed && 'mw-divider--dashed', dotted && 'mw-divider--dotted']"
  >
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-divider",
  props: {
    position: {
      type: String,
      default: "center"
    },
    dashed: {
      type: Boolean,
      default: false
    },
    dotted: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    hasSlot() {
      return this.$slots.default;
    }
  },
  data() {
    return {};
  }
};
</script>