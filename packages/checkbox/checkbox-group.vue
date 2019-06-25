<template>
  <div class="mw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-checkbox-group",
  props: {
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 0
    }
  },
  methods: {
    check(name) {
      const index = this.value.indexOf(name);
      if (index === -1 && (this.max < 1 || this.value.length < this.max)) {
        this.$emit("input", this.value.concat(name));
      } else {
        this.$emit("input", this.value);
      }
    },
    uncheck(name) {
      const index = this.value.indexOf(name);
      if (index !== -1) {
        this.$emit(
          "input",
          this.value.slice(0, index).concat(this.value.slice(index + 1))
        );
      }
    },
    toggle(name) {
      const index = this.value.indexOf(name);
      if (index === -1) {
        this.check(name);
      } else {
        this.uncheck(name);
      }
    }
  }
};
</script>