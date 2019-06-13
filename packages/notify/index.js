
import Vue from "vue";
import MNotify from "./notify";
import createInstance from "../_util/createInstance";
// timer:存储定时器id; vm:存储notify vm; 
let [timer, vm] = [false, null];
const Notify = (message, {
  type = "default",
  duration = 2500,
  callback = () => { }
} = {}) => {
  if (!vm) {
    vm = createInstance(Vue, MNotify);
  }
  vm.type = type;
  vm.message = message;
  vm.duration = duration;
  // 防止两次 notifyShow的改变被合并成一次, 防止watch失效
  vm.$nextTick(() => {
    vm.notifyShow = true;
  })
  if (timer) {
    // 如果notify还在，则取消上次消失时间
    clearTimeout(timer);
    vm.notifyShow = false;
  }
  timer = setTimeout(() => {
    vm.notifyShow = timer = false;
    vm.callback = callback();
  }, vm.duration)
  return vm;
}
Vue.prototype.$notify = Notify;
export default MNotify;