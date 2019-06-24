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
      :value="label"
      @change="_onChange"
      v-model="curValue"
      :disabled="disabled"
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
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ""
    },
    name: {
      required: true,
      default: ""
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
          this.parent = parent;
          return true;
        }
      }
      return false;
    },
    isDisabled() {
      return this.isGroup
        ? this.parent.disabled || this.disabled
        : this.disabled || false;
    },
    isChecked() {
      const { isGroup, curValue } = this;
      if (!isGroup) return curValue;
      const {
        value,
        $parent: { value: selectItems }
      } = this;
      return selectItems.some(item => item === value);
    },
    curIcon() {
      return this.disabled
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
          this.isChecked
            ? this.parent.deleteItem(val)
            : this.parent.selectItem(val);
        } else {
          this.$emit("select", val);
        }
      }
    }
  },
  component: {
    [MIcon.name]: MIcon
  },
  methods: {
    _onChange() {
      // if (!this.isDisabled) {
      //   this.$emit("input", this.curValue);
      // }
      const { isDisabled, isGroup, curValue, value } = this;
      if (!isDisabled) {
        this.curValue = isGroup ? value : !curValue;
      }
    }
  }
};
</script>