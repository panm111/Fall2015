import ddf.minim.*;
import ddf.minim.analysis.*;
import ddf.minim.effects.*;
import ddf.minim.signals.*;
import ddf.minim.spi.*;
import ddf.minim.ugens.*;

import processing.serial.*;
import spacebrew.*;
import cc.arduino.*;
import org.firmata.*;

Spacebrew sb;
Arduino arduino;
Minim minim;
AudioPlayer player;
AudioOutput out;
Serial port;

String server="149.31.135.144";
//String server="sandbox.spacebrew.cc";
//http://spacebrew.github.io/spacebrew/admin/admin.html?server=149.31.135.144
String name="CC Lab thing";
String description = "communicating with others";


float yPos = 7*height/7.5;
float blackKey = 7*height/8;
int circleRadius = 30;
  
 //float[] boxX = new float[3];
 //float[] boxY = new float[3];
 int boxSize = 20;
 //boolean mouseOverBox[] = new boolean[3];

 int ledPin_01 = 5; // the pin that the LED is attached to
 int ledPin_02 = 6; // the pin that the LED is attached to
 int ledPin_03 = 3;
 
void setup(){
 fullScreen();
//size(720, 1080);
  
  minim = new Minim(this);
  out = minim.getLineOut();
  out.setTempo( 80 );
  
  // instantiate the sb variable
  sb = new Spacebrew( this );

  // add each thing you publish to
  //sb.addPublish( "merrileeButton", "boolean", true ); 
  sb.addPublish ("merrileeCircle", "point2d", "{\"x\":0, \"y\":0}");

  // add each thing you subscribe to
  sb.addSubscribe("merrilee", "boolean");
  //sb.addSubscribe("merrileeCircle2", "point2d");

  // connect to spacebrew
  sb.connect(server, name, description );
 
}//end of setup

PVector localPoint = new PVector(0,0);
PVector remotePoint = new PVector(0,0);
JSONObject outgoing = new JSONObject();

void draw(){
  //background(50);
  
  //draw keyboard
  for (int i = 0; i<801; i= i+100){
  fill(255);
  stroke(1);
  rect(width/3,i, width/3, height/8);
  //print(height/8);
  }
  
  for (int i = 150; i<351; i = i+100){
   fill(0);
   rect(width/3, i, width/4, height/10);
  }
  
  for (int i = 550; i<701; i = i+100){
   fill(0);
   rect(width/3, i, width/4, height/10);
  }
  
  localPoint.set(mouseX, mouseY);
  //background(50);
  fill(0);
  ellipse(localPoint.x, localPoint.y, 20,20);
  fill(255);
  ellipse(remotePoint.x, remotePoint.y, 20,20);
  
  outgoing.setInt("x", mouseX);
  outgoing.setInt("y", mouseY);
  
  // since point2d is just JSON, can use P5's built-in objects
  // with the 'toString' method that converts into a string
  // note: all custom type's values MUST be converted to string!
  sb.send("merrileeCircle", "point2d", outgoing.toString());


 // Draw the box
 ellipseMode(CENTER);
 noStroke();
 fill(255,6,107);
 ellipse(2*width/3+250, height/2, 300, 300);

} //end of draw

void keyPressed(){
  sb.send("merrileeButton", true);
}

void keyReleased(){
  sb.send("merrileeButton", false);
}

void onRangeMessage( String name, int value ){
  println("got range message " + name + " : " + value);
}

void onBooleanMessage( String name, boolean value ){
  println("got boolean message " + name + " : " + value); 
  if(value==true){
       out.playNote("C");
       out.playNote("E");
       out.playNote("G");
 }
 
}//end of void

void onCustomMessage( String name, String type, String value ){
  if ( type.equals("point2d") ){
    // parse JSON!
    JSONObject m = JSONObject.parse( value );
    remotePoint.set( m.getInt("x"), m.getInt("y"));
  }
}