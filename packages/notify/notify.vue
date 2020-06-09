<template>
  <mw-transition name="mw-slide-top">
    <div :class="['mw-notify', `mw-notify--${type}`]" v-show="notifyShow">{{message}}</div>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import MTransition from "../transition";
export default {
  name: "mw-notify",
  props: {
    notifyShow: {
      // 展示
      type: Boolean,
      default: false
    },
    message: {
      // 展示文本
      type: String,
      default: ""
    },
    duration: {
      // 展示时长（ms）
      type: [Number, String],
      default: 2500
    },
    type: {
      // 展示类型（default success failed warning）
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    notifyShow(val) {
      this.show = val;
    }
  },
  components: { MTransition },
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
