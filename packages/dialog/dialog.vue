<template>
  <div class="mw-dialog">
    <mw-popup
      :transition="transition"
      :value="value"
      :hasMask="hasMask"
      :maskClosable="maskClosable"
      :appendToBody="appendToBody"
      position="center"
      @input="onInput"
      @open="onShow"
      @opened="onShowed"
      @close="onHide"
      @closed="onHided"
    >
      <div class="mw-dialog-content">
        <slot name="header"></slot>
        <div class="mw-dialog-body">
          <span class="mw-dialog-close" v-if="closable" @click="close">
            <mw-icon name="close" size="22"></mw-icon>
          </span>
          <h3 class="mw-dialog-title">{{title}}</h3>
          <slot>
            <div class="mw-dialog-context" v-html="content"></div>
          </slot>
        </div>
        <div class="mw-dialog-actions mw-hairline--top">
          <span
            v-if="showCancel"
            class="mw-dialog-btn cancel"
            :style="{color: cancelColor}"
            @click="onClick('cancel')"
            @touchmove.prevent
          >{{cancelText}}</span>
          <span
            v-if="showConfirm"
            class="mw-dialog-btn confirm mw-hairline--left"
            :style="{color: confirmColor}"
            @click="onClick('confirm')"
            @touchmove.prevent
          >
            <mw-loading v-if="loading" class="mw-dialog-loading" fill="#ff8200" size="19"></mw-loading>
            {{confirmText}}
          </span>
        </div>
      </div>
    </mw-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import MPopup from "../popup";
import MIcon from "../icon";
import MLoading from "../loading";
export default {
  name: "mw-dialog",
  props: {
    value: {
      // 双向绑定是否显示窗口
      type: Boolean,
      default: false
    },
    title: {
      // 窗口标题
      type: String,
      default: ""
    },
    content: {
      // 弹窗主体内容
      type: String,
      default: ""
    },
    closable: {
      // 是否显示关闭按钮
      type: Boolean,
      default: false
    },
    hasMask: {
      // 是否显示蒙层
      type: Boolean,
      default: true
    },
    maskClosable: {
      // 弹出层是否可关闭
      type: Boolean,
      default: false
    },
    transition: {
      // 弹出层动画类型
      type: String,
      default: "mw-fade"
    },
    showCancel: {
      // 是否展示取消按钮
      type: Boolean,
      default: true
    },
    cancelText: {
      // 取消按钮文案
      type: String,
      default: "取消"
    },
    cancelColor: {
      // 取消按钮颜色
      type: String,
      default: ""
    },
    onCancel: {
      // 取消按钮事件
      type: Function,
      default: () => {}
    },
    showConfirm: {
      // 是否展示确定按钮
      type: Boolean,
      default: true
    },
    confirmText: {
      // 确定按钮文案
      type: String,
      default: "确认"
    },
    confirmColor: {
      // 确定按钮颜色
      type: String,
      default: ""
    },
    onConfirm: {
      // 确定按钮事件
      type: Function,
      default: () => {}
    },
    loading: {
      // 异步操作加载
      type: Boolean,
      default: false
    },
    appendToBody: {
      // 是否插入到body元素上
      type: Boolean,
      default: false
    },
    lockScroll: {
      // 是否锁定背景滚动
      type: Boolean,
      default: true
    }
  },
  components: { MPopup, MIcon, MLoading },
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
    },
    onClick(type) {
      if (this.loading) { return; }
      this.$emit(type);
      if (type === "confirm") {
        this.onConfirm();
      }
      if (type === "cancel") {
        this.close();
        this.onCancel();
      }
    },
    close() {
      this.$emit("input", false);
    }
  }
};
</script>
