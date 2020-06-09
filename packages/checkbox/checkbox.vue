<template>
  <label
    class="mw-checkbox"
    :class="[
      (iconPosition && !horizontal) && `is-${iconPosition}-checkbox`,
      isChecked && 'is-checked',
      isDisabled && 'is-disabled',
      horizontal && 'is-horizontal'
    ]"
  >
    <input
      class="mw-checkbox__input"
      :value="curValue"
      @change="_onChange"
      :disabled="isDisabled"
      @click.stop="()=>{}"
      type="checkbox"
    >
    <div class="mw-checkbox__icon" :style="isChecked && curIconStyle">
      <mw-icon :name="curIcon" :size="iconSize" :svg="iconSvg"></mw-icon>
    </div>
    <div class="mw-checkbox__label">
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>{{label}}</template>
    </div>
  </label>
</template>

<script type="text/ecmascript-6">
import CheckboxMixin from "./mixins";
import MIcon from "../icon";
export default {
  name: "mw-checkbox",
  mixins: [CheckboxMixin],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: null
    },
    name: {
      required: true,
      default: null
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
      parent: null,
      curIconStyle: {
        color: this.color
      }
    };
  },
  computed: {
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name !== "mw-checkbox-group") {
          parent = parent.$parent;
        } else {
          /* eslint-disable */ 
          this.parent = parent;
          return true;
        }
      }
      return false;
    },
    isLimitDisabled() {
      const { max } = this.isGroup && this.parent;
      return !!max && (this.curValue.length + 1 > max && !this.isChecked);
    },
    isDisabled() {
      return this.isGroup
        ? this.parent.disabled || this.disabled || this.isLimitDisabled
        : this.disabled || false;
    },
    isChecked() {
      return (
        this.value === this.name ||
        (this.parent && this.parent.value.indexOf(this.name) !== -1)
      );
    },
    curIcon() {
      return this.isDisabled
        ? this.iconDisabled
        : this.isChecked
          ? this.icon
          : this.iconInverse;
    },
    curValue: {
      get() {
        return this.isGroup ? this.parent.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.parent.$emit("input", val);
        } else {
          this.$emit("input", val);
        }
      }
    }
  },
  component: {
    [MIcon.name]: MIcon
  },
  methods: {
    _onChange() {
      if (!this.isDisabled) {
        if (typeof this.name === "boolean") {
          this.$emit("input", !this.curValue);
        } else if (this.isChecked) {
          this.$emit("input", "");
          if (this.isGroup) {
            this.parent.uncheck(this.name);
          }
        } else {
          this.$emit("input", this.name);
          if (this.isGroup) {
            this.parent.check(this.name);
          }
        }
      }
    }
  }
};
</script>
