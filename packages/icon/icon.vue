<template>
  <svg
    version="1.1"
    v-if="svg"
    aria-hidden="true"
    class="mw-icon mw-icon-svg"
    :class="[`mw-svg-${name}`]"
    :width="currentSize.width"
    :height="currentSize.height"
    :viewBox="box"
    @click="$emit('click', $event)"
  >
    <use :xlink:href="icon.id"></use>
  </svg>
  <i
    v-else
    class="mw-icon mw-icon-font"
    :class="`mw-icon-${name}`"
    :style="`font-size:${size}px`"
    @click="$emit('click', $event)"
  ></i>
</template>
<script type="text/ecmascript-6">
export default {
  name: "mw-icon",
  props: {
    svg: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true,
      default: ""
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    size: {
      type: [Number, String],
      default: 20
    }
  },
  watch: {
    async name(val) {
      if (!val) {
        return;
      }
      this.svg && (this.xml = await import("@/assets/svg-icon/" + this.name + ".svg"));
    }
  },
  computed: {
    baseSize() {
      let size = this.size;
      size = Number(size);
      if (isNaN(size) || size <= 0) {
        return 10;
      }
      return size;
    },
    icon() {
      if (!this.xml) {
        return {
          width: 0,
          height: 0,
          id: ""
        };
      }
      let viewBox = this.xml.default.viewBox.split(" ");
      return {
        width: viewBox[2] || 0,
        height: viewBox[3] || 0,
        id: "#" + this.xml.default.id
      };
    },
    box() {
      return `0 0 ${this.icon.width} ${this.icon.height}`;
    },
    scale() {
      if (this.icon.height) {
        return this.icon.width / this.icon.height;
      }
      return 1;
    },
    currentSize() {
      let width = this.width;
      let height = this.height;
      // 不传递 width 与 height，就当做正方形处理，size 字段生效
      if (width === null && height === null) {
        return {
          width: 1 * this.baseSize,
          height: 1 * this.baseSize
        };
      } else if (width !== null) {
        //指定宽度 按照宽度比例算
        width = Number(width);
        if (isNaN(width) || width <= 0) {
          width = 1 * this.baseSize;
        }
        return {
          width: width,
          height: width / this.scale
        };
      } else {
        //指定高度 按照高度比例计算
        height = Number(height);
        if (isNaN(height) || height <= 0) {
          height = 1 * this.baseSize;
        }
        return {
          width: height * this.scale,
          height: height
        };
      }
    }
  },
  data() {
    return {
      xml: null
    };
  },
  async created() {
    if (!this.name) {
      return;
    }
    this.svg && (this.xml = await import("@/assets/svg-icon/" + this.name + ".svg"));
  }
};
</script>