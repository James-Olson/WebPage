var text = document.querySelector('#aboutmetext')
function textscroll(text, duration, delay) {
    var start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        if (progress < delay) {
            requestAnimationFrame(step);
            return;
        }
        var opacityPercentage = Math.min((progress - delay) / duration, 1);
        curtain.style.opacity = 1 - opacityPercentage;
        if (progress < (delay + duration)) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

fadeOut(curtain, 3000, 2000);



/*document.getScroll = function() {
    if (window.pageYOffset != undefined) {
        return [pageXOffset, pageYOffset];
    } else {
        var sx, sy, d = document,
            r = d.documentElement,
            b = d.body;
        sx = r.scrollLeft || b.scrollLeft || 0;
        sy = r.scrollTop || b.scrollTop || 0;
        return [sx, sy];
    }*/
