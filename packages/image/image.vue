<template>
  <mw-transition name="mw-fade">
    <div
      class="mw-image"
      :class="[ this.circle && 'mw-image--circle']"
      :style="wrapStyle"
      @click="onClick"
    >
      <template v-if="showLoading && loading">
        <div class="mw-image--loading">
          <slot v-if="$slots.loading" name="loading"></slot>
          <mw-icon v-else name="image-loading" width="24" height="24" :svg="true"></mw-icon>
        </div>
      </template>
      <template v-else-if="showError && error">
        <div class="mw-image--error">
          <slot v-if="$slots.error" name="error"></slot>
          <mw-icon v-else name="image-error" width="32" height="32" :svg="true"></mw-icon>
        </div>
      </template>
      <template v-else>
        <img class="mw-image-img" v-bind="$attrs" :src="src" :style="imgStyle" />
      </template>
    </div>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import { addUnit } from "../_util/format";
import MTransition from "../transition";
import MIcon from "../icon";
export default {
  name: "mw-image",
  props: {
    src: {
      type: String,
      default: ""
    },
    fit: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: ""
    },
    height: {
      type: [String, Number],
      default: ""
    },
    radius: {
      type: [String, Number],
      default: 0
    },
    circle: {
      type: Boolean,
      default: false
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    showError: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      loading: true,
      error: false
    };
  },
  watch: {
    src: {
      handler(val) {
        val && this.loadImage();
      },
      immediate: true
    }
  },
  components: { MTransition, MIcon },
  computed: {
    wrapStyle() {
      const style = {};
      const { width, height, radius } = this;
      if (width) {
        style.width = addUnit(width);
      }
      if (height) {
        style.height = addUnit(height);
      }
      if (radius) {
        style.overflow = "hidden";
        style.borderRadius = addUnit(radius);
      }
      return style;
    },
    imgStyle() {
      const { fit } = this;
      if (fit) {
        return { "object-fit": fit };
      }
    }
  },
  methods: {
    loadImage() {
      this.loading = true;
      this.error = false;
      const img = new Image();
      img.onload = event => this.handleLoad(event, img);
      img.onerror = this.handleError.bind(this);
      const attrs = this.$attrs;
      Object.keys(attrs).forEach(attr => {
        const value = attrs[attr];
        img.setAttribute(attr, value);
      });
      img.src = this.src;
    },
    handleLoad(event, img) {
      this.loading = false;
      this.$emit("load", event, img);
    },
    handleError(event) {
      this.loading = false;
      this.error = true;
      this.$emit("error", event);
    },
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>