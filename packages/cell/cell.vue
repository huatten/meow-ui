<template>
  <div class="mw-cell" :class="{'is-disabled' : disabled}" @click="_onClick">
    <div class="mw-cell__body" :class="[!noBorder && 'mw-hairline--bottom', abstract && 'multirow' ]">
      <div class="mw-cell__left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="mw-cell__cont">
        <h3 class="mw-cell__title" v-if="title" v-text="title"></h3>
        <p class="mw-cell__abstract" v-if="abstract" v-text="abstract"></p>
        <slot></slot>
      </div>
      <div class="mw-cell__right" v-if="rightText || $slots.right || arrow">
        <slot name="right">{{rightText}}</slot>
        <mw-icon v-if="arrow" name="next" fill="#c5cad5" size="24"></mw-icon>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-cell",
  props: {
    title: {
      type: String,
      default: ""
    },
    abstract: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    arrow: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    _onClick(event) {
      if (!this.disabled) {
        this.$emit("click", event);
      }
    }
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import "~/_style/var.scss";
@import "~/_style/hairline.scss";
.mw-cell {
  position: relative;
  &.is-disabled {
    .mw-cell__cont,
    .mw-cell__title {
      color: $cell-disabled-color;
    }
  }
  &__body {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    min-height: 64px;
    box-sizing: border-box;
    &.multirow {
      padding: 16px 0;
    }
  }
  &__cont {
    flex: 1 1 0%;
    line-height: 1.2;
    font-size: $cell-title-font-size;
    color: $cell-title-font-color;
  }
  &__itle {
    font-size: $cell-title-font-size;
    font-weight: normal;
    color: $cell-title-font-color;
  }
  &__abstract {
    font-size: $cell-abstract-font-size;
    color: $cell-abstract-font-color;
    margin-top: 8px;
  }
  &__left {
    flex-shrink: 0;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 12px;
  }
  &__right {
    flex-shrink: 0;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    font-size: $cell-right-font-size;
    color: $cell-right-font-color;
    margin-left: 10px;
    .mw-icon-font {
      margin-left: 4px;
      margin-right: -7px;
    }
  }
}
</style>