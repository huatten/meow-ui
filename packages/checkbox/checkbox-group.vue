<template>
  <div class="mw-checkbox-group">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "mw-checkbox-group",
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    value: null,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value(val) {
      this.$emit("input", val);
    }
  },
  computed: {},
  methods: {
    selectItem(item) {
      const { value } = this;
      this.$emit("select", [...value, item]);
    },
    deleteItem(item) {
      const { value: selectItems } = this;
      this.$emit(
        "select",
        selectItems.filter(selectitem => selectitem !== item)
      );
    }
  }
};
</script>