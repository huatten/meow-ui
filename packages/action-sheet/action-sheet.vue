<template>
  <div class="mw-action-sheet">
    <mw-popup
      v-model="isShow"
      :maskClosable="maskClosable"
      :position="position"
      @input="onInput"
      @open="onShow"
      @close="onHide"
    >
      <div class="mw-action-sheet-content" :class="position">
        <slot name="header" v-if="$slots.header"></slot>
        <div class="mw-action-sheet-header mw-hairline--bottom" v-if="title">{{title}}</div>
        <ul class="mw-action-sheet-list">
          <template v-for="(item, index) in actions">
            <li
              :key="index"
              :class="[
                'mw-action-sheet-item',
                (index > 0 || actions.length < 2 ) && 'mw-hairline--top', 
                item.className,
                index === clickIndex && 'active', 
                (index === invalidIndex || item.disabled) && 'disabled', 
                item.loading && 'loading'
              ]"
              :style="{color: item.color}"
              @click="onSelect(item, index)"
            >
              <div class="mw-action-sheet-item-loading" v-if="item.loading">
                <mw-loading fill="#c8c9cc"></mw-loading>
              </div>
              <div class="mw-action-sheet-item-select" v-else v-html="item.text || item.label"></div>
            </li>
          </template>
          <li class="mw-action-sheet-cancel" v-if="showCancel" @click="onCancel">{{ cancelText }}</li>
        </ul>
      </div>
    </mw-popup>
  </div>
</template>

<script type="text/ecmascript-6">
import MPopup from "../popup";
import MLoading from "../loading";
export default {
  name: "mw-action-sheet",
  props: {
    value: {
      //双向绑定是否显示窗口
      type: Boolean,
      default: false
    },
    position: {
      //默认底部弹出
      type: String,
      default: "bottom"
    },
    title: {
      //窗口标题
      type: String,
      default: ""
    },
    actions: {
      //操作选项
      type: Array,
      default() {
        return [];
      }
    },
    defaultIndex: {
      //默认选中项
      type: Number,
      default: -1
    },
    invalidIndex: {
      //禁用选项
      type: Number,
      default: -1
    },
    closable: {
      //是否显示关闭按钮
      type: Boolean,
      default: false
    },
    maskClosable: {
      //弹出层是否可关闭
      type: Boolean,
      default: true
    },
    showCancel: {
      //是否显示取消
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
    lockScroll: {
      //是否锁定背景滚动
      type: Boolean,
      default: true
    }
  },
  watch: {
    value(newVal) {
      this.isShow = newVal;
    }
  },
  data() {
    return {
      isShow: this.value,
      clickIndex: -1
    };
  },
  components: { MPopup, MLoading },
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
    onSelect(item, index) {
      if (index === this.invalidIndex || item.disabled || item.loading) {
        return;
      }
      this.clickIndex = index;
      this.$emit("selected", item);
      this.hideSheet();
    },
    onCancel() {
      this.$emit("cancel");
      this.hideSheet();
    },
    hideSheet() {
      this.isShow = false;
      this.$emit("input", false);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">

</style>