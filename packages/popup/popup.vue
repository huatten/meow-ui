<template>
  <div :class="['mw-popup', `mw-popup--${position}`]" v-show="isPopupShow">
    <mw-overlay :showMask="hasMask && isPopupBoxShow" @tapMask="_onPopupMaskClick"></mw-overlay>
    <mw-transition
      :name="transition"
      @before-enter="_onPopupTransitionStart"
      @before-leave="_onPopupTransitionStart"
      @after-enter="_onPopupTransitionEnd"
      @after-leave="_onPopupTransitionEnd"
    >
      <div class="mw-popup__box" v-show="isPopupBoxShow">
        <slot></slot>
      </div>
    </mw-transition>
  </div>
</template>

<script type="text/ecmascript-6">
import MOverlay from "../overlay";
import MTransition from "../transition";
export default {
  name: "mw-popup",
  props: {
    position: {
      //弹出层位置
      type: String,
      default: "center"
    },
    transition: {
      //弹出层动画类型
      type: String,
      default() {
        switch (this.position) {
          case "bottom":
            return "mw-slide-bottom";
          case "top":
            return "mw-slide-top";
          case "left":
            return "mw-slide-left";
          case "right":
            return "mw-slide-right";
          default:
            return "mw-fade"; // mw-zoom
        }
      }
    },
    value: {
      //v-model
      type: Boolean,
      default: false
    },
    hasMask: {
      //弹出层是否含有蒙层
      type: Boolean,
      default: true
    },
    maskClosable: {
      //弹出层是否可关闭
      type: Boolean,
      default: true
    },
    position: {
      //弹出层位置
      type: String,
      default: "center"
    },
    appendToBody: {
      //弹出层是否挂载到body
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPopupShow: false, // 控制蒙层和弹出层盒子
      isPopupBoxShow: false, //控制弹出层盒子
      isAnimation: false //过渡锁定
    };
  },
  watch: {
    value(val) {
      if (val) {
        if (this.isAnimation) {
          setTimeout(() => {
            this._showPopupBox();
          }, 50);
        } else {
          this._showPopupBox();
        }
      } else {
        this._hidePopupBox();
      }
    }
  },
  components: { MOverlay, MTransition },
  mounted() {
    this.value && this._showPopupBox();
  },
  beforeDestroy() {
    this._hidePopupBox();
  },
  methods: {
    _showPopupBox() {
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
      this.isPopupShow = true;
      this.isAnimation = true;
      // box after popup show
      this.isPopupBoxShow = true;
    },
    _hidePopupBox() {
      this.isAnimation = true;
      this.isPopupBoxShow = false;
      setTimeout(() => {
        if (this.appendToBody && this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 300);
      this.$emit("input", false);
    },
    _onPopupTransitionStart() {
      if (!this.isPopupBoxShow) {
        this.$emit("close");
      } else {
        this.$emit("open");
      }
    },
    _onPopupTransitionEnd() {
      if (!this.isAnimation) return;
      if (!this.isPopupBoxShow) {
        this.isPopupShow = false;
        this.$emit("closed");
      } else {
        this.$emit("opened");
      }
      this.isAnimation = false;
    },
    _onPopupMaskClick() {
      if (this.maskClosable) {
        this._hidePopupBox();
        this.$emit("clickMask");
      }
    }
  }
};
</script>