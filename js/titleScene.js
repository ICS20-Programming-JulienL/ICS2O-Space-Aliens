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

    this.titleSceneBackgroundImage= null
    this.titleSceneText= null
    this.titleSceneTextStyle = { font: "200px times", fill: "#fde4b9", align: "center"}
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene
  preload () {
    console.log('Title Scene')
    this.load.image('titleSceneBackground', './assets/stormtrooper_splash_scene.PNG')
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

    this.titleSceneText = this.add.text (
      1920/2,
      (1080/2)+350,
      "Stormtrooper Shooter",
      this.titleSceneTextStyle
    ).setOrigin(0.5)
  }

  update (time, delta) {
    // pass
  }
}

// export the title scene
export default TitleScene