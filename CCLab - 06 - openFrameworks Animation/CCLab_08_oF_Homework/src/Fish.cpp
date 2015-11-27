//
//  Fish.cpp
//  CCLab_08_oF_Homework
//
//  Created by Jackie Xu on 2015-11-10.
//
//

#include "Fish.h"
#include "ofMain.h"

Fish::Fish(){
    posX = ofRandom(-10,10);
    posY = ofGetHeight()*0.5;
//    velX = ofRandom(-5,5);
//    velY = ofRandom(-3,3);
    velY = ofRandom(0,ofGetHeight());
    
}

void Fish::setup(){
    r = ofRandom(255);
    g = ofRandom(255);
    b = ofRandom(255);
    
    
}

void Fish::display(){
    //circle
    ofSetColor(r,g,b);
    ofEllipse(posX, posY, 100, 25);
    
    //fin
    ofSetColor(r,g,b);
    ofTriangle(posX-25, posY, posX-50, posY+25, posX-50, posY-25);
    
}

void Fish::move(){
    wave = true;
    
    if(wave==true){
        posX = ofGetFrameNum()%ofGetWidth();
        posY = velY+(200*sin(ofGetFrameNum()*0.01));
    }


//    posX += velX;
//    posY += velY;
    
//    if(posX>ofGetWidth() || posX < -1){
//        velX = velX*(-1);
//    }
    
//    if(posY>ofGetHeight() || posY <0){
//        velY=velY*(-1);
//    }
}