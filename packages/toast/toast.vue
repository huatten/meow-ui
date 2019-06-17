<template>
  <mw-transition :name="transitionName">
    <div :class="['mw-toast', `mw-toast--${position}`, type]" v-show="toastShow">
      <template v-if="type==='loading'">
        <mw-loading
          :type="loadingType"
          :text="message"
          :size="size"
          :fullScreen="true"
          :hasMask="hasMask"
          :vertical="true"
          :color="'#fff'"
        ></mw-loading>
      </template>
      <template v-else>
        <mw-overlay opacity="0" v-if="hasMask"></mw-overlay>
        <div class="mw-toast__cont">
          <div class="mw-toast__icon" v-if="icon">
            <mw-icon :name="icon" size="22"></mw-icon>
          </div>
          <div class="mw-toast__text" v-text="message"></div>
        </div>
      </template>
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
    },
    loadingType: {
      type: String,
      default: "roller"
    },
    callback: {
      type: Function
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
    size(){
      return this.loadingType === "roller" ? "36" : this.loadingType === "carousel" ? "12" : "20";
    },
    icon() {
      const icon = this.type;
      return icon === "success"
        ? "selection"
        : icon === "failed"
        ? "cancel"
        : icon === "warning"
        ? "information"
        : "";
    },
    transitionName() {
      if (this.type === "loading") {
        return "mw-fade";
      } else {
        return this.position === "bottom" ? "mw-fade-bottom" : "mw-fade-top";
      }
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