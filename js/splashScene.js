/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the splash scenes, ICS2O-Space-Aliens

// extend the splash scene into the phaser library
class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  } 

  // initialize the background color
  init (data) {
    this.cameras.main.setBackgroundColor('#658CBB')
  }

  // load image for splash scene
  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }


  create(data) {
    //turn the background image into a sprite
    this.splashSceneBackgroundImage = this.add.sprite (
      0,
      0, 
      'splashSceneBackground'
    )
    // center the image
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
 
  update (time, delta) {
    //if the time is greater than 3000, switch to the title scene
    if (time > 3000) {
     this.scene.switch('titleScene') 
    }
  }
}

//export the splash scene
export default SplashScene