var siteModule = (function () {

    // public
    var init = function () {
        fadeOutLogo();
        buildProjectTiles();
        configureCollapsibleButtons();
        toggleMouseResponse(true);
    };

    var showNav = function () {
        $("#myNav").show();
    }

    var hideNav = function () {
        $("#myNav").hide();
    }

    // private
    var arrowImageUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/white-arrow-transparent.png";
    var dotImageUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/Whitedot.png";

    var fadeOutLogo = function () {
        $(window).load(function () {
            $(".logoload").delay(500).fadeOut(1000);
        });
    };

    var buildProjectTiles = function () {
        let grid = $("#projectGrid");
        dataModule.projects.forEach(function (project, i) {
            var divbg = $(`<divbg><grid-item><img src="${arrowImageUrl}" /></grid-item></divbg>`);
            divbg.appendTo(grid);

            // set div bg background color
            project.color = getRandomBackgroundColor(i);
            divbg.css("background-color", project.color);

            // configure grid item image attributes
            var gridItemImage = divbg.find("grid-item img");
            gridItemImage.attr("alt", project.title);
            gridItemImage.attr("title", project.title);
            gridItemImage.data("projectIndex", i);
            project.ref = gridItemImage;
        });

        $(document).on(
            "site.rotateImg",
            "grid-item img",
            function (e, targetX, targetY) {
                rotateGridItemImage($(this), targetX, targetY);
            }
        );

        $(document).on(
            "click",
            "grid-item img",
            function (e) {
                handleProjectSelection(e, $(this).data("projectIndex"));
                return false;
            }
        );
    };

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

    var rotateGridItemImage = function (gridItemImage, targetX, targetY) {
        let radians;
        if (gridItemImage.hasClass("active")) {
            return;
        }

        var gridItem = gridItemImage.parent();
        var offset = gridItem.offset();
        var centerX = (offset.left) + (gridItem.width() / 2);
        var centerY = (offset.top) + (gridItem.height() / 2);

        if (gridItemImage.hasClass("disabled")) {
            radians = Math.atan2(centerX - targetX, centerY - targetY);
        }
        else {
            radians = Math.atan2(targetX - centerX, targetY - centerY);
        }

        var degree = (-90 + (radians * (180 / Math.PI) * -1));

        // only rotate the image relative to the center of the grid, not the entire grid
        gridItemImage
            .css('-moz-transform', 'rotate(' + degree + 'deg)')
            .css('-webkit-transform', 'rotate(' + degree + 'deg)')
            .css('-o-transform', 'rotate(' + degree + 'deg)')
            .css('-ms-transform', 'rotate(' + degree + 'deg)');
    }

    var doTagsIntersect = function (projectIndex1, projectIndex2) {
        var tags1 = dataModule.projects[projectIndex1].tags;
        var tags2 = dataModule.projects[projectIndex2].tags;
        var intersection = tags1.filter(value => tags2.includes(value));
        return intersection.length > 0;
    }

    var handleProjectSelection = function (clickEvent, index) {
        if (index >= 0
            && !dataModule.projects[index].ref.hasClass("active")) {
            toggleMouseResponse(false);
            dataModule.projects.forEach(function (project, i) {
                if (i == index) {
                    project.ref
                        .addClass("active")
                        .removeClass("related disabled")
                        .attr("src", dotImageUrl);
                }
                else if (doTagsIntersect(i, index)) {
                    project.ref
                        .addClass("related")
                        .removeClass("active disabled")
                        .attr("src", arrowImageUrl);
                }
                else {
                    project.ref
                        .addClass("disabled")
                        .removeClass("active related")
                        .attr("src", arrowImageUrl);
                }
            });

            var gridItem = dataModule.projects[index].ref.parent();
            var targetOffset = gridItem.offset();
            var centerX = (targetOffset.left) + (gridItem.width() / 2);
            var centerY = (targetOffset.top) + (gridItem.height() / 2);
            $("grid-item img").trigger("site.rotateImg", [centerX, centerY]);
        }
        else {
            $("grid-item img")
                .removeClass("active related disabled")
                .attr("src", arrowImageUrl);
            $("grid-item img").trigger("site.rotateImg", [clickEvent.pageX, clickEvent.pageY]);
            toggleMouseResponse(true);
        }
    };

    var toggleMouseResponse = function (enabled) {
        if (enabled) {
            $(document).on(
                "mousemove",
                function (e) {
                    $("grid-item img").trigger("site.rotateImg", [e.pageX, e.pageY]);
                });
        }
        else {
            $(document).off("mousemove");
        }
    }

    var configureCollapsibleButtons = function () {
        $(document).on(
            "click",
            ".collapsible button",
            function (e) {
                $(this).parent().find(".content").toggle();
            });
        /*// COLLAPSIBLE BUTTONS //
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}*/
    }
    

//var modalSelected = function() {
// let toggleMouseResponse
    //    var modal = $("#popup-modal");
       // modal.find("h1.title").html(projects[projectIndex].title);
       // modal.find("p.description").html(projects[projectIndex].description);
       // modal.find("p.image img").attr("src", projects[projectIndex].image);
      //  modal.find("p.tags").html(projects[projectIndex].tags.join(", "));
    
      // if ($.mobile.popup.active && $.mobile.popup.active.element[0] === modal[0]) {
      //  $("#popup-modal").popup("reposition", { x: posX, y: posY });}
     // else { $("#popup-modal").popup("open", { x: posX, y: posY });}
    
    //  var modalClick = function () {
      // let modal = $("#popup-modal");
      //  dataModule.projects.forEach(function (){
      //      modal.style.display = "block"; } }


  //  var modal = $("#popup-modal");

//    modal.onclick = function() {
   //   modal.style.display = "block";

    return {
        init: init,
        showNav: showNav,
        hideNav: hideNav
    };
})();

$(document).ready(siteModule.init);