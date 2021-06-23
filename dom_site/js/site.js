var siteModule = (function () {

    // public
    var init = function () {
        dataModule.init();
        fadeOutLogo();
        buildProjectTiles();
        configureCollapsibleButtons();
        configurePopupModal();
        configureSearchBar();
        toggleMouseResponse(true);
    };

    var toggleNav = function () {
        if ($("#myNav").is(":visible")) {
            $("#myNav").hide();
            $("#navButton").removeClass("nav-open");            
        }
        else {
            $("#myNav").show();
            $("#navButton").addClass("nav-open");
        }        
    }

    // private
    var arrowImageUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/white-arrow-transparent.png";
    var dotImageUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/dom_site/images/white_circle2.png";

    var fadeOutLogo = function () {
        $(window).load(function () {
            $(".logoload").delay(700).fadeOut(1500);
        });
    };

    var buildProjectTiles = function () {
        let grid = $("#projectGrid");
        dataModule.projects.forEach(function (project, i) {
            var gridItem = $(`<grid-item><img src="${arrowImageUrl}" /></grid-item>`);
            gridItem.appendTo(grid);

            // set div bg background color
            project.color = getRandomBackgroundColor(i);
            gridItem.css("background-color", project.color);

            // configure grid item image attributes
            var gridItemImage = gridItem.find("img");
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

        $(document).on(
            "dragstart",
            "grid-item img",
            function (e) {
                e.preventDefault();
            }
        )
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
    };

    var doProjectsIntersect = function (projectIndex1, projectIndex2) {
        var tags1 = dataModule.projects[projectIndex1].tags;
        var tags2 = dataModule.projects[projectIndex2].tags;
        var intersection = tags1.filter(value => tags2.includes(value));
        if (intersection.length > 0) {
            return true;
        }
        else {
            return dataModule.projects[projectIndex1].session == dataModule.projects[projectIndex2].session;
        }
    };

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
                else if (doProjectsIntersect(i, index)) {
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
            showProjectData(index, clickEvent);

            if (dataModule.projects[index].ref.hasClass("nomatch")) {
                var relevantSearchText = dataModule.projects[index].session + ", " + dataModule.projects[index].tags.join(", ");
                $("#textSearch").val(relevantSearchText.toUpperCase());
                handleTextSearch(relevantSearchText.toLowerCase());
            }
        }
        else {
            hideProjectData();
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
    };

    var configureCollapsibleButtons = function () {
        $(document).on(
            "click",
            ".collapsible button",
            function (e) {
                $(this).parent().find(".content").toggle();
            });
    };

    var configurePopupModal = function () {
        $("#slickbox").slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            draggable: false
        });

        $("#popup-modal").dialog({
            autoOpen: false,
            width: .7 * $(window).width(),
            resizable: true,
            close: function (e) {
                handleProjectSelection(e, -1);
            }
        });
    };

    var showProjectData = function (projectIndex, clickEvent) {
        var modal = $("#popup-modal");

        // show wait symbol

        var selectedProject = dataModule.projects[projectIndex];
        modal.find("h1.title").html(selectedProject.title);
        modal.find("h2.subtitle").html(selectedProject.subtitle);
        modal.find("h2.people").html(selectedProject.people);
        modal.find("div.description").html(selectedProject.description);
        modal.find("p.tags").html(selectedProject.tags.join(", "));
        modal.find("p.session").html(selectedProject.session);

        var imageBox = modal.find("div.images");
        var slickBox = $("#slickbox");
        var slideCount = slickBox.find("div.imageslide").length;

        for (i = 0; i < slideCount; i++) {
            // remove each existing slickbox slide
            slickBox.slick("slickRemove", 0);
        }

        if (selectedProject.image) {
            slickBox.slick("slickAdd", `<div class="imageslide"><a href="${selectedProject.image}" data-lightbox="projectImages"><img src="${selectedProject.image}" /></a></div>`);
            slickBox.slick("slickSetOption", "dots", false, true);
            imageBox.show();
        }
        else if (selectedProject.images) {
            selectedProject.images.forEach(function (image) {
                slickBox.slick("slickAdd", `<div class="imageslide"><a href="${image}" data-lightbox="projectImages"><img src="${image}" /></a></div>`);
            });
            slickBox.slick("slickSetOption", "dots", selectedProject.images.length > 1, true);
            imageBox.show();
        }
        else {
            slickBox.slick("slickSetOption", "dots", false, true);
            imageBox.hide();
        }

        $("#popup-modal")
            .dialog(
                "option",
                "position",
                "fixed",
                {
                    my: "right+100 bottom-10",
                    of: clickEvent,
                    collision: "fit",
                }
            )
            .dialog("open");
        slickBox.slick("refresh");
    };

    var hideProjectData = function () {
        $("#popup-modal").dialog("close");
    };

    var configureSearchBar = function () {
        $("#textSearch").on(
            "keyup",
            function (e) {
                handleTextSearch($(this).val().toLowerCase());
            }
        );

        $("#textSearch").on(
            "change",
            function (e) {
                handleTextSearch($(this).val().toLowerCase());
            }
        );

        $("#textSearch").on(
            "paste",
            function (e) {
                handleTextSearch($(this).val().toLowerCase());
            }
        );

        $("#textSearch").on(
            "focus",
            function (e) {
                // minimal text in the search so clear any selected projects
                var offset = $(this).offset();
                e.pageX = offset.left;
                e.pageY = offset.top;
                handleProjectSelection(e, -1);
            }
        );

        $(".buttoncontainer").on(
            "click",
            "a",
            function (e) {
                var searchText = $(this).text();
                $("#textSearch").val(searchText.toUpperCase());
                handleTextSearch(searchText.toLowerCase());
                e.preventDefault();
            });

        $("#textSearch").autocomplete({
            source: dataModule.globals.globalTags
        });
    };

    var tokenizeSearchValue = function (searchValue) {
        return searchValue.split(',')
            .map(token => $.trim(token));
    };

    var handleTextSearch = function (searchValue) {
        if (!searchValue || searchValue.length <= 2) {
            $("grid-item img")
                .removeClass("match nomatch");
        }
        else {
            var searchTokens = tokenizeSearchValue(searchValue);
            dataModule.projects.forEach(function (project, i) {
                if (isProjectMatch(project, searchTokens)) {
                    project.ref.addClass("match").removeClass("nomatch");
                }
                else {
                    project.ref.addClass("nomatch").removeClass("match");
                }
            });
        }
    };

    var isProjectMatch = function (project, searchTokens) {
        for (i = 0; i < searchTokens.length; i++) {
            var searchToken = searchTokens[i];
            if (project.title.toLowerCase().indexOf(searchToken) > -1) return true;
            if (project.subtitle && project.subtitle.toLowerCase().indexOf(searchToken) > -1) return true;
            if (project.people && project.people.toLowerCase().indexOf(searchToken) > -1) return true;
            if (project.session && project.session.toLowerCase().indexOf(searchToken) > -1) return true;

            var isMatch = false;
            project.tags.forEach(function (t) {
                if (t.toLowerCase().indexOf(searchToken) > -1) {
                    isMatch = true;
                    return;
                }
            });

            if (isMatch) {
                return true;
            }
        }

        return false;
    };

    return {
        init: init,
        toggleNav: toggleNav
    };
})();

$(document).ready(siteModule.init);