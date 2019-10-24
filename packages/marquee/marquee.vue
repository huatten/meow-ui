<template>
  <div class="mw-marquee" :style="{height: `${height}px`}" v-on="$listeners">
    <div class="mw-marquee__cont" :style="transition" :class="`mw-marquee-align--${align}`">
      <div class="mw-marquee-item" v-html="lastItem" v-if="total>1" @click="itemClick"></div>
      <slot></slot>
      <div class="mw-marquee-item" v-html="firstItem" @click="itemClick"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import RAF from "../_util/raf";
export default {
  name: "mw-marquee",
  props: {
    height: {
      type: [String, Number],
      default: 35
    },
    align: {
      type: String,
      default: "left"
    },
    speed: {
      type: [String, Number],
      default: 500
    },
    duration: {
      type: [String, Number],
      default: 2500
    },
    direction: {
      type: String,
      default: "up"
    }
  },
  data() {
    return {
      timer: null,
      index: 1,
      total: 0,
      firstItem: "",
      lastItem: "",
      transition: {
        transform: 0,
        transitionDuration: 0
      }
    };
  },
  mounted() {
    this.$_init();
  },
  beforeDestroy() {
    this._destroy();
  },
  methods: {
    $_init() {
      this._destroy();
      this.items = this.$children.filter(
        item => item.$options.name === "mw-marquee-item"
      );
      this.total = this.items.length;
      if (this.total <= 1) return; //list小于1条时不滚动
      this.firstItem = this.items[0].$el.innerHTML;
      this.lastItem = this.items[this.total - 1].$el.innerHTML;
      this._setTranslate(0, -this.height);
      this._onScroll();
    },
    _onScroll() {
      this.timer = RAF.setInterval(() => {
        if (this.direction === "up") {
          this.index++;
          this._setTranslate(this.speed, -(this.index * this.height));
          if (this.index >= this.total) {
            this.index = 0;
            RAF.setTimeout(() => {
              this._setTranslate(0, 0);
            }, this.speed);
          }
        } else {
          this.index--;
          this._setTranslate(this.speed, -(this.index * this.height));
          if (this.index <= 0) {
            this.index = this.total;
            RAF.setTimeout(() => {
              this._setTranslate(0, -this.total * this.height);
            }, this.speed);
          }
        }
      }, this.duration);
    },
    _setTranslate(speed, translate) {
      this.transition.transitionDuration = `${speed}ms`;
      this.transition.transform = `translate3d(0, ${translate}px, 0)`;
    },
    itemClick(e) {
      this.$emit("click", e);
    },
    _destroy() {
      RAF.clearInterval(this.timer);
    }
  }
};
</script>
