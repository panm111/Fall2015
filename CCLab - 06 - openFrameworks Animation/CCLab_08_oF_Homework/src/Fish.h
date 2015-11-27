//
//  Fish.h
//  CCLab_08_oF_Homework
//
//  Created by Jackie Xu on 2015-11-10.
//
//

#ifndef __CCLab_08_oF_Homework__Fish__
#define __CCLab_08_oF_Homework__Fish__

#include <stdio.h>
#include "ofMain.h"

#endif /* defined(__CCLab_08_oF_Homework__Fish__) */

class Fish{
public:
    //make your constructor
    Fish();
    
    //variables
    float posX, posY; //position
    float size; //size of our alien
    float r, g, b; //color of our alien
    float velX, velY; //moving our alien
    Boolean wave;
    
    //methods
    void setup();
    void display();
    void move();
    
};