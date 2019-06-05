<template>
  <mw-transition name="mw-fade">
    <div
      :class="['mw-noticebar', circular && 'mw-noticebar--circular']"
      :style="barStyle"
      @click="_onClickBar"
      v-if="bShow"
    >
      <div :class="['noticebar-left', (!leftIcon && !leftSolt) && 'noticebar-left-empty']">
        <!-- left solt -->
        <template v-if="leftSolt">
          <slot name="left"></slot>
        </template>
        <template v-else-if="leftIcon">
          <span :class="[svg ? 'noticebar-left-svgicon' : 'noticebar-left-iconfont']">
            <mw-icon :name="leftIcon" :svg="svg" :size="leftSize"></mw-icon>
          </span>
        </template>
      </div>
      <div
        :class="['noticebar-cont',(!scrollable && wrapable) && 'noticebar-cont--wrapable']"
        ref="wrapper"
      >
        <div
          :class="[
            (!scrollable && !wrapable) && 'noticebar-cont--ellipsis',
            (overflow && scrollable) && 'noticebar-cont--scroll',
            (overflow && scrollable && !firstRound) && 'noticebar-cont-scroll--infinite'
          ]"
          :style="contentStyle"
          @animationend="_onAnimationEnd"
          @webkitAnimationEnd="_onAnimationEnd"
          ref="content"
        >
          <slot></slot>
        </div>
      </div>
      <div class="noticebar-right">
        <!-- right solt -->
        <template v-if="rightSolt">
          <slot name="right"></slot>
        </template>
        <template v-else-if="mode">
          <span
            :class="[
              svg ? 'noticebar-right-svgicon': 'noticebar-right-iconfont',
              `right-icon-${rightIcon}`
            ]"
            @click.stop="_onClickIcon"
          >
            <mw-icon :name="rightIcon" :size="rightSize"></mw-icon>
          </span>
        </template>
      </div>
    </div>
  </mw-transition>
</template>
<script type="text/ecmascript-6">
import MTransition from "../transtion";
export default {
  name: "mw-noticebar",
  props: {
    //右边提示类型
    mode: {
      type: String,
      default: "" //close, link
    },
    //背景色
    background: {
      type: String,
      default: "#fffbe8"
    },
    //文字颜色
    color: {
      type: String,
      default: "#ff8200"
    },
    //显示时长
    time: {
      type: [String, Number],
      default: 0
    },
    //圆角展示
    circular: {
      type: Boolean,
      default: false
    },
    //是否开启文本换行，只在禁用滚动时生效
    wrapable: {
      type: Boolean,
      default: false
    },
    //内容超出滚动展示
    scrollable: {
      type: Boolean,
      default: true
    },
    //动画延迟时间 (s)
    delay: {
      type: [String, Number],
      default: 1
    },
    //动画滚动速度 (px/s)
    speed: {
      type: [String, Number],
      default: 80
    },
    //左侧 icon
    leftIcon: {
      type: String,
      default: ""
    },
    //icon 类型 svg/font
    svg: {
      type: Boolean,
      default: false
    },
    // left icon 大小
    leftSize: {
      type: [String, Number],
      default: 24
    },
    // right icon 大小
    rightSize: {
      type: [String, Number],
      default: 24
    }
  },
  data() {
    return {
      firstRound: true,
      wrapWidth: 0,
      contentWidth: 0,
      duration: 0,
      bShow: true,
      overflow: false
    };
  },
  component: { MTransition },
  computed: {
    rightIcon() {
      return this.mode === "link" ? "link" : "close";
    },
    barStyle() {
      return {
        color: this.color,
        background: this.background
      };
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapWidth + "px",
        animationDelay: (this.firstRound ? this.delay : 0) + "s",
        animationDuration: this.duration + "s"
      };
    },
    leftSolt() {
      return !!this.$slots.left;
    },
    rightSolt() {
      return !!this.$slots.right;
    }
  },
  updated() {
    this._checkOverflow();
  },
  mounted() {
    this.time && this._hide(this.time);
    this._checkOverflow();
  },
  methods: {
    _hide(time) {
      setTimeout(() => {
        this.bShow = false;
      }, time);
    },
    _onClickBar() {
      this.$emit("click");
    },
    _onClickIcon() {
      if (this.mode === "close") {
        this.bShow = false;
      }
      this.$emit("close");
    },
    _checkOverflow() {
      if (!this.scrollable) return;
      const { wrapper, content } = this.$refs;
      if (!wrapper || !content) return;
      const wrapWidth = wrapper.clientWidth;
      const contentWidth = content.scrollWidth;

      if (this.scrollable && wrapWidth < contentWidth) {
        //可滚动
        this.overflow = true;
        this.wrapWidth = wrapWidth;
        this.contentWidth = contentWidth;
        this.duration = contentWidth / this.speed;
      }
    },
    _onAnimationEnd() {
      this.firstRound = false;
      this.$nextTick(() => {
        this.duration = (this.contentWidth + this.wrapWidth) / this.speed;
      });
    }
  }
};
</script>