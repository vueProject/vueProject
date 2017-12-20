// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function() {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             docEl.style.fontSize = 10 * (clientWidth / 320) + 'px';
//         };
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);
// $(document).ready(() => {
//     // 初始化缩放框架
//     const scale = $('body').width() / 756;

//     $('html').css('font-size', `${100 * scale}px`);
// });
// new Vue ({
//     ready: function () {
//         const scale = $('body').width() / context.Configuration.PAGE_WIDTH;

//         $('html').css('font-size', `${100 * scale}px`);
//     },
// })
(function() {
    const scale = $('body').width() / 756;
    $('html').css('font-size', `${100 * scale}px`);
})();