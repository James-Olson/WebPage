/*document.addEventListener('DOMContentLoaded', function () {
    var curtain = document.querySelector('#curtain');
    {
        curtain.style.opacity = 1;
    }*/

/*function first(){
    document.curtain.style.opacity = 1;
}*/

var curtain = document.querySelector('#curtain')
function fadeOut(curtain, duration, delay) {
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

