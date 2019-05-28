import MMarquee from "./marquee";
MMarquee.install = function (Vue) {
  Vue.component(MMarquee.name, MMarquee);
}
export default MMarquee;