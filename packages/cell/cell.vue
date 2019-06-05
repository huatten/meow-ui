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