<template>
  <div
    class="mw-switch"
    :class="[open && 'open', disabled && 'disabled']"
    :style="`font-size:${size}px`"
    @click="_change($event)"
  >
    <div class="mw-switch-node">
      <div class="mw-switch-loading" v-if="loading">loding</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 30
    },
    loadingSize: {
      type: [Number, String],
      default: 40
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      open: this.value
    };
  },
  watch: {
    open(val) {
      this.$emit("input", val);
    }
  },
  methods: {
    _change(e) {
      if (this.disabled || this.loading) return;
      this.open = !this.open;
      this.$emit("change", e);
    }
  }
};
</script>