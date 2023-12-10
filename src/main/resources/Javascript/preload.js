    document.addEventListener('DOMContentLoaded', function () {
        var postload = document.querySelectorAll('.postload');
        for (var j = 0; j < postload.length; j++) {
            postload[j].style.opacity = 1;
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
        for (var k = 0; k < postload.length; k++) {
            fadeOut(postload[k], 3000, 2000);
        }
    });
