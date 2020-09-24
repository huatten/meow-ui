<template>
  <div class="mw-infinite-scroll" ref="scroller">
    <slot></slot>
    <div class="infinite-status-prompt is-loading" v-if="isLoading">
      <mw-loading
        :type="loadType"
        :fill="loadFill"
        :size="loadSize"
        :text="loadText"
        :color="loadTextColor"
      ></mw-loading>
    </div>
    <div class="infinite-status-prompt no-more" v-else-if="!hasMore">
      <mw-divider>{{noMoreText}}</mw-divider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MLoading from "../loading/loading.vue";
import MDivider from "../divider/divider.vue";
import { getScrollParent } from "../_util/dom";
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
  name: "mw-infinite-scroll",
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    loadType: {
      type: String,
      default: "roller"
    },
    loadText: {
      type: String,
      default: ""
    },
    loadFill: {
      type: String,
      default: "#898989"
    },
    loadSize: {
      type: [Number, String],
      default: 20
    },
    loadTextColor: {
      type: String,
      default: "#666f83"
    },
    preLoadDistance: {
      type: Number,
      default: 200
    },
    throttleTime: {
      type: Number,
      default: 300
    },
    noMoreText: {
      type: String,
      default: "没有更多了～"
    },
    events: {
      type: Array,
      default() {
        return DEFAULT_EVENTS;
      }
    }
  },
  data() {
    return {
      scrollParentNode: null,
      beforeScrollTop: 0
    };
  },
  components: {
    [MLoading.name]: MLoading,
    [MDivider.name]: MDivider
  },
  watch: {},
  mounted() {
    this.scrollParentNode = getScrollParent(this.$el);
    this.scrollListener();
  },
  destroyed() {
    this.events.forEach((eventName) => {
      this.scrollParentNode.removeEventListener(eventName, this.handleScroll);
    });
  },
  methods: {
    _requestAniFrame() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    },
    _getScrollTop(el) {
      if (el === window) {
        return Math.max(
          window.pageYOffset || 0,
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop
        );
      }
      return el.scrollTop;
    },
    _calculateTopPosition(el) {
      if (!el) {
        return 0;
      }
      return el.offsetTop + this._calculateTopPosition(el.offsetParent);
    },
    isScrollEnd() {
      let offsetDistance;
      const scrollTop = this._getScrollTop(this.scrollParentNode);
      const scroller = this.$refs.scroller;
      if (this.scrollParentNode === window) {
        offsetDistance =
          this._calculateTopPosition(scroller) +
          scroller.offsetHeight -
          scrollTop -
          window.innerHeight;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = this.scrollParentNode;
        offsetDistance = scrollHeight - clientHeight - scrollTop;
      }
      this.$emit("scrollChange", scrollTop);
      this.beforeScrollTop = scrollTop;

      return (
        offsetDistance <= this.preLoadDistance &&
        scrollTop >= this.beforeScrollTop
      );
    },
    scrollListener() {
      this.$nextTick(() => {
        this.events.forEach((eventName) => {
          this.scrollParentNode.addEventListener(
            eventName,
            throttle(this.handleScroll, this.throttleTime)
          );
        });
      });
    },
    handleScroll() {
      this._requestAniFrame()(() => {
        if (!this.isScrollEnd() || !this.hasMore || this.isLoading) {
          return false;
        } else {
          this.$emit("onInfinite");
        }
      });
    }
  }
};
</script>
