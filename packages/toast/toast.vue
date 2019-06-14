<template>
  <mw-transition :name="transitionName">
    <div :class="['mw-toast', `mw-toast--${position}`, type]" v-show="toastShow">
      <mw-overlay opacity="0" v-if="hasMask"></mw-overlay>
      <div class="mw-toast__cont">
        <div class="mw-toast__icon" v-if="iconshow">
          <mw-icon :name="type"></mw-icon>
        </div>
        <div class="mw-toast__text" v-text="message"></div>
      </div>
    </div>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import MTransition from "../transition";
import MOverlay from "../overlay";
import MIcon from "../icon";
import MLoading from "../loading";
export default {
  name: "mw-toast",
  props: {
    toastShow: {
      //展示
      type: Boolean,
      default: false
    },
    message: {
      //展示文本
      type: String,
      default: ""
    },
    position: {
      //展示位置
      type: String,
      default: "center"
    },
    duration: {
      //展示时长（ms）
      type: [Number, String],
      default: 2500
    },
    type: {
      //展示类型（success failed warning loading）
      type: String,
      default: ""
    },
    hasMask: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.toastShow
    };
  },
  watch: {
    toastShow(val) {
      this.show = val;
    }
  },
  computed: {
    iconshow() {
      const icon = this.type;
      const ICON = ["success", "failed", "warning", "loading"];
      return ICON.includes(icon);
    },
    transitionName() {
      return this.position === "bottom" ? "mw-fade-bottom" : "mw-fade-top";
    }
  },
  components: {
    [MTransition.name]: MTransition,
    [MOverlay.name]: MOverlay,
    [MIcon.name]: MIcon,
    [MLoading.name]: MLoading
  },
  methods: {
    _show() {
      this.show = true;
    }
  },
  beforeDestroy() {
    this.$el.remove();
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>