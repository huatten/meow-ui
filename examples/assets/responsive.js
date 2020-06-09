(function (window, document) {
  function resize() {
    const DESIGNWIDTH = 750;
    const ROOTVALUE = 100;
    let ww = window.innerWidth;
    if (ww > window.screen.width) {
      window.requestAnimationFrame(resize);
    } else {
      if (ww > DESIGNWIDTH) {
        ww = DESIGNWIDTH;
      }
      document.documentElement.style.fontSize = ww * ROOTVALUE / DESIGNWIDTH + 'px';
    }
  }
  resize();
  window.addEventListener('resize', resize);
})(window, document);
