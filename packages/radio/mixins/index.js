export default {
  props: {
    icon: {
      type: String,
      default: 'selection',
    },
    iconInverse: {
      type: String,
      default: 'prevent',
    },
    iconDisabled: {
      type: String,
      default: 'check-disabled',
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: [Number, String],
      default: 22,
    },
    iconPosition: {
      type: String,
      default: '',
    },
  },
}