#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    for (int i=0; i<NUMMER; i++){
    merrilee[i].setup();
    }
    
}

//--------------------------------------------------------------
void ofApp::update(){
    for(int i=0; i<NUMMER; i++){
        merrilee[i].move();
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    for(int i=0; i<NUMMER; i++){
        merrilee[i].display();
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
