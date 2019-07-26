<template>
  <div class="mw-collapse-item">
    <div class="mw-collapse-item-title mw-hairline--bottom" @click="toggle">
      <h5>{{ title }}</h5>
      <mw-icon name="next"></mw-icon>
    </div>
    <div class="mw-collapse-item-cont" :style="{ height: height }">
      <div ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import MIcon from "../icon";
export default {
  name: "mw-collapse-item",
  props: {
    title: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.open,
      height: 0
    };
  },
  watch: {
    open(val) {
      this.show = val;
    }
  },
  component: {
    [MIcon.name]: MIcon
  },
  mouted() {
    this._setHeight();
  },
  methods: {
    toggle() {
      this.$parent.open(this._uid);
      this._setHeight();
    },
    _setHeight() {
      this.height = `${this.show ? this.$refs.content.offsetHeight : 0}px`;
    }
  }
};
</script>
