import ddf.minim.*;

Minim minim;
AudioPlayer groove;

void setup(){
  background(255);
  size(800,800);

  minim = new Minim(this);
  groove = minim.loadFile("ravel.mp3");
  //groove.play();
}//end of setup

void draw(){
  //background(255);
  //stroke(random(255), random(255), random(255));
  stroke(random(255));
  strokeWeight(0.3);
  for(int i = 0; i < groove.bufferSize()-1; i++){
    line( random(height), 400 + groove.left.get(i)*400, random(height), 400 + groove.left.get(i+1)*100 );
    line( random(height), 400 + groove.right.get(i)*400, random(height), 400 + groove.right.get(i+1)*100 );
  }
  
} //end of draw

void keyPressed() {
  if (key==' ')
    groove.play();
  if (key=='s')
    groove.pause();
}