<template>
  <div class="mw-dialog">
    <mw-popup
      :value="value"
      :hasMask="hasMask"
      :maskClosable="maskClosable"
      position="center"
      @show="onShow"
      @hide="onHide"
    >
      <div class="mw-dialog-content">
        <div class="mw-dialog-body">
          <span class="mw-dialog-close"></span>
          <h3 class="mw-dialog-title">{{title}}</h3>
        </div>
        <div class="mw-dialog-actions"></div>
      </div>
    </mw-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import MPopup from "../popup";
export default {
  name: "mw-dialog",
  props: {
    value: {
      //双向绑定是否显示窗口
      type: Boolean,
      default: false
    },
    title: {
      //窗口标题
      type: String,
      default: "窗口标题"
    },
    closable: {
      //是否显示关闭按钮
      type: Boolean,
      default: false
    },
    hasMask: {
      //是否显示蒙层
      type: Boolean,
      default: true
    },
    maskClosable: {
      //弹出层是否可关闭
      type: Boolean,
      default: false
    },
    transition: {
      //弹出层动画类型
      type: String,
      default: "mw-fade"
    }
  },
  data() {
    return {};
  },
  components: { MPopup },
  methods: {
    onShow() {
      this.$emit("show");
    },
    onHide() {
      this.$emit("hide");
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.mw-dialog {
  &-content {
    width: 600px;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
  }
}
</style>