<template>
  <div class="mw-navbar">
    <div class="mw-navbar-left" @click="onClickBack">
      <template v-if="!leftSolt">
        <span class="mw-navbar-left-icon" v-if="leftIconShow">
          <mw-icon name="return"></mw-icon>
        </span>
        <span
          class="mw-navbar-left-text"
          :class="{'mgl20': !leftIconShow}"
          v-if="leftText"
        >{{leftText}}</span>
      </template>
      <template v-else>
        <slot name="left"></slot>
      </template>
    </div>
    <h2 class="mw-navbar-title" @click="onclickTitle">
      <slot></slot>
    </h2>
    <div class="mw-navbar-right" @click="onClickMore">
      <template v-if="!rightSolt">
        <span class="mw-navbar-right-text" v-if="rightText">{{rightText}}</span>
        <span class="mw-navbar-right-icon" v-if="rightIconShow">
          <svg
            class="icon-more"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5363"
            width="32"
            height="32"
          >
            <path
              d="M251.392 446.976c-35.84 0-65.024 29.184-65.024 65.024s29.184 65.024 65.024 65.024S316.416 547.84 316.416 512s-29.184-65.024-65.024-65.024z m260.608 0c-35.84 0-65.024 29.184-65.024 65.024s29.184 65.024 65.024 65.024 65.024-29.184 65.024-65.024S547.84 446.976 512 446.976z m260.608 0c-35.84 0-65.024 29.184-65.024 65.024s29.184 65.024 65.024 65.024 65.024-29.184 65.024-65.024-28.672-65.024-65.024-65.024z"
              fill="#333333"
              p-id="5364"
            />
          </svg>
        </span>
      </template>
      <template>
        <slot name="right"></slot>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MIcon from "../icon";
export default {
  name: "mw-navbar",
  props: {
    // 左侧icon是否显示
    leftIconShow: {
      type: Boolean,
      default: false
    },
    // 左侧文字
    leftText: {
      type: String,
      default: ""
    },
    // 右侧icon是否显示
    rightIconShow: {
      type: Boolean,
      default: false
    },
    // 右侧文字
    rightText: {
      type: String,
      default: ""
    }
  },
  components: {
    [MIcon.name]: MIcon
  },
  computed: {
    leftSolt() {
      return !!this.$slots.left;
    },
    rightSolt() {
      return !!this.$slots.right;
    }
  },
  methods: {
    onclickTitle() {
      this.$emit("click");
    },
    onClickBack() {
      this.$router ? this.$router.back() : window.history.back();
      this.$emit("back");
    },
    onClickMore() {
      this.$emit("more");
    }
  }
};
</script>
