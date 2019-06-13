<template>
  <mw-transition name="mw-fade">
    <div
      class="mw-overlay"
      v-show="showMask"
      :style="backgroundColor"
      @click="tapMask"
      @touchmove.stop.prevent
    ></div>
  </mw-transition>
</template>

<script type="text/ecmascript-6">
import MTransition from "../transition";
export default {
  name: "mw-overlay",
  props:{
    showMask: {
      type: Boolean,
      default: true
    },
    opacity: {
      type: [Number, String],
      default: 0.65
    }
  },
  computed: {
    backgroundColor() {
      return `background-color: rgba(0, 0, 0, ${this.opacity})`;
    }
  },
  components: {
    MTransition
  },
  methods:{
    tapMask(){
      this.$emit("tapMask")
    }
  }
};
</script>