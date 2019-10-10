<template>
  <div class="mw-divider" :class="`mw-divider--${position}`">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-divider",
  props:{
    position: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {};
  }
};
</script>