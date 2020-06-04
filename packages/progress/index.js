import MProgress from "./progress";
MProgress.install = function (Vue) {
  Vue.component(MProgress.name, MProgress);
}
export default MProgress;