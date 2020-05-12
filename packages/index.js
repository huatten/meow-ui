import MButton from "./button";
import MCell from "./cell";
import MIcon from "./icon";
import MLoading from "./loading";
import MSwitch from "./switch";
import MMarquee from "./marquee";
import MMarqueeItem from "./marquee-item";
import MNoticeBar from "./noticebar";
import MTransition from "./transition";
import MOverlay from "./overlay";
import MPopup from "./popup";
import MNotify from "./notify";
import MToast from "./toast";
import MRadio from "./radio";
import MRadioGroup from "./radio-gruop";
import MCheckbox from "./checkbox";
import MCheckboxGroup from "./checkbox-group";
import MSlider from "./slider";
import MCollapse from "./collapse";
import MCollapseItem from "./collapse-item";
import MDivider from "./divider";
import MShowHide from "./showhide";
import MSkeletonItem from "./skeleton-item";
import MSkeleton from "./skeleton";
const components = [
  MButton,
  MCell,
  MIcon,
  MLoading,
  MSwitch,
  MMarquee,
  MMarqueeItem,
  MNoticeBar,
  MTransition,
  MOverlay,
  MPopup,
  MNotify,
  MToast,
  MRadio,
  MRadioGroup,
  MCheckbox,
  MCheckboxGroup,
  MSlider,
  MCollapse,
  MCollapseItem,
  MDivider,
  MShowHide,
  MSkeletonItem,
  MSkeleton
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (!Vue && install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
//对外导出
const MEOW = {
  install,
  MButton,
  MCell,
  MIcon,
  MLoading,
  MSwitch,
  MMarquee,
  MMarqueeItem,
  MNoticeBar,
  MTransition,
  MOverlay,
  MPopup,
  MNotify,
  MToast,
  MRadio,
  MRadioGroup,
  MCheckbox,
  MCheckboxGroup,
  MSlider,
  MCollapse,
  MCollapseItem,
  MDivider,
  MShowHide,
  MSkeletonItem,
  MSkeleton
};
export default MEOW;
