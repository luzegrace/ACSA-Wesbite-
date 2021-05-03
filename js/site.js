var tileCount;
var tileWidth;
var tileHeight;
var shapeSize = 50;
var shapeAngle = 0;
var maxDist;
var shapes;
var arrowUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/Orange_arrow.png";
var lineUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/arrow-line.png";
var selectedProjectIndex = 5;

var projects = [
    { title: "Project 1", description: "", tags: [ "dog" ] },
    { title: "Project 2", description: "", tags: [ "dog", "cat" ] },
    { title: "Project 3", description: "", tags: [ "horse", "cat" ] },
    { title: "Project 4", description: "", tags: [ "dog", "snake" ] },
    { title: "Project 5", description: "", tags: [ "snake" ] },
    { title: "Project 6", description: "", tags: [ "horse", "eel" ] },
    { title: "Project 7", description: "", tags: [ "eel", "mouse" ] },
    { title: "Project 8", description: "", tags: [ "mouse" ] },
    { title: "Project 9", description: "", tags: [ "dog", "mouse" ] },
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] }
];

function preload() {
    shapes = {
        default: loadImage(arrowUrl),
        active: loadImage(lineUrl),
        related: loadImage(lineUrl),
        inactive: loadImage(arrowUrl)
    }
}

function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);
    tileCount = Math.ceil(Math.sqrt(projects.length));
    tileWidth = width / tileCount;
    tileHeight = height / tileCount;
    
    maxDist = sqrt(pow(width, 2) + pow(height, 2));

    var projectIndex = 0;
    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount && projectIndex < projects.length; gridX++, projectIndex++) {
            projects[projectIndex].posX = tileWidth * gridX + tileWidth / 2;
            projects[projectIndex].posY = tileHeight * gridY + tileWidth / 2;
        }
    }
}

function draw() {
    clear();

    var projectIndex = 0;
    for (var projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        var posX = projects[projectIndex].posX;
        var posY = projects[projectIndex].posY;

        // calculate angle between mouse position and actual position of the shape
        var angle;
        var targetPosX;
        var targetPosY;

        var currentShape;
        if (selectedProjectIndex >= 0) {
            if (projectIndex == selectedProjectIndex) {
                // render active 
                currentShape = shapes.active;
            }
            else if (doTagsIntersect(selectedProjectIndex, projectIndex)) {
                // do my tags, match the tags of the selected project?
                currentShape = shapes.related
            }
            else {
                currentShape = shapes.inactive;
            }

            targetPosX = projects[selectedProjectIndex].posX;
            targetPosY = projects[selectedProjectIndex].posY;
        }
        else {
            currentShape = shapes.default;

            targetPosX = mouseX;
            targetPosY = mouseY;
        }

        // no project selected, so point to mouse
        angle = atan2(targetPosX - posY, targetPosY - posX) + (shapeAngle * (PI / 180))

        renderShape(posX, posY, angle, currentShape);
    }
}

function renderShape(posX, posY, angle, shape) {
    push();
    translate(posX, posY);
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

$(document).ready(function () {
    preload();
    setup();
});