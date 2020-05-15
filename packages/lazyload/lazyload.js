const MLazyload = {
  name: "mw-lazy-load",
  props: {
    src: {
      type: String,
      required: true
    },
    srcPlaceholder: {
      type: String,
      default: "//:x"
    },
    srcset: {
      type: String
    },
    intersectionOptions: {
      type: Object,
      default: () => ({})
    },
  },
  inheritAttrs: false,
  data: () => ({ __observer__: null, intersected: false, loaded: false }),
  computed: {
    srcImage() {
      return this.intersected && this.src ? this.src : this.srcPlaceholder;
    },
    srcsetImage() {
      return this.intersected && this.srcset ? this.srcset : false;
    }
  },
  mounted() {
    if ("IntersectionObserver" in window) {
      this.__observer__ = new IntersectionObserver(entries => {
        const image = entries[0];
        if (image.isIntersecting) {
          this.intersected = true;
          this.__observer__.disconnect();
        }
      }, this.intersectionOptions);
      this.__observer__.observe(this.$el);
    }
  },
  destroyed() {
    if ("IntersectionObserver" in window) {
      this.observer.disconnect();
    }
  },
  methods: {
    load() {
      if (this.$el.src === this.src) {
        this.loaded = true;
        this.$emit('load');
      }
    },
    loadError(e) {
    }
  },
  render(h) {
    let img = h("img", {
      attrs: {
        src: this.srcImage,
        srcset: this.srcsetImage
      },
      domProps: this.$attrs,
      class: {
        "mw-lazy-image": true,
        "mw-lazy-image--loaded": this.loaded,
      },
      on: { load: this.load, error: this.loadError }
    });
    return img;
  }
}
export default MLazyload;