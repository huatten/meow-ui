<template>
  <div class="mw-showhide" :class="[!showAll && 'mw-showhide--close']">
    <div
      class="mw-showhide-content"
      :aria-label="text"
      :style="`lineHeight: ${lineHeight}px; maxHeight: ${lineHeight * maxLine}px`"
      ref="cont"
      :id="compId"
    >
      <span class="mw-showhide-content-desc">
        <template v-if="$slots.default">
          <slot></slot>
        </template>
        <template v-else>{{text}}</template>
      </span>
      <div class="mw-showhide-fold" @click="toggle" v-if="text && showtoggleFold">
        <p :style="{color: btnColor}">{{toggleFold ? showText : hideText}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-showhide",
  props: {
    text: {
      type: String,
      default: ""
    },
    lineHeight: {
      type: Number,
      default: 21
    },
    maxLine: {
      type: Number,
      default: 4
    },
    showText: {
      type: String,
      default: "展开"
    },
    hideText: {
      type: String,
      default: "收起"
    },
    btnColor: {
      type: String,
      default: "#ff8200"
    }
  },
  data() {
    return {
      showAll: true,
      toggleFold: true,
      showtoggleFold: true,
      compId: "uid"
    };
  },
  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          let cont = this.$refs.cont;
          let contHeight = window
            .getComputedStyle(cont, null)
            .height.replace("px", "");
          if (contHeight >= this.maxLine * this.lineHeight) {
            this.setPseudoStyle();
            this.showtoggleFold = true;
            this.toggleFold = true;
            this.showAll = false;
          } else {
            this.showtoggleFold = false;
            this.showAll = true;
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    toggle() {
      this.showAll = !this.showAll;
      this.toggleFold = !this.toggleFold;
    },
    setPseudoStyle() {
      this.compId = `__cont${this._uid}__`;
      let paddingRight =
        Math.max(this.showText.length, this.hideText.length) + 1;
      let textIndent = (this.maxLine - 1) * paddingRight;
      let maxHeight = (this.maxLine - 1) * this.lineHeight;
      let lineClamp = this.maxLine;
      document.styleSheets[0].addRule(
        `#${this.compId}:before`,
        `max-height:${maxHeight}px;`
      );
      document.styleSheets[0].insertRule(
        `#${this.compId}:before{max-height:${maxHeight}px}`
      );
      document.styleSheets[0].addRule(
        `#${this.compId}:after`,
        `text-indent:${textIndent}em; padding-right:${paddingRight}em; -webkit-line-clamp:${lineClamp}; line-clamp:${lineClamp}`
      );
      document.styleSheets[0].insertRule(
        `#${this.compId}:after{text-indent:${textIndent}em, padding-right:${paddingRight}em, line-clamp:${lineClamp}, -webkit-line-clamp:${lineClamp}}`
      );
    }
  }
};
</script>
