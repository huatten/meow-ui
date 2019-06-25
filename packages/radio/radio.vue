<template>
  <label
    class="mw-radio"
    :class="[
      (iconPosition && !horizontal) && `is-${iconPosition}-radio`,
      isChecked && 'is-checked', 
      disabled && 'is-disabled', 
      horizontal && 'is-horizontal'
    ]"
  >
    <input
      class="mw-radio__input"
      :value="value"
      @change="_onChange"
      :checked="isChecked"
      :disabled="disabled"
      @click.stop="()=>{}"
      type="radio"
    >
    <div class="mw-radio__icon" :style="isChecked && curIconStyle">
      <mw-icon :name="curIcon" :size="iconSize" :svg="iconSvg"></mw-icon>
    </div>
    <div class="mw-radio__label">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{label}}</template>
    </div>
  </label>
</template>

<script type="text/ecmascript-6">
import RadioMixin from "./mixins";
import MIcon from "../icon";
export default {
  name: "mw-radio",
  mixins: [RadioMixin],
  model: {
    prop: "referenceValue",
    event: "change"
  },
  props: {
    //外部参考值
    //checked : referenceValue === value
    referenceValue: {
      required: true
    },
    value: {
      required: true
    },
    color: {
      type: String,
      default: "#ff8200"
    },
    label: {
      type: String,
      default: ""
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      curIconStyle: {
        color: this.color
      }
    };
  },
  computed: {
    isChecked() {
      return this.value === this.referenceValue;
      
    },
    curIcon() {
      return this.disabled
        ? this.iconDisabled
        : this.value === this.referenceValue
        ? this.icon
        : this.iconInverse;
    }
  },
  component: {
    [MIcon.name]: MIcon
  },
  methods: {
    _onChange() {
      if (!this.disabled) {
        this.$emit("change", this.value);
      }
    }
  }
};
</script>