<template>
  <div class="mw-progress" :data-percent="value">
    <div
      class="mw-progress-text-top"
      v-if="showPercent && percentPosition==='top'"
      :style="{width: barWidth, fontSize: (percentSize*1) + 'px'}"
    >
      <span class="title">{{title}}</span>
      <span class="percent">{{barWidth}}</span>
    </div>
    <div class="mw-progress-cont" :class="{'round': round}">
      <div class="mw-progress-bar" :style="{height: barHeight, background: unactiveColor}">
        <div
          class="mw-progress-bar-inner"
          :class="{'animate': animate}"
          :style="{width: barWidth, background: activeColor, fontSize: (percentSize*1) + 'px'}"
        >
          <template v-if="showPercent && percentPosition==='inner'">
            <span class="title">{{title}}</span>
            <span class="percent">{{barWidth}}</span>
          </template>
        </div>
      </div>
      <div
        class="mw-progress-text-right"
        v-if="showPercent && percentPosition==='right'"
        :style="{fontSize: (percentSize*1) + 'px'}"
      >{{barWidth}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-progress",
  props: {
    value: {
      // 双向绑定进度条的值
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    height: {
      // 进度条高度
      type: [Number, String],
      default: 14
    },
    round: {
      // 是否显示圆角
      type: Boolean,
      default: false
    },
    animate: {
      // 是否开启进度条动画
      type: Boolean,
      default: false
    },
    activeColor: {
      // 进度条颜色
      type: String,
      default: "#ff8200"
    },
    unactiveColor: {
      // 进度条底部轨道颜色
      type: String,
      default: "#ebebeb"
    },
    showPercent: {
      // 是否显示百分比
      type: Boolean,
      default: true
    },
    percentPosition: {
      // 百分比显示位置 top/inner/right
      type: String,
      default: "right"
    },
    percentSize: {
      // 百分比文字大小
      type: [String, Number],
      default: 14
    }
  },
  watch: {
    value: {
      handler(val) {
        val && this.updateValue(val);
      },
      immediate: true
    }
  },
  computed: {
    barWidth() {
      return this.value + "%";
    },
    barHeight() {
      return this.height + "px";
    },
    textTop() {
      return -this.height + "px";
    }
  },
  methods: {
    updateValue(newVal) {
      this.$emit("input", newVal);
    }
  }
};
</script>
