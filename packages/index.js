/* Automatically generated by './build/build-entry.js' */
import MActionSheet from './action-sheet';
import MButton from './button';
import MCell from './cell';
import MCheckbox from './checkbox';
import MCheckboxGroup from './checkbox-group';
import MCollapse from './collapse';
import MCollapseItem from './collapse-item';
import MDialog from './dialog';
import MDivider from './divider';
import MIcon from './icon';
import MImage from './image';
import MLazyload from './lazyload';
import MLoading from './loading';
import MMarquee from './marquee';
import MMarqueeItem from './marquee-item';
import MNoticebar from './noticebar';
import MNotify from './notify';
import MOverlay from './overlay';
import MPopup from './popup';
import MProgress from './progress';
import MRadio from './radio';
import MRadioGruop from './radio-gruop';
import MShowhide from './showhide';
import MSkeleton from './skeleton';
import MSkeletonItem from './skeleton-item';
import MSlider from './slider';
import MSwitch from './switch';
import MToast from './toast';
import MTransition from './transition';
const version = '1.0.3';
const components = [
  MActionSheet,
  MButton,
  MCell,
  MCheckbox,
  MCheckboxGroup,
  MCollapse,
  MCollapseItem,
  MDialog,
  MDivider,
  MIcon,
  MImage,
  MLazyload,
  MLoading,
  MMarquee,
  MMarqueeItem,
  MNoticebar,
  MNotify,
  MOverlay,
  MPopup,
  MProgress,
  MRadio,
  MRadioGruop,
  MShowhide,
  MSkeleton,
  MSkeletonItem,
  MSlider,
  MSwitch,
  MToast,
  MTransition
];
const install = function (Vue) {
  if (!Vue && install.installed) return;
  components.map(component => Vue.component(component.name, component));
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  install,
  version,
  MActionSheet,
  MButton,
  MCell,
  MCheckbox,
  MCheckboxGroup,
  MCollapse,
  MCollapseItem,
  MDialog,
  MDivider,
  MIcon,
  MImage,
  MLazyload,
  MLoading,
  MMarquee,
  MMarqueeItem,
  MNoticebar,
  MNotify,
  MOverlay,
  MPopup,
  MProgress,
  MRadio,
  MRadioGruop,
  MShowhide,
  MSkeleton,
  MSkeletonItem,
  MSlider,
  MSwitch,
  MToast,
  MTransition
}
export default {
  install,
  version
}
