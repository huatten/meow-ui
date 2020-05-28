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
      default: 'cancel',
    },
    iconSvg: {
      type: Boolean,
      default: false,
    },
    iconSize: {
      type: [Number, String],
      default: 25,
    },
    iconPosition: {
      type: String,
      default: '',
    },
  },
}