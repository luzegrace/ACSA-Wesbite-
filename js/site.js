// constants
var ShapeSize = 50;
var ClickDistance = 25;
var ShapeAngleOffsetRatio = 227 / 180;
var ArrowUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/orange-arrow.png";
var LineUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/grey-arrow.png";
var RedDot = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/red-dot.png";

// variables
var tileCount;
var tileWidth;
var tileHeight;
var tileWidthOffset;
var tileHeightOffset;
var shapes;
var selectedProjectIndex = -1;
var canvas;
let extraCanvas;

var projects = [
    { title: "Project 1", description: "", tags: ["dog"] },
    { title: "Project 2", description: "", tags: ["dog", "cat"] },
    { title: "Project 3", description: "", tags: ["horse", "cat"] },
    { title: "Project 4", description: "", tags: ["dog", "snake"] },
    { title: "Project 5", description: "", tags: ["snake"] },
    { title: "Project 6", description: "", tags: ["horse", "eel"] },
    { title: "Project 7", description: "", tags: ["eel", "mouse"] },
    { title: "Project 8", description: "", tags: ["mouse"] },
    { title: "Project 9", description: "", tags: ["dog", "mouse"] },
    { title: "Project 10", description: "", tags: ["bear", "cat"] },
    { title: "Project 11", description: "", tags: ["dog"] },
    { title: "Project 12", description: "", tags: ["dog", "cat"] },
    { title: "Project 13", description: "", tags: ["horse", "cat"] },
    { title: "Project 14", description: "", tags: ["dog", "snake"] },
    { title: "Project 15", description: "", tags: ["snake"] },
    { title: "Project 16", description: "", tags: ["horse", "eel"] },
    { title: "Project 17", description: "", tags: ["eel", "mouse"] },
    { title: "Project 18", description: "", tags: ["mouse"] },
    { title: "Project 19", description: "", tags: ["dog", "mouse"] },
    { title: "Project 20", description: "", tags: ["bear", "cat"] },
    { title: "Project 21", description: "", tags: ["dog"] },
    { title: "Project 22", description: "", tags: ["dog", "cat"] },
    { title: "Project 23", description: "", tags: ["horse", "cat"] },
    { title: "Project 24", description: "", tags: ["dog", "snake"] },
    { title: "Project 25", description: "", tags: ["snake"] },
    { title: "Project 26", description: "", tags: ["horse", "eel"] },
    { title: "Project 27", description: "", tags: ["eel", "mouse"] },
    { title: "Project 28", description: "", tags: ["mouse"] },
    { title: "Project 29", description: "", tags: ["dog", "mouse"] },
    { title: "Project 30", description: "", tags: ["bear", "cat"] },
    { title: "Project 31", description: "", tags: ["dog"] },
    { title: "Project 32", description: "", tags: ["dog", "cat"] },
    { title: "Project 33", description: "", tags: ["horse", "cat"] },
    { title: "Project 34", description: "", tags: ["dog", "snake"] },
    { title: "Project 35", description: "", tags: ["snake"] },
    { title: "Project 36", description: "", tags: ["horse", "eel"] },
    { title: "Project 37", description: "", tags: ["eel", "mouse"] },
    { title: "Project 38", description: "", tags: ["mouse"] },
    { title: "Project 39", description: "", tags: ["dog", "mouse"] },
    { title: "Project 40", description: "", tags: ["bear", "cat"] },
    { title: "Project 41", description: "", tags: ["dog"] },
    { title: "Project 42", description: "", tags: ["dog", "cat"] },
    { title: "Project 43", description: "", tags: ["horse", "cat"] },
    { title: "Project 44", description: "", tags: ["dog", "snake"] },
    { title: "Project 45", description: "", tags: ["snake"] },
    { title: "Project 46", description: "", tags: ["horse", "eel"] },
    { title: "Project 47", description: "", tags: ["eel", "mouse"] },
    { title: "Project 48", description: "", tags: ["mouse"] },
    { title: "Project 49", description: "", tags: ["dog", "mouse"] },
    { title: "Project 50", description: "", tags: ["bear", "cat"] },
];

function preload() {
    shapes = {
        default: loadImage(ArrowUrl),
        active: loadImage(RedDot),
        related: loadImage(ArrowUrl),
        inactive: loadImage(LineUrl)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    canvas = createCanvas(900, 900);
    canvas.position(150, 150);
    extraCanvas = createGraphics(windowWidth, windowHeight, WEBGL);
    extraCanvas.clear();
    imageMode(CENTER);
    //createCanvas.parent('popup-modal');

    tileCount = Math.ceil(Math.sqrt(projects.length));
    tileWidth = width / tileCount;
    tileHeight = height / tileCount;
    tileWidthOffset = tileWidth / 2;
    tileHeightOffset = tileHeight / 2;

    // set up project positions
    var projectIndex = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount && projectIndex < projects.length; gridX++, projectIndex++) {
            // the offsets place the drawings in the center of a given tile
            projects[projectIndex].posX = tileWidth * gridX + tileWidthOffset;
            projects[projectIndex].posY = tileHeight * gridY + tileHeightOffset;
            projects[projectIndex].angle = 0;
            projects[projectIndex].related = false;
        }
    }
}

function draw() {
    clear();
    for (var projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        var posX = projects[projectIndex].posX;
        var posY = projects[projectIndex].posY;

        var currentShape;
        var angle = projects[projectIndex].angle;

        if (selectedProjectIndex >= 0) {
            if (projectIndex == selectedProjectIndex) {
                // render active 
                currentShape = shapes.active;
                angle = 0;
            }
            else if (projects[projectIndex].related) {
                // do my tags, match the tags of the selected project?
                currentShape = shapes.related
            }
            else {
                currentShape = shapes.inactive;
            }

        }
        else {
            // no selected project so dynamically calculate the rotation angle
            currentShape = shapes.default;
            angle = atan2(posY - mouseY, posX - mouseX);
        }

        renderShape(posX, posY, angle, currentShape);
    }
}

function renderShape(posX, posY, angle, shape) {
    push();
    translate(posX, posY);

    // rotate to compensate for image tilt
    rotate(ShapeAngleOffsetRatio * PI);

    // rotate image by requested angle
    rotate(angle);
    noStroke();
    image(shape, 0, 0, 50, 50);
    pop();
}

function doTagsIntersect(projectIndex1, projectIndex2) {
    var tags1 = projects[projectIndex1].tags;
    var tags2 = projects[projectIndex2].tags;
    var intersection = tags1.filter(value => tags2.includes(value));
    return intersection.length > 0;
}

function findMatchingProjectIndex(targetPosX, targetPosY) {
    var matchingProjectIndex = -1;
    for (var projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        var d = dist(targetPosX, targetPosY, projects[projectIndex].posX, projects[projectIndex].posY);
        if (d < ClickDistance) {
            matchingProjectIndex = projectIndex;
            break;
        }
    }

    return matchingProjectIndex;
}

function updateProjectSelectionState(targetProjectIndex) {
    selectedProjectIndex = targetProjectIndex;

    for (var projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        var posX = projects[projectIndex].posX;
        var posY = projects[projectIndex].posY;

        if (selectedProjectIndex >= 0) {
            var targetPosX = projects[selectedProjectIndex].posX;
            var targetPosY = projects[selectedProjectIndex].posY;

            if (projectIndex == selectedProjectIndex) {
                projects[projectIndex].angle = 0;
                projects[projectIndex].related = false;
            }
            else if (doTagsIntersect(selectedProjectIndex, projectIndex)) {
                projects[projectIndex].related = true;
                projects[projectIndex].angle = atan2(posY - targetPosY, posX - targetPosX);
            }
            else {
                projects[projectIndex].related = false;
                projects[projectIndex].angle = atan2(targetPosY - posY, targetPosX - posX);
            }
        }
        else {
            projects[projectIndex].angle = 0;
            projects[projectIndex].related = false;
        }
    }
}

function mousePressed() {
    // cycle through each project to find the first project that
    var matchingProjectIndex = findMatchingProjectIndex(mouseX, mouseY);
    var modal = document.getElementById("popup-modal");

    var span = document.getElementsByClassName("close")[0];

    //I tried to add these to see if it worked.
    // modal.appendChild(span);
    // var content = document.getElementsByClassName("modal-content");

    if (matchingProjectIndex >= 0 && matchingProjectIndex != selectedProjectIndex) {
        // update the project selection to reduce excess work performed during draw loop
        updateProjectSelectionState(matchingProjectIndex);

        modal.style.display = "block";

    //my various attempts.....
        //modal.style.display = "block" + projects[matchingProjectIndex].title;
        //matchingProjectIndex((projects[matchingProjectIndex].title))
        //(projects[matchingProjectIndex].title) (modal.style.display = ("block")) = content;
        //projects[matchingProjectIndex].title = document.getElementById("popup-modal");

        // a new project was selected
       // console.log("Luz: Open or update modal dialog: Title: " + projects[matchingProjectIndex].title)

    }
    else if (selectedProjectIndex >= 0 && matchingProjectIndex == -1) {
        // update the project selection to reduce excess work performed during draw loop
        updateProjectSelectionState(matchingProjectIndex);

    //this works but kind of like if i click on the modal itself it disappears too
         modal.style.display = "none";
         //span.style.display = "none";

        // current project was unselected, so close dialog
       // console.log("Luz: Close modal dialog")

    }
    else {
        // nothing has changed so do nothing
    }
}

$(document).ready(function () {
});