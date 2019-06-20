<template>
  <div
    class="mw-switch"
    :class="[open && 'open', disabled && 'disabled']"
    :style="[sizeStyle, backgrundStyle]"
    @click="_change($event)"
  >
    <div class="mw-switch-node">
      <div class="mw-switch-loading" v-if="loading">
        <mw-loading :fill="background" :size="loadingSize"></mw-loading>
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
    return {
      open: this.value
    };
  },
  computed: {
    sizeStyle() {
      return {
        fontSize: this.size + "px"
      };
    },
    backgrundStyle() {
      return this.open && { background: this.background };
    },
    loadingSize() {
      return this.size * 1 - 12;
    }
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