<template>
  <mw-popup
    v-model="notifyShow"
    :hasMask="false"
    position="top"
    @input="_onInput"
    @open="_onOpen"
    @close="_onClose"
  >
    <div :class="['mw-notify', `mw-notify--${type}`]">{{message}}</div>
  </mw-popup>
</template>

<script type="text/ecmascript-6">
import MPopup from "../popup";
export default {
  name: "mw-notify",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    message: {
      //展示文本
      type: String,
      default: ""
    },
    duration: {
      //展示时长（ms）
      type: [Number, String],
      default: 3000
    },
    type: {
      //展示类型（default success failed warning）
      type: String,
      default: "default"
    }
  },
  data() {
    return {
      notifyShow: this.value
    };
  },
  watch: {
    value(newVal) {
      this.notifyShow = newVal;
    }
  },
  components: { MPopup },
  methods: {
    _onInput(val) {
      this.$emit("input", val);
    },
    _onOpen() {
      this.$emit("show");
    },
    _onClose() {
      this.$emit("hide");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
</style>