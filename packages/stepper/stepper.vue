<template>
  <div class="mw-stepper" :class="{'disabled': disabled}">
    <button
      type="button"
      class="mw-stepper-button minus"
      :class="{'disabled': isMin}"
      @click="minus"
    ></button>
    <div class="mw-stepper-number">
      <input
        type="tel"
        :value="currentValue"
        :size="valueLength"
        :disabled="disabled"
        :readonly="readOnly"
        @input="onInput"
        @focus="onFocus"
        @blur="onChange"
      />
    </div>
    <button type="button" class="mw-stepper-button plus" :class="{'disabled': isMax}" @click="plus"></button>
  </div>
</template>

<script type="text/ecmascript-6">
const INFINITY = Number.MAX_VALUE;
export default {
  name: "mw-stepper",
  props: {
    // 双向绑定数据
    value: {
      type: [Number, String],
      default: 0
    },
    // 步长
    step: {
      type: [Number, String],
      default: 1
    },
    // 最小值
    min: {
      type: [Number, String],
      default: -INFINITY
    },
    // 最大值
    max: {
      type: [Number, String],
      default: INFINITY
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readOnly: {
      type: Boolean,
      default: false
    },
    // 是否整数
    isInit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isMax: false,
      isMin: false,
      isInputing: false,
      currentValue: 0
    };
  },
  computed: {
    valueLength() {
      if (!this.value) {
        return 2;
      }
      const length = this.value.toString().trim().length;
      return length > 2 ? length : 2;
    }
  },
  watch: {
    value: {
      handler(nv) {
        if (this.isInputing) {
          return false;
        }
        this.currentValue = this.getCurrentValue(nv);
      },
      immediate: true
    },
    min: {
      handler(nv) {
        if (this.currentValue < nv) {
          this.currentValue = nv;
        }
        this.checkStatus();
      },
      immediate: true
    },
    max: {
      handler(nv) {
        if (this.currentValue > nv) {
          this.currentValue = nv;
        }
        this.checkStatus();
      },
      immediate: true
    },
    currentValue: {
      handler(nv, ov) {
        this.checkStatus();
        if (nv !== this.value) {
          this.$emit("input", nv);
          this.$emit("change", nv);
        }
        const diff = nv - ov;
        if (diff > 0) {
          this.$emit("plus", diff);
        } else if (diff < 0) {
          this.$emit("minus", diff);
        }
      },
      immediate: true
    }
  },
  methods: {
    plus() {
      if (this.disabled || this.isMax) {
        return false;
      }
      this.currentValue = this._plusDecimal(this.currentValue, this.step);
      this.onChange();
    },
    minus() {
      if (this.disabled || this.isMin) {
        return false;
      }
      this.currentValue = this._minusDecimal(this.currentValue, this.step);
      this.onChange();
    },
    getCurrentValue(value) {
      return Math.max(Math.min(this.max, this._formatValue(value)), this.min);
    },
    checkStatus() {
      this.isMin = this.currentValue <= this.min;
      this.isMax = this.currentValue >= this.max;
    },
    onInput(event) {
      const { value } = event.target;
      const formatted = isNaN(value) ? value : this._formatValue(value);
      if (+value !== formatted) {
        event.target.value = formatted;
      }
      this.currentValue = formatted;
    },
    onFocus() {
      this.isInputing = true;
    },
    onChange() {
      this.isInputing = false;
      this.currentValue = this.getCurrentValue(this.currentValue);
    },
    _formatValue(n) {
      n = String(n).replace(/[^0-9.-]/g, "");
      return n === "" ? 0 : this.isInit ? Math.floor(n) : +n;
    },
    _getDecimalPlaces(n) {
      try {
        return n.toString().trim().split(".")[1].length;
      } catch (error) {
        return 0;
      }
    },
    _plusDecimal(n1, n2) {
      let r1 = this._getDecimalPlaces(n1);
      let r2 = this._getDecimalPlaces(n2);
      let m = Math.pow(10, Math.max(r1, r2));
      return +((n1 * m + n2 * m) / m);
    },
    _minusDecimal(n1, n2) {
      let r1 = this._getDecimalPlaces(n1);
      let r2 = this._getDecimalPlaces(n2);
      let m = Math.pow(10, Math.max(r1, r2));
      let n = r1 >= r2 ? r1 : r2;
      return +((n1 * m - n2 * m) / m).toFixed(n);
    }
  }
};
</script>
