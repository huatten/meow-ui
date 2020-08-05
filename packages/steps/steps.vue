<template>
  <div
    class="mw-steps"
    :class="[`mw-steps-${direction}`, (adaptive && direction === 'vertical') &&'vertical-adaptive', arrangeLeft && 'arrange-left']"
  >
    <template v-for="(step, index) in steps">
      <div
        class="step-item"
        :key="`step-${index}`"
        :class="[index < currentLength ? 'reached' : index === Math.floor(currentLength) ? 'current' : 'unreached']"
      >
        <div class="desc-wrap" v-if="direction==='vertical' && arrangeLeft">
          <p class="text">{{step.desc}}</p>
        </div>
        <div v-if="$scopedSlots.icon" class="icon-wrap">
          <slot name="icon" :index="index" :currentIndex="currentLength"></slot>
        </div>
        <div v-else class="icon-wrap">
          <template v-if="index < currentLength">
            <slot v-if="$scopedSlots.reached || $slots.reached" name="reached" :index="index"></slot>
            <div v-else class="step-node-default">
              <div class="step-node-default-icon"></div>
            </div>
          </template>
          <template v-else-if="index === currentLength">
            <slot v-if="$scopedSlots.current || $slots.current" name="current" :index="index"></slot>
            <mw-icon v-else name="selection" color="#ff8200"></mw-icon>
          </template>
          <template v-else>
            <slot v-if="$scopedSlots.unreached || $slots.unreached" name="unreached" :index="index"></slot>
            <div v-else class="step-node-default">
              <div class="step-node-default-icon"></div>
            </div>
          </template>
        </div>
        <div class="text-wrap">
          <p class="text">{{step.text}}</p>
          <p class="desc" v-if="direction === 'vertical' && step.desc && !arrangeLeft">{{step.desc}}</p>
        </div>
      </div>
      <div
        class="bar-item"
        :key="`bar-${index}`"
        :class="[index < currentLength && 'reached', `bar-item-${direction}`]"
      >
        <i class="bar-inner"></i>
      </div>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import MIcon from "../icon";
export default {
  name: "mw-steps",
  props: {
    // 进度条数据
    steps: {
      type: Array,
      default() {
        return [];
      }
    },
    // 当前进度
    current: {
      type: Number,
      default: 0,
      validator(val) {
        return val >= 0;
      }
    },
    // 进度条布局方向
    direction: {
      type: String,
      default: "horizontal"
    },
    // 竖直方向是否自适应
    adaptive: {
      type: Boolean,
      default: false
    },
    // 进度条左侧排列
    arrangeLeft: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentLength: 0
    };
  },
  watch: {
    current(newVal, oldVal) {
      const currentStep = this._formatValue(newVal);
      this.currentLength = currentStep;
    }
  },
  component: {
    [MIcon.name]: MIcon
  },
  created() {
    const currentStep = this._formatValue(this.current);
    this.currentLength = currentStep;
  },
  methods: {
    _formatValue(val) {
      if (val < 0) {
        return 0;
      } else if (val > this.steps.length - 1) {
        return this.steps.length - 1;
      } else {
        return val;
      }
    }
  }
};
</script>
