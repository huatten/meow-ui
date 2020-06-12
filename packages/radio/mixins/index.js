export default {
  props: {
    icon: {
      type: String,
      default: 'selection'
    },
    iconInverse: {
      type: String,
      default: 'prevent'
    },
    iconDisabled: {
      type: String,
      default: 'cancel'
    },
    iconSvg: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: [Number, String],
      default: 24
    },
    iconPosition: {
      type: String,
      default: ''
    }
  }
};
