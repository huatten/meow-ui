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
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    check(name) {
      const index = this.value.indexOf(name)
      if (index === -1 && (this.max < 1 || this.value.length < this.max)) {
        this.$emit('input', this.value.concat(name))
      }
    },
    uncheck(name) {
      const index = this.value.indexOf(name)
      if (index !== -1) {
        this.$emit('input', this.value.slice(0, index).concat(this.value.slice(index + 1)))
      }
    },
    toggle(name) {
      const index = this.value.indexOf(name)
      if (index === -1) {
        this.check(name)
      } else {
        this.uncheck(name)
      }
    }
  }
};
</script>