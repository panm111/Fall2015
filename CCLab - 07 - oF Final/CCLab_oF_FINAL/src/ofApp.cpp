#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofBackground(40);
//    ofSetBackgroundAuto(false);
}

//--------------------------------------------------------------
void ofApp::update(){
   
    
}

//--------------------------------------------------------------
void ofApp::draw(){


    ofTranslate(ofGetWidth()/2, ofGetHeight()/2);
    for (int i = 0; i < 360; i+=36) {
        for (int q = 0; q < 120; q+=12) {
            x = sin(ofDegToRad(i))*100+sin(ofDegToRad(i-q+ofGetFrameNum()))*50;
            y = cos(ofDegToRad(i))*100+cos(ofDegToRad(i-q+ofGetFrameNum()))*50;
            s = ofMap(q, 0, 120, 10, 0);
            ofSetColor(ofMap(q, 0, 140, 255, 0), 145, 80);
            ofCircle(x, y, s);
        }
        
        for (int q = 0; q < 140; q+=14) {
            x = sin(ofDegToRad(i))*150+sin(ofDegToRad(i+q-ofGetFrameNum()))*75;
            y = cos(ofDegToRad(i))*150+cos(ofDegToRad(i+q-ofGetFrameNum()))*75;
            s = ofMap(q, 0, 140, 15, 0);
            ofSetColor(ofMap(q, 0, 140, 255, 0), 145, 80);
            ofCircle(x, y, s);
        }
        
        for (int q = 0; q < 160; q+=16) {
            x = sin(ofDegToRad(i))*200+sin(ofDegToRad(i-q+ofGetFrameNum()))*100;
            y = cos(ofDegToRad(i))*200+cos(ofDegToRad(i-q+ofGetFrameNum()))*100;
            s = ofMap(q, 0, 160, 20, 0);
            ofSetColor(ofMap(q, 0, 140, 255, 0), 145, 80);
            ofCircle(x, y, s);
        }
        
        for (int q = 0; q < 180; q+=18) {
            x = sin(ofDegToRad(i))*250+sin(ofDegToRad(i+q-ofGetFrameNum()))*125;
            y = cos(ofDegToRad(i))*250+cos(ofDegToRad(i+q-ofGetFrameNum()))*125;
            s = ofMap(q, 0, 180, 25, 0);
            ofSetColor(ofMap(q, 0, 140, 255, 0), 145, 80);
            ofCircle(x, y, s);
        }

    }

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
