<template>
  <div class="mw-dialog">
    <mw-popup
      :transition="transition"
      :value="value"
      :hasMask="hasMask"
      :maskClosable="maskClosable"
      position="center"
      @input="onInput"
      @open="onShow"
      @close="onHide"
    >
      <div class="mw-dialog-content">
        <slot name="header"></slot>
        <div class="mw-dialog-body">
          <span class="mw-dialog-close"></span>
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
          >{{confirmText}}</span>
        </div>
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
      default: ""
    },
    content: {
      //弹窗主体内容
      type: String,
      default: ""
    },
    transition: {
      //弹窗动画类型
      type: String,
      default: "mw-fade"
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
    },
    showCancel: {
      //是否展示取消按钮
      type: Boolean,
      default: true
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
    showConfirm: {
      //是否展示确定按钮
      type: Boolean,
      default: true
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
    onHide() {
      this.$emit("close");
    },
    onClick(type) {
      this.$emit(type);
      this.close();
    },
    close() {
      this.$emit("input", false);
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
  &-body {
    color: #646566;
    padding: 50px;
    font-size: 30px;
  }
  &-title {
    font-size: 40px;
    color: #111a34;
    text-align: center;
    margin: 0 0 30px;
  }
  &-context {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-actions {
    display: flex;
  }
  &-btn {
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    justify-content: center;
    height: 100px;
    font-size: 36px;
    font-weight: 500;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    &.cancel {
      color: #666f83;
    }
    &.confirm {
      color: #ff8200;
    }
  }
}
</style>