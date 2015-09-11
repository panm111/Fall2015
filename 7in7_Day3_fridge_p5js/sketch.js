var shelf, door, doorOpen, pizza, bun, apple, cheeseburger, hotdog, banana, sushi;

function preload() {
	shelf = loadImage("images/Shelf-01.jpg");
	door = loadImage("images/Door-01.jpg");
// 	doorOpen = loadImage("images/Open-01.jpg");
	pizza = loadImage("images/Pizza-01.png");
	bun = loadImage("images/Bun.png");
	apple = loadImage("images/Apple-01.png");
// 	cheeseburger = loadImage("images/Cheeseburger-01.png");
	hotdog = loadImage("images/Hotdog-01.png");
	banana = loadImage("images/Banana-01.png");
	sushi = loadImage("images/Sushi-01.png");
}

function setup() {
  //set canvas
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
 }

function draw() {
   //display door closed
  image(door, windowWidth/2,windowHeight/2, windowWidth, windowHeight);
}

function mouseClicked(){
frameRate(0.5);
 //loaded shelf background
  image(shelf, windowWidth/2,windowHeight/2, windowWidth, windowHeight);

var food = [ pizza, bun, apple, cheeseburger, hotdog, banana, sushi ];
var index = floor(random(food.length));
 image(food[index],windowWidth/2,windowHeight/2, 500, 500);
 
// var item = random(foods.length);
// image(foods[item],0,0, 20,20);
// }
} //end of mouseclicked


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}//end of windowresize