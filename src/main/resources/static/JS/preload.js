document.addEventListener('DOMContentLoaded', function () {
    var postload = document.querySelector('.postload');
    {
        postload.style.opacity = 1;
    }

    function fadeOut(element, duration, delay) {
        var start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            if (progress < delay) {
                requestAnimationFrame(step);
                return;
            }
            var opacityPercentage = Math.min((progress - delay) / duration, 1);
            element.style.opacity = 1 - opacityPercentage;
            if (progress < (delay + duration)) {
                requestAnimationFrame(step);
            }
        }

        requestAnimationFrame(step);
    }

    fadeOut(postload, 3000, 5000);
});

