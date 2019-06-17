<template>
  <button
    class="mw-button"
    :class="[
      `mw-button--${type}`, 
      (invalid || disabled) && 'mw-button--disabled',
      !inline && 'mw-button--block',
      plain && 'mw-button--plain',
      round && 'mw-button--round',
      loading && 'mw-button--loading',
      ripple && 'mw-button--ripple',
      `mw-button--${size}`
    ]"
    :type="nativeType"
    :disabled="invalid || disabled"
    v-on="$listeners"
  >
    <template v-if="ripple">
      <canvas class="ripple" @click="_ripple"></canvas>
    </template>
    <div class="mw-button__cont">
      <template v-if="iconName">
        <div class="mw-button__icon">
          <mw-icon :name="iconName" :svg="iconSvg" :size="iconSize"></mw-icon>
        </div>
      </template>
      <template v-if="loading">
        <div class="mw-button__icon">
          <mw-loading :type="loadingType" :size="loadingSize"></mw-loading>
        </div>
      </template>
      <p class="mw-button__text">
        <slot></slot>
      </p>
    </div>
  </button>
</template>

<script type="text/ecmascript-6">
import { getStyle, getStyleNumber } from "../_util/dom";
import MIcon from "../icon";
import MLoading from "../loading";
const DEFAULT_COLOR = "#000";
export default {
  name: "mw-button",
  props: {
    //样式类型
    type: {
      type: String,
      default: "default"
    },
    //是否为行内按钮
    inline: {
      type: Boolean,
      default: true
    },
    plain: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "normal"
    },
    round: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: "button"
    },
    invalid: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: ""
    },
    iconSvg: {
      type: Boolean,
      default: false //svg、font
    },
    iconSize:{
      type: [Number, String],
      default: 24
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingType: {
      type: String,
      default: "roller"
    },
    loadingSize: {
      type: [Number, String],
      default: 20
    },
    ripple: {
      type: Boolean,
      default: false
    },
    speed: {
      type: [Number, String],
      default: 11
    },
    opacity: {
      type: [Number, String],
      default: 0.3
    }
  },
  data() {
    return {
      color: "",
      radius: 0,
      oCanvas: null,
      context: null,
      initialized: false,
      speedOpacity: 0,
      timer: null,
      origin: {
        x: "",
        y: ""
      }
    };
  },
  component: { MIcon, MLoading },
  methods: {
    $_init(el) {
      const oBtn = el.parentElement;
      // 透明度的速度
      const w = getStyleNumber(oBtn, "width");
      this.speedOpacity = ((this.speed * 1) / w) * this.opacity;
      // 若为朴素按钮则取值当前color为默认色值
      this.color = this.plain
        ? DEFAULT_COLOR
        : getStyle(el.parentElement, "color");

      // 透明度的速度
      this.speedOpacity = ((this.speed * 1) / w) * this.opacity;
      // canvas 宽和高
      el.width = w;
      el.height = getStyleNumber(oBtn, "height");
      this.context = el.getContext("2d");
    },
    _ripple(event) {
      // 清除上次没有执行的动画
      if (this.timer) {
        window.cancelAnimationFrame(this.timer);
      }
      this.el = event.target;
      // 执行初始化
      if (!this.initialized) {
        this.initialized = true;
        this.$_init(this.el);
      }
      this.radius = 0;
      // 点击坐标原点
      this.origin.x = event.offsetX;
      this.origin.y = event.offsetY;
      this.context.clearRect(0, 0, this.el.width, this.el.height);
      this.el.style.opacity = this.opacity;
      this._draw();
    },
    _draw() {
      this.context.beginPath();
      // 绘制波纹
      this.context.arc(
        this.origin.x,
        this.origin.y,
        this.radius,
        0,
        2 * Math.PI,
        false
      );
      this.context.fillStyle = this.color;
      this.context.fill();
      // 定义下次的绘制半径和透明度
      this.radius += this.speed * 1;
      this.el.style.opacity -= this.speedOpacity;
      // 通过判断半径小于元素宽度或者还有透明度，不断绘制圆形
      if (this.radius < this.el.width || this.el.style.opacity > 0) {
        this.timer = window.requestAnimationFrame(this._draw);
      } else {
        // 清除画布
        this.context.clearRect(0, 0, this.el.width, this.el.height);
        this.el.style.opacity = 0;
      }
    }
  },
  destroyed() {
    // 清除上次没有执行的动画
    if (this.timer) {
      window.cancelAnimationFrame(this.timer);
      this.timer = null;
    }
  }
};
</script>