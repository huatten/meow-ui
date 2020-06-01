import Vue from "vue";
import MDialog from "./dialog.vue";
import createInstance from "../_util/createInstance";

const BODYCLASS = "mw-popup-parent--hidden";
const Dialog = ({
  title = "",
  content = "",
  transition = "mw-zoom",
  closable = false,
  hasMask = true,
  maskClosable = false,
  showCancel = true,
  cancelText = "取消",
  cancelColor = "#666f83",
  showConfirm = true,
  confirmText = "确定",
  confirmColor = "#ff8200",
  lockScroll = true,
  onConfirm = ()=>{},
  onCancel = ()=>{}
} = {}) => {
  let vm = createInstance(Vue, MDialog, {
    props: {
      value: true,
      title,
      content,
      transition,
      closable,
      hasMask,
      maskClosable,
      showCancel,
      cancelText,
      cancelColor,
      showConfirm,
      confirmText,
      confirmColor,
      lockScroll,
      onConfirm,
      onCancel
    },
    on: {
      'input': val => {
        vm.value = val
      },
      'open': () => {
        vm.lockScroll && document.body.classList.add(BODYCLASS);
      },
      'close': () => {
        document.body.classList.contains(BODYCLASS) && document.body.classList.remove(BODYCLASS);
      }
    }
  });
  return vm;
};

MDialog.install = function (Vue) {
  Vue.component(MDialog.name, MDialog);
}

Vue.prototype.$dialog = Dialog;

export default MDialog;