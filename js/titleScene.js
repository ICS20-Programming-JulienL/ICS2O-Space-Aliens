/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })

    // set the title scene background and text to null
    this.titleSceneBackgroundImage= null
    this.titleSceneText= null

  // create styling for text
    this.titleSceneTextStyle = { font: "200px times", fill: "#fde4b9", align: "center"}
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene and load the image
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './images/stormtrooper_splash_scene.PNG')
  }

  create (data) {
      //turn the background image into a sprite
    this.titleSceneBackground = this.add.sprite (
      0,
      0, 
      'titleSceneBackground'
    ).setScale(2.75)
    // center the image
    this.titleSceneBackground.x = 1920 / 2
    this.titleSceneBackground.y = 1080 / 2

    // add text for title scene
    this.titleSceneText = this.add.text (
      1920/2,
      (1080/2)+350,
      "Stormtrooper Shooter",
      this.titleSceneTextStyle
    ).setOrigin(0.5)
  }

  // if more than 6 seconds has passed, switch the scene to the menu scene
  update (time, delta) {
    if (time > 6000) {
      this.scene.switch('menuScene') 
    }
  }
}

// export the title scene
export default TitleScene