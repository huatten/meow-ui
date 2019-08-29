<template>
  <div class="mw-collapse">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: "mw-collapse",
  props: {
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    open(uid) {
      this.$children.forEach(item => {
        if (item.disabled) {
          return false;
        }
        if (item._uid === uid) {
          item.show = !item.show;
        } else {
          if (this.accordion) {
            item.show = false;
            item.height = 0;
          }
        }
      });
    }
  }
};
</script>
