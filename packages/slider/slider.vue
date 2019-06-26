<template>
  <div class="mw-slider" :class="[disabled && 'is-disabled']">
    <div class="mw-slider-bar" :style="barWidth"></div>
    <div
      class="mw-slider-handle"
      :data-value="range[0]"
      :class="{'is-dragging': isDragging}"
      :style="`left: ${handlePos}%`"
    >
      <span @touchstart="_starMoveUp"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-slider",
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDragging: false, //是否正在拖拽
      startMousePos: 0, //开始拖拽鼠标位置
      range: [this.min, this.max], //拖动范围
      startValue: 0
    };
  },
  watch: {
    handler(val) {
      if (
        (Array.isArray(val) &&
          (val[0] !== this.range[0] || val[1] !== this.range[1])) ||
        val !== this.range[0]
      ) {
        this._updateValue(val);
      }
    },
    immediate: true
  },
  computed: {
    handlePos() {
      return ((this.range[0] - this.min) / (this.max - this.min)) * 100;
    },
    barWidth() {
      const { range, min, max } = this;
      return {
        width: ((range[0] - min) / (max - min)) * 100 + "%"
      };
    }
  },
  methods: {
    _updateValue(newVal) {
      let newValues = [];
      if (Array.isArray(newVal)) {
        newValues = [newVal[0], newVal[1]];
      } else {
        newValues[0] = newVal;
      }
      //边界值判定
      if (newValues[0] < this.min) {
        //< min
        newValues[0] = this.min;
      }
      if (newValues[1] > this.max) {
        // > max
        newValues[1] = this.max;
      }

      if (this.range[0] === newValues[0] && this.range[1] === newValues[1]) {
        return;
      }
      this.range = newValues;
      this.$emit("input", this.range[0]);
    },
    _starMoveUp(e) {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.startMousePos = e.pageX;
      this.startValue = this.range[0]; //缓存起始位置
      this.isDragging = true;
      window.addEventListener("touchmove", this._onDrag, { passive: false });
      window.addEventListener("touchend", this._onDragUp, { passive: false });
    },
    _onDrag(e) {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      if (!this.isDragging) return;
      e = e.changedTouches ? e.changedTouches[0] : e;
      window.requestAnimationFrame(() => {
        let diff =
          ((e.pageX - this.startMousePos) / this.$el.offsetWidth) *
          (this.max - this.min);
        let nextValue = this.startValue + diff;
        if (this.isDragging) {
          this._updateValue([nextValue, null]);
        }
      });
    },
    _onDragUp(e) {
      e.preventDefault();
      e.stopPropagation();
      this._stopDrag();
    },
    _stopDrag(e) {
      this.isDragging = false;
      window.removeEventListener("touchmove", this._onDrag);
      window.removeEventListener("touchend", this._onDragUp);
    }
  }
};
</script>