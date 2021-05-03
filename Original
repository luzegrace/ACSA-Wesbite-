var tileCount = 10;
    var tileWidth=shapeSize;
    var tileHeight=shapeSize;
    var shapeSize = 50;
    var shapeAngle = 0;
    var maxDist;
    var currentShape;
     var arrowUrl = "https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/Orange_arrow.png";


function preload() {
    shapes = [
       (loadImage(arrowUrl))];

}

function setup() {

  createCanvas(1000, 1000);
  imageMode(CENTER);
  // set the current shape to the first in the array
  currentShape = shapes[0];
  tileWidth = width / tileCount;
  tileHeight = height / tileCount;
  maxDist = sqrt(pow(width, 2) + pow(height, 2));
}

function draw() {
    clear();

    for (var gridY = 0; gridY < tileCount; gridY++) {
        for (var gridX = 0; gridX < tileCount; gridX++) {

            var posX = tileWidth * gridX + tileWidth / 2;
            var posY = tileHeight * gridY + tileWidth / 2;


            // calculate angle between mouse position and actual position of the shape
            var angle = atan2(mouseY - posY, mouseX - posX) + (shapeAngle * (PI / 180));

            push();
            translate(posX, posY);
            rotate(angle);
            noStroke();
            image(currentShape, 0, 0, 20, 20);
            pop();


        }
    }
}





