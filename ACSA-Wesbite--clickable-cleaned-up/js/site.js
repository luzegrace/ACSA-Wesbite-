var tileCount;
var tileWidth;
var tileHeight;
var shapeSize = 50;
var shapeAngle = 225;
var maxDist;
var shapes;
var arrowUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/orange-arrow.png";
var lineUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/grey-arrow.png";
var redDot = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/images/red-dot.png";
var selectedProjectIndex;
var selProjectIndex;
var canvas;
let extraCanvas;
var button;
var angle;
var targetPosX;
var targetPosY;
var projectIndex;



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
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] },
    { title: "Project 1", description: "", tags: [ "dog" ] },
    { title: "Project 2", description: "", tags: [ "dog", "cat" ] },
    { title: "Project 3", description: "", tags: [ "horse", "cat" ] },
    { title: "Project 4", description: "", tags: [ "dog", "snake" ] },
    { title: "Project 5", description: "", tags: [ "snake" ] },
    { title: "Project 6", description: "", tags: [ "horse", "eel" ] },
    { title: "Project 7", description: "", tags: [ "eel", "mouse" ] },
    { title: "Project 8", description: "", tags: [ "mouse" ] },
    { title: "Project 9", description: "", tags: [ "dog", "mouse" ] },
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] },
    { title: "Project 1", description: "", tags: [ "dog" ] },
    { title: "Project 2", description: "", tags: [ "dog", "cat" ] },
    { title: "Project 3", description: "", tags: [ "horse", "cat" ] },
    { title: "Project 4", description: "", tags: [ "dog", "snake" ] },
    { title: "Project 5", description: "", tags: [ "snake" ] },
    { title: "Project 6", description: "", tags: [ "horse", "eel" ] },
    { title: "Project 7", description: "", tags: [ "eel", "mouse" ] },
    { title: "Project 8", description: "", tags: [ "mouse" ] },
    { title: "Project 9", description: "", tags: [ "dog", "mouse" ] },
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] },
    { title: "Project 1", description: "", tags: [ "dog" ] },
    { title: "Project 2", description: "", tags: [ "dog", "cat" ] },
    { title: "Project 3", description: "", tags: [ "horse", "cat" ] },
    { title: "Project 4", description: "", tags: [ "dog", "snake" ] },
    { title: "Project 5", description: "", tags: [ "snake" ] },
    { title: "Project 6", description: "", tags: [ "horse", "eel" ] },
    { title: "Project 7", description: "", tags: [ "eel", "mouse" ] },
    { title: "Project 8", description: "", tags: [ "mouse" ] },
    { title: "Project 9", description: "", tags: [ "dog", "mouse" ] },
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] },
    { title: "Project 1", description: "", tags: [ "dog" ] },
    { title: "Project 2", description: "", tags: [ "dog", "cat" ] },
    { title: "Project 3", description: "", tags: [ "horse", "cat" ] },
    { title: "Project 4", description: "", tags: [ "dog", "snake" ] },
    { title: "Project 5", description: "", tags: [ "snake" ] },
    { title: "Project 6", description: "", tags: [ "horse", "eel" ] },
    { title: "Project 7", description: "", tags: [ "eel", "mouse" ] },
    { title: "Project 8", description: "", tags: [ "mouse" ] },
    { title: "Project 9", description: "", tags: [ "dog", "mouse" ] },
    { title: "Project 10", description: "", tags: [ "bear", "cat" ] },
];

function preload() {
    shapes = {
        default: loadImage(arrowUrl),
        active: loadImage(redDot),
        related: loadImage(arrowUrl),
        inactive: loadImage(lineUrl)
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function setup() {

    canvas = createCanvas(900,900);
    canvas.position (150, 150);
    extraCanvas = createGraphics(windowWidth, windowHeight, WEBGL);
    extraCanvas.clear();
    imageMode(CENTER);

    
    tileCount = Math.ceil(Math.sqrt(projects.length));
    tileWidth = width / tileCount;
    tileHeight = height / tileCount;

  
    var projectIndex = 0;

 

         
this.clicked = function() {
    var d = dist(mouseX,mouseY,targetPosX, targetPosY)
   if(d<50){
     selectedProjectIndex; }}

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount && projectIndex < projects.length; gridX++, projectIndex++) {
            projects[projectIndex].posX = tileWidth * gridX + tileWidth / 2;
            projects[projectIndex].posY = tileHeight * gridY + tileWidth / 2;
            }
        }
    }





function draw() {
    clear();
    //background('#00aaff');
    var projectIndex = 0;

    for (var projectIndex = 0; projectIndex < projects.length; projectIndex++) {
        var posX = projects[projectIndex].posX;
        var posY = projects[projectIndex].posY;

        // calculate angle between mouse position and actual position of the shape

        var currentShape;

       

        if (selectedProjectIndex >= 0) {
            if (projectIndex == selectedProjectIndex) {
                // render active 
                currentShape = shapes.active;
            }
            else if (doTagsIntersect(selectedProjectIndex, projectIndex)) {
                // do my tags, match the tags of the selected project?
                currentShape = shapes.related
                targetPosX = projects[selectedProjectIndex].posX;
                targetPosY = projects[selectedProjectIndex].posY;
    
                angle= atan2(targetPosY - posY, targetPosX - posX) + (shapeAngle * (PI /180));
            }
            else {
                currentShape = shapes.inactive;
                targetPosX = projects[selectedProjectIndex].posX;
            targetPosY = projects[selectedProjectIndex].posY;

            angle= atan2(targetPosY - posY, targetPosX - posX) + (shapeAngle * (PI /180));
            }

        }
        else {
            currentShape = shapes.default;
           angle= atan2(mouseY - posY, mouseX - posX) + (shapeAngle * (PI /180));

            targetPosX = mouseX;
            targetPosY = mouseY;
        }



        renderShape(posX, posY, angle, currentShape);
    }

   // if (hasClicked) {
     //   selectedProjectIndex[0];
      //  posY += 1;
   //   }

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


//code works but doesn't click on each project
function mousePressed() {
    if(selectedProjectIndex <= 0) {
        selectedProjectIndex = 2;

   }
   else { selectedProjectIndex= -1;}
}


//But this one was supposed to work with the one above but didn't do anything not sure why
    //this.clicked(posX,posY); {
           //var d = dist(posX,posY,targetPosX, targetPosY)
    // if(d<tileWidth){
          // projects.projectIndex; }}

//right now it clicks but disappears
    //function mousePressed() {
        //var projectIndex = 0
        //projects[projectIndex]
   // if(selectedProjectIndex = projects.length){
        //selectedProjectIndex.push (projects[projectIndex]); }}

$(document).ready(function () {
    preload();
    setup();
});