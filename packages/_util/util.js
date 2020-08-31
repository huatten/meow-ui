/**
 * 节流函数
 * @param {*} fn
 * @param {*} interval
 */
export function throttle(fn, interval = 200) {
  let begin = 0;
  let setTm;
  if (!interval || interval <= 0) {
    return fn;
  };
  return function () {
    const now = Date.now();
    let _this = this;
    if (now - begin > interval) {
      begin = now;
      fn.apply(_this, arguments);
    } else {
      clearTimeout(setTm);
      setTm = setTimeout(fn.bind(_this, ...arguments), interval - (now - begin));
    }
  };
}
