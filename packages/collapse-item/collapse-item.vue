<template>
  <div class="mw-collapse-item" :class="{'is-disabled': disabled}">
    <div class="mw-collapse-item-title mw-hairline--bottom" @click="toggle">
      <h5>{{ title }}</h5>
      <mw-icon name="next" class="collapse-arrow" :class="{'collapse-rotated' : show}"></mw-icon>
    </div>
    <div
      class="mw-collapse-item-cont"
      :class="{'mw-hairline--bottom' : height}"
      :style="{height: height + 'px'}"
    >
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.disabled ? false : this.open,
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
  mounted() {
    this.$nextTick(() => {
      this._setHeight();
    });
  },
  methods: {
    toggle() {
      this.$parent.open(this._uid);
      this._setHeight();
    },
    _setHeight() {
      this.height = this.show ? this.$refs.content.offsetHeight : 0;
    }
  }
};
</script>
