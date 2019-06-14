
import Vue from "vue";
import MToast from "./toast";
import createInstance from "../_util/createInstance";
let [timer, vm] = [null, null];
const Toast = (message, {
  type = "default",
  position = "center",
  duration = 2500,
  hasMask = false,
  callback = () => { }
} = {}) => {
  if (!vm) {
    vm = createInstance(Vue, MToast);
  }
  vm.message = message;
  vm.type = type;
  vm.position = position;
  vm.duration = duration;
  vm.hasMask = hasMask;
  vm.$nextTick(() => {
    vm.toastShow = true
  })
  if (timer) {
    clearTimeout(timer);
    vm.toastShow = false;
  }
  timer = setTimeout(() => {
    vm.toastShow = false;
    timer = null;
    vm.callback = callback();
  }, vm.duration);
  return vm;
}
Vue.prototype.$toast = Toast;
export default MToast;