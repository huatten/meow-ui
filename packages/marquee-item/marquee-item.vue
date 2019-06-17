<template>
  <div class="mw-marquee-item" @click="itemClick">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "mw-marquee-item",
  methods: {
    itemClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
