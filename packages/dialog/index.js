import MDialog from "./dialog.vue";
MDialog.install = function (Vue) {
  Vue.component(MDialog.name, MDialog)
};
export default MDialog;