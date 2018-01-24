/*rem 不同移动端适配*/
((doc, win) => {
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchang' : 'resize';
  var recalc = () => {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = 20 * (clientWidth / 640) + 'px';
  };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
