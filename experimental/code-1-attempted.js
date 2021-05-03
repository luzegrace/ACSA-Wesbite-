var images = [
    {image: 'https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/arrow-line.png'},
    {image: 'https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/arrow-line.png'},
    {image: 'https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/arrow-line.png'},
    {image: 'https://cdn.jsdelivr.net/gh/luzegrace/ACSA-Wesbite-/arrow-line.png'},

];

var tileCount = 4;
  var tileWidth=shapeSize;
   var tileHeight=shapeSize;
   var shapeSize = 30;
    var shapeAngle = 0;
   var maxDist;

images.forEach(function(item){

    item.image = '<a href=""> <img src="'+item.image+'"/></a>';
      document.write(item.image+'<br />');

   });

   function setup() {

    createCanvas(1000, 1000);
 // imageMode(CENTER);
im=item.image
tileWidth = width / tileCount;
  tileHeight = height / tileCount;
  maxDist = sqrt(pow(width, 2) + pow(height, 2));
}


   function draw() {
    clear();

    var posX = tileWidth * im + tileWidth / 2;
    var posY = tileHeight * im + tileWidth / 2;


            // calculate angle between mouse position and actual position of the shape
            var angle = atan2(mouseY - posY, mouseX - posX) + (shapeAngle * (PI / 180));

            push();
            translate(posX, posY);
            rotate(angle);
            noStroke();
            image(shape, 0, 0, 20, 20);
            pop();


        }
