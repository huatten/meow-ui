<template>
  <mw-transition name="mw-fade">
    <span
      class="mw-tag"
      :class="[round && 'mw-tag--round', plain && ('mw-tag--plain mw-hairline--surround'), closable && 'mw-tag--closable']"
      :style="{'background-color': color, 'color': textColor}"
      @click="onClickTag"
      v-if="tagShow"
    >
      <slot></slot>
      <mw-icon v-if="closable" name="close" size="14" @click="onCloseTag"></mw-icon>
    </span>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import MTransition from "../transition";
import MIcon from "../icon";
export default {
  name: "mw-tag",
  props: {
    // 是否圆角
    round: {
      type: Boolean,
      default: false
    },
    // 是否线性
    plain: {
      type: Boolean,
      default: false
    },
    // tag颜色
    color: {
      type: String,
      default: ""
    },
    // tag文本颜色
    textColor: {
      type: String,
      default: ""
    },
    // tag是否可关闭
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tagShow: true
    };
  },
  components: {
    [MTransition.name]: MTransition,
    [MIcon.name]: MIcon
  },
  methods: {
    onClickTag() {
      this.$emit("click");
    },
    onCloseTag() {
      this.tagShow = false;
      this.$emit("close", this.$slots.default[0].text);
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.mw-tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.4em 0.5em;
  line-height: 1;
  font-size: 26px;
  background-color: #ff8200;
  color: #fff;
  border-radius: 3px;
  &--round {
    border-radius: 999px;
  }
  &--plain {
    background: #fff;
    color: #969799;
    &::before {
      border-color: currentColor;
      border-radius: 6px;
    }
  }
  &--closable {
    padding: 0.4em 0.35em 0.4em 0.5em;
    .mw-icon-close {
      margin-left: 3px;
    }
  }
}
</style>
