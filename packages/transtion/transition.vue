<script type="text/ecmascript-6">
export default {
  name: "mw-transition",
  functional: true,
  render(h, context) {
    return h('transition', context.data, context.children)
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
@import '~/_style/transition.scss';
</style>