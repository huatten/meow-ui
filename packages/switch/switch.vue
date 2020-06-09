<template>
  <div
    class="mw-switch"
    :class="[value && 'open', disabled && 'disabled']"
    :style="[sizeStyle, backgrundStyle]"
    @click="_change(value)"
  >
    <div class="mw-switch-node">
      <div class="mw-switch-loading" v-if="loading">
        <mw-loading :fill="value ? background: '#c8c9cc'" :size="loadingSize"></mw-loading>
      </div>
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
      default: 28
    },
    background: {
      type: String,
      default: "#ff8200"
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
    return {};
  },
  computed: {
    sizeStyle() {
      return {
        fontSize: this.size + "px"
      };
    },
    backgrundStyle() {
      return this.value && { background: this.background };
    },
    loadingSize() {
      return this.size * 1 - 12;
    }
  },
  methods: {
    _change() {
      if (this.disabled || this.loading) { return; }
      this.$emit("input", !this.value);
      this.$emit("change", this.value);
    }
  }
};
</script>
