<template>
  <div class="mw-radio-group">
    <mw-cell></mw-cell>
  </div>
</template>

<script type="text/ecmascript-6">
import MCell from "../cell";
import RadioMixin from "./mixins";
export default {
  name: "mw-radio-group",
  mixins: [RadioMixin],
  props: {},
  data() {
    return {};
  },
  computed: {},
  component: {
    [MCell.name]: MCell
  },
  methods: {}
};
</script>
