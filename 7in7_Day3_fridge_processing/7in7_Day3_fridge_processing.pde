PImage shelf, door, doorOpen;

PImage[] images = new PImage[2];

void setup() {
 //set canvas
 size(1280, 800);
  
 //load images
 door = loadImage("Door-01.jpg");
 doorOpen = loadImage("Open-01.jpg");
 shelf = loadImage("Shelf-01.jpg");
 
 for (int i = 0; i < images.length; i++){
   images[i] = loadImage(i + ".png");
 }
 
} //end of setup

void draw() {
   //display door closed
  image(door, 0,0, width, height);
} //end of draw

void mouseClicked(){

 frameRate(0.5);
 //loaded shelf background
 image(shelf, 0,0, width, height);
 
 //imageMode(CENTER);
 image(images[(int)random(2)], width/3.5, height/3.5, 500,500);
 
}
//end of mouse clicked