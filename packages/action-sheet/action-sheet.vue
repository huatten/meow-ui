<template>
  <div class="mw-action-sheet">
    <mw-popup
      :value="value"
      :maskClosable="maskClosable"
      :position="position"
      @input="onInput"
      @open="onShow"
      @opened="onShowed"
      @close="onHide"
      @closed="onHided"
    >
      <div class="mw-action-sheet-content">
        <div class="mw-action-sheet-header"></div>
        <ul class="mw-action-sheet-list"></ul>
      </div>
    </mw-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import MPopup from "../popup";
export default {
  name: "mw-action-sheet",
  props: {
    value: {
      //双向绑定是否显示窗口
      type: Boolean,
      default: false
    },
    theme: {
      //主题 默认ios风格
      type: String,
      default: "ios"
    },
    title: {
      //窗口标题
      type: String,
      default: ""
    },
    closable: {
      //是否显示关闭按钮
      type: Boolean,
      default: false
    },
    maskClosable: {
      //弹出层是否可关闭
      type: Boolean,
      default: false
    },
    cancelText: {
      //取消按钮文案
      type: String,
      default: "取消"
    },
    cancelColor: {
      //取消按钮颜色
      type: String,
      default: ""
    },
    confirmText: {
      //确定按钮文案
      type: String,
      default: "确认"
    },
    confirmColor: {
      //确定按钮颜色
      type: String,
      default: ""
    },
    lockScroll: {
      //是否锁定背景滚动
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  computed: {
    position() {
      return this.theme === "ios" ? "bottom" : "center";
    }
  },
  components: { MPopup },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    },
    onShow() {
      this.$emit("open");
    },
    onShowed() {
      this.$emit("opened");
    },
    onHide() {
      this.$emit("close");
    },
    onHided() {
      this.$emit("closed");
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.mw-action-sheet {
  &-content {
    background-color: #fff;
  }
}
</style>