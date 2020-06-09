
import Vue from "vue";
import MToast from "./toast";
import createInstance from "../_util/createInstance";
let [timer, vm] = [null, null];
const TYPE = ["defalut", "success", "failed", "warning"];
const Toast = (message, {
  type = "defalut",
  position = "center",
  duration = 2500,
  loadingType = "roller",
  hasMask = false,
  callback = () => { }
} = {}) => {
  if (!vm) {
    vm = createInstance(Vue, MToast);
  }
  // common params
  vm.message = message;
  vm.type = type;
  vm.hasMask = hasMask;
  vm.callback = callback;
  // toast
  vm.duration = duration;
  vm.position = position;
  // loading
  vm.loadingType = loadingType;
  vm.$nextTick(() => {
    vm.toastShow = true;
  });

  if (TYPE.includes(vm.type)) {
    if (timer) {
      clearTimeout(timer);
      vm.toastShow = false;
    }
    timer = setTimeout(() => {
      vm.toastShow = false;
      timer = null;
      vm.callback = callback();
    }, vm.duration);
  }
  return vm;
};

Toast.close = () => {
  Vue.nextTick(() => {
    vm.toastShow = false;
  });
};

Vue.prototype.$toast = Toast;
export default MToast;
