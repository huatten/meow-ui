const inBrowser = typeof window !== "undefined";

/**
 * 判断元素是否含有某个class
 * @param el  元素
 * @param className class值
 * @returns {Boolean}
 */
export function hasClass(el, className) {
  let reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
  return reg.test(el.className);
}

/**
 * 给元素添加class
 * @param  el 元素
 * @param className className
 * @returns {*}
 */
export function addClass(el, className) {
  if (hasClass(el, className)) { return; };
  let newClass = el.className.split(" ");
  newClass.push(className);
  el.className = newClass.join("");
}

/**
 * 给元素删除class
 * @param  el 元素
 * @param className className
 * @returns {*}
 */
export function removeClass(el, className) {
  if (hasClass(el, className)) {
    el.className = el.className.replace(
      new RegExp("(\\s|^)" + className + "(\\s|$)"),
      " "
    );
  }
}

/**
 * 判断元素是否在body中
 * @param  el 元素
 * @returns {Boolean}
 */
export function isInDocument(el) {
  return document.body.contains(el);
}

/**
 * 根据属性，获取元素的样式值
 * @param el  元素
 * @param attr 属性
 * @param pseudoClass 元素伪类
 * @returns {*}
 */
export function getStyle(el, attr, pseudoClass = null) {
  return typeof getComputedStyle !== 'undefined' ? window.getComputedStyle(el, pseudoClass).getPropertyValue(attr) : el.style[attr];
}

/**
 * 获取属性，并且属性值是数字，而不是字符串
 * @param el 元素
 * @param attr 属性
 * @param pseudoClass 元素伪类
 * @returns {Number}
 */
export function getStyleNumber(el, attr, pseudoClass = null) {
  try {
    const val = getStyle(el, attr, pseudoClass);
    return parseFloat(val);
  } catch (e) {
    throw Error(e);
  }
}
/**
 * 检查是否滚动
 * @param {*} el
 */
export function checkOverflow(el) {
  let info = getStyle(el, "overflow") + getStyle(el, "overflow-y") + getStyle(el, "overflow-x");
  return /scroll|auto/.test(info);
};
/**
 * 寻找距离最近的scroll父元素
 * @param {*} el 元素
 * @returns {*}
 */
export function getScrollParent(el) {
  if (!inBrowser) { return; };
  if (!(el instanceof HTMLElement)) {
    throw new Error(`${el} is not an HTMLElement`);
  }
  let parent = el;
  while (parent) {
    if (parent === document.body || parent === document.documentElement) { break; };
    if (!parent.parentNode) { return null; };

    if (checkOverflow(parent)) { return parent; };
    parent = parent.parentNode;
  }
  return window;
}

/**
 * 判断元素是否在可视区或者可视区的倍数范围内
 * @param {*} el
 * @param {*} viewRate
 */
export function checkInView(el, viewRate = 1) {
  let top, right, bottom, left;
  const defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0 };
  try {
    ({ top, right, bottom, left } = el.getBoundingClientRect());
  } catch (error) {
    ({ top, right, bottom, left } = defaultBoundingClientRect);
  }
  const winWidth = getWidth(window);
  const winHeight = getHeight(window);
  return (
    top < winHeight * viewRate &&
    bottom > 0 &&
    left < winWidth * viewRate &&
    right > 0
  );
}
/**
 * 获取窗口的文档显示区的宽度
 * @param {*} obj
 * @param {*} param1
 */
export function getWidth(obj = window, { isScroll = false, isComputed = false } = {}) {
  if (window === obj) {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  } else {
    if (isScroll) {
      return obj.scrollWidth;
    } else if (isComputed) {
      const style = getStyle(obj);
      return parseInt(style.width);
    } else {
      return obj.offsetWidth;
    }
  }
}

/**
 * 获取窗口的文档显示区的高度
 * @param {*} obj
 * @param {*} param1
 */
export function getHeight(obj = window, { isScroll = false } = {}) {
  if (window === obj) {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  } else {
    if (isScroll) {
      return obj.scrollHeight;
    } else {
      return obj.offsetHeight;
    }
  }
};
