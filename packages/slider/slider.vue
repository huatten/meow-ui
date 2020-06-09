<template>
  <div class="mw-slider" :class="[disabled && 'is-disabled']">
    <mw-transition name="mw-fade">
      <div class="mw-slider-tooltip" v-show="showtip && isDragging" :style="`left: ${handlePos}%`">
        <span>{{range[0]}}</span>
      </div>
    </mw-transition>
    <div class="mw-slider-track" :style="{height: `${barHeight}px`, background: unactiveColor}">
      <div class="mw-slider-bar" :style="{width: barWidth, background: activeColor}"></div>
    </div>
    <div
      class="mw-slider-handle"
      :data-value="range[0]"
      :class="{'is-dragging': isDragging}"
      :style="`left: ${handlePos}%`"
    >
      <div v-if="$slots.handle" class="handle-slot" @touchstart="_starMoveUp">
        <slot name="handle"></slot>
      </div>
      <template v-else>
        <span class="handle" @touchstart="_starMoveUp"></span>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MTransition from "../transition";
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
    step: {
      type: Number,
      default: 1
    },
    barHeight: {
      type: [Number, String],
      default: 1
    },
    activeColor: {
      type: String,
      default: "#ff8200"
    },
    unactiveColor: {
      type: String,
      default: "#f9f9f9"
    },
    showtip: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isDragging: false, // 是否正在拖拽
      startMousePos: 0, // 开始拖拽鼠标位置
      range: [this.min, this.max], // 拖动范围
      startValue: 0 // 滑块初始值
    };
  },
  watch: {
    value: {
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
    }
  },
  computed: {
    handlePos() {
      return ((this.range[0] - this.min) / (this.max - this.min)) * 100;
    },
    barWidth() {
      const { range, min, max } = this;
      return ((range[0] - min) / (max - min)) * 100 + "%";
    }
  },
  component: {
    [MTransition.name]: MTransition
  },
  methods: {
    _updateValue(newVal) {
      let newValues = [];
      if (Array.isArray(newVal)) {
        newValues = [newVal[0], newVal[1]];
      } else {
        newValues[0] = newVal;
      }
      if (typeof newValues[0] !== "number") {
        newValues[0] = this.range[0];
      } else {
        newValues[0] =
          Math.round((newValues[0] - this.min) / this.step) * this.step +
          this.min;
      }
      if (typeof newValues[1] !== "number") {
        newValues[1] = this.range[1];
      } else {
        newValues[1] =
          Math.round((newValues[1] - this.min) / this.step) * this.step +
          this.min;
      }
      // 边界值判定
      if (newValues[0] < this.min) {
        // < min
        newValues[0] = this.min;
      }
      if (newValues[1] > this.max) {
        // > max
        newValues[1] = this.max;
      }
      if (newValues[0] > newValues[1]) {
        // min > max
        if (newValues[0] === this.range[0]) {
          newValues[1] = newValues[0];
        } else {
          newValues[0] = newValues[1];
        }
      }

      if (this.range[0] === newValues[0] && this.range[1] === newValues[1]) {
        return;
      }
      this.range = newValues;
      this.$emit("input", this.range[0]);
    },
    _starMoveUp(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.disabled) { return; }
      e = e.changedTouches ? e.changedTouches[0] : e;
      this.startMousePos = e.pageX;
      this.startValue = this.range[0]; // 缓存起始位置
      this.isDragging = true;
      window.addEventListener("touchmove", this._onDrag, { passive: false });
      window.addEventListener("touchend", this._onDragUp, { passive: false });
    },
    _onDrag(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.disabled) { return; }
      if (!this.isDragging) { return; }
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
      this.$emit("change", this.range[0]);
      window.removeEventListener("touchmove", this._onDrag);
      window.removeEventListener("touchend", this._onDragUp);
    }
  }
};
</script>
