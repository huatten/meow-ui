<script type="text/ecmascript-6">
/**
 * 借鉴了vue-lazyload, v-lazy-image，这就是个base简化版本
 * https://github.com/hilongjw/vue-lazyload 这个用的比较多 功能也全乎 支持组件懒加载
 * https://github.com/alexjoverm/v-lazy-image 这个主要是基于IntersectionObserver做的 兼容性貌似不太好
 */
import { getScrollParent, checkInView } from "../_util/dom";
import { throttle } from "../_util/util";
const DEFAULT_EVENTS = [
  "scroll",
  "wheel",
  "mousewheel",
  "resize",
  "animationend",
  "transitionend",
  "touchmove"
];
export default {
  name: "mw-lazy-load",
  props: {
    src: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    errorImg: {
      type: String,
      required: true
    },
    attempt: {
      type: Number,
      default: 3
    },
    observer: {
      type: Boolean,
      default: false
    },
    intersectionOptions: {
      type: Object,
      default: () => ({})
    },
    usePicture: {
      type: Boolean,
      default: false
    },
    preLoadRate: {
      type: Number,
      default: 1.3
    },
    throttleTime: {
      type: Number,
      default: 300
    },
    events: {
      type: Array,
      default() {
        return DEFAULT_EVENTS;
      }
    }
  },
  inheritAttrs: false,
  data() {
    return {
      observerObj: null,
      url: this.placeholder,
      intersected: false,
      status: "loading",
      scrollParentNode: null,
      loadTime: 0,
      attemptCount: 0
    };
  },
  watch: {
    src() {
      this.status = "loading";
      this.loadImgIfInView();
    }
  },
  mounted() {
    if (this.observer && "IntersectionObserver" in window) {
      this.observerObj = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.loadImgIfInView();
          this.observerObj.disconnect();
        }
      }, this.intersectionOptions);
      this.observerObj.observe(this.$el);
    } else {
      if (this.$el.getAttribute("status") === "loading") {
        this.scrollParentNode = getScrollParent(this.$el);
        this.$nextTick(() => {
          this.loadImgIfInView();
          this.events.forEach(eventName => {
            this.scrollParentNode.addEventListener(
              eventName,
              this.loadImgIfInView
            );
          });
        });
      }
    }
  },
  destroyed() {
    if (this.observer && "IntersectionObserver" in window) {
      this.observerObj.disconnect();
    } else {
      this.events.forEach(eventName => {
        this.scrollParentNode.removeEventListener(
          eventName,
          this.loadImgIfInView
        );
      });
    }
  },
  methods: {
    loadImgIfInView() {
      throttle(() => {
        if (this.status === "loading") {
          if (
            (this.observer && this.intersected) ||
            checkInView(this.$el, this.preLoadRate)
          ) {
            this.loadImage();
          }
        } else if (this.status === "loaded") {
          this.events.forEach(eventName => {
            this.scrollParentNode.removeEventListener(
              eventName,
              this.loadImgIfInView
            );
          });
        }
      }, this.throttleTime)();
    },
    loadImage() {
      if (this.attemptCount > this.attempt - 1 && this.status === "attempt") {
        const msg = `lazyload log: ${this.src} tried too more than ${this.attempt} times`;
        throw Error(msg);
      }
      const startTime = Date.now();
      let img = new Image();
      let src = this.src;
      img.src = src;
      if (this.attempt > this.attemptCount) {
        this.status = "loading";
        img.onload = e => {
          this.status = "loaded";
          this.url = this.src;
          this.loadTime = Date.now() - startTime;
          this.$emit("loaded", {
            width: img.naturalWidth,
            height: img.naturalHeight,
            url: this.src,
            loadTime: this.loadTime
          });
          img = null;
        };
        img.onerror = e => {
          this.attemptCount++;
          this.status = "attempt";
          this.$emit("attempt", {
            url: this.src,
            loadTime: this.loadTime,
            error: e
          });
          this.loadImage();
        };
      } else {
        this.status = "fail";
        if (this.errorImg) {
          this.url = this.errorImg;
        }
        this.$emit("failed", {
          url: this.url,
          loadTime: this.loadTime
        });
        img = null;
      }
    }
  },
  render(h) {
    let img = h("img", {
      attrs: {
        src: this.url,
        "data-current": this.src,
        status: this.status
      },
      domProps: this.$attrs,
      class: ["mw-lazy-image", `mw-lazy-${this.status}`]
    });
    let picture = h(
      "picture",
      this.intersected ? [this.$slots.default, img] : [img]
    );
    return this.usePicture ? picture : img;
  }
};
</script>
