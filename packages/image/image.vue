<template>
  <div
    class="mw-image"
    :class="[ this.circle && 'mw-image--circle']"
    :style="wrapStyle"
    :status="status"
    @click="onClick"
  >
    <template v-if="showLoading && loading">
      <div class="mw-image--loading">
        <slot v-if="$slots.loading" name="loading"></slot>
        <svg v-else class="image-loading-icon" viewBox="0 0 1261 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6887" width="32" height="32"><path d="M942.612 191.853s127.066-1.263 127.066 124.541c0 0 11.76 121.779-127.066 124.462 0 0-124.384 2.684-123.121-124.462 0-0.079-1.342-112.782 123.12-124.541zM1192.878 0.543s66.848 5.209 66.848 64.164v879.049s-3.947 62.902-66.848 64.244V0.543z" fill="#dbdbdb" p-id="6888"></path><path d="M0.582 943.835s2.683 64.243 64.244 64.243h1128.052V822.056h-122.963L819.49 567.844l-188.706 189.89-256.738-316.957-252.87 378.675-56.272 1.262-1.421-755.928H0.582v879.049zM1192.878 0.543H64.826S0.582-0.8 0.582 64.707h1192.296V0.543z" fill="#dbdbdb" p-id="6889"></path></svg>
      </div>
    </template>
    <template v-else-if="showError && error">
      <div class="mw-image--error">
        <slot v-if="$slots.error" name="error"></slot>
        <svg v-else class="image-error-icon"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10260" width="32" height="32"><path d="M550.418397 614.803815c8.349974-9.466548 8.349974-25.62159-1.110492-35.652505L417.856319 439.341235l-36.40297-36.404186c-3.016451-3.016451-7.865883-2.905767-10.867738 0.126496a3.438511 3.438511 0 0 0-0.065681 0.066897L98.147777 732.878414V213.182815c2.228282-15.037252 13.92676-24.514747 27.846222-24.514747h371.524603l60.159955-69.066999H89.237083c-33.430306 0-60.161171 26.729649-60.16117 61.271663v663.959804c0 33.700327 27.572552 61.272879 61.272878 61.272879h207.765366l252.326133-291.319844-0.021893 0.018244z m90.236891-272.934089c0 57.374602 46.229545 103.601715 103.601715 103.601716 57.37217 0 103.601715-46.229545 103.601715-103.601716s-46.229545-103.601715-103.601715-103.601715c-57.37217 0-103.601715 46.229545-103.601715 103.601715z" fill="#dbdbdb" p-id="10261"></path><path d="M934.754403 119.070757H733.121676c-2.014211 2.605338-58.491176 69.071864-58.491176 69.071865h222.802618c15.037252 0 26.729649 8.989754 27.846223 24.03552l1.110491 520.16023-215.55827-230.608901c-6.683629-7.798986-16.147744-12.800456-27.846222-12.800457-10.57704 0-18.373593 5.56219-27.846222 11.693614l-9.466548 7.798985 63.501161 67.956508c9.466548 9.466548 9.466548 24.51353 1.110491 35.652505L456.286878 903.900243h478.47239c33.429089 0 60.159954-26.729649 60.159954-61.271662V179.784133c0-33.977646-26.729649-60.719457-60.159954-60.719457l-0.004865 0.006081z" fill="#dbdbdb" p-id="10262"></path></svg>
      </div>
    </template>
    <template v-else>
      <img class="mw-image-img" v-bind="$attrs" :src="src" :style="imgStyle" />
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
import { addUnit } from "../_util/format";
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
      loaded: false,
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
  components: { MIcon },
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
      return fit ? { "object-fit": fit } : {};
    },
    status() {
      return this.loaded
        ? "loaded"
        : this.loading
          ? "loading"
          : this.error
            ? "error"
            : "";
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
      this.loaded = true;
      this.$emit("load", event, img);
    },
    handleError(event) {
      this.loading = false;
      this.error = true;
      this.$emit("error", event);
      throw new Error(`${this.src} load failed...`);
    },
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
