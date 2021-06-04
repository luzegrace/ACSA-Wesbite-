var siteModule = (function () {

    // public
    var init = function () {
        $(window).load(function () {
            $(".logoload").delay(500).fadeOut(1000);
        });

        $("divbg").each(function (i) {
            this.style.background = getRandomBackgroundColor(i);
        });

        $("grid-item").on(
            "site.rotateImg",
            function (e, mouseMoveEvent) {
                rotateOnMouse(mouseMoveEvent, $(this));
            }
        );

        $(document).mousemove(function (e) {
            $("grid-item").trigger("site.rotateImg", [ e ]);
        });
    };

    // private
    var getRandomValue = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    var getRandomBackgroundColor = function (index) {
        return `hsl(
                    ${(index * .8) - 5},    
                    ${getRandomValue(90, 105)}%, 
                    ${getRandomValue(49, 51)}%
                  )`;
    };

    var rotateOnMouse =  function (moveEvent, gridItem) {
        var offset = gridItem.offset();
        var centerX = (offset.left) + (gridItem.width() / 2);
        var centerY = (offset.top) + (gridItem.height() / 2);
        var mouseX = moveEvent.pageX;
        var mouseY = moveEvent.pageY;
        var distX = mouseX - centerX;
        var distY = mouseY - centerY;
        var radians = Math.atan2(distX, distY);
        var degree = (-90 + (radians * (180 / Math.PI) * -1));

        // only rotate the image relative to the center of the grid, not the entire grid
        gridItem.find("img")
            .css('-moz-transform', 'rotate(' + degree + 'deg)')
            .css('-webkit-transform', 'rotate(' + degree + 'deg)')
            .css('-o-transform', 'rotate(' + degree + 'deg)')
            .css('-ms-transform', 'rotate(' + degree + 'deg)');
    }

    return {
        init: init
    };
})();

$(document).ready(siteModule.init);