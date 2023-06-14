/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class WinScene extends Phaser.Scene {
  constructor () {
    super({ key: 'winScene' })

    // set the title scene background and text to null
    this.winSceneBackground= null
    this.winSceneText= null
    this.menuButton = null


  // create styling for text
    this.winSceneTextStyle = { font: "200px times", fill: "#000000", align: "center"}
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene and load the image
  preload () {
    console.log('Win Scene')
    this.load.image('winSceneBackground', './assets/winSceneBackground.jpg')
    this.load.image('menuButton', './assets/menuButton.png')  
    this.load.image('retryButton', './assets/retryButton.png')  

  }

  create (data) {
      //turn the background image into a sprite
    this.winSceneBackground = this.add.sprite (
      0,
      0, 
      'winSceneBackground'
    ).setScale(2.75)
    // center the image
    this.winSceneBackground.x = 1920 / 2
    this.winSceneBackground.y = 1080 / 2

    // add text for title scene
    this.winSceneText = this.add.text (
      1920/2,
      -100,
      "You Win!",
      this.winSceneTextStyle
    ).setOrigin(0.5)

 // add the sprite for the start button
    this.menuButton = this.add.sprite(1920/2, (1080/2) - 50, "menuButton") 
    this.retryButton = this.add.sprite((1920/2)+20, (1080/2) + 120, "retryButton") 

    //make the start button interactive, and when clicked, call the clickButton() function
    this.menuButton.setInteractive({ useHandCursor : true})
    this.menuButton.on("pointerdown", () => this.clickMenu())

    this.retryButton.setInteractive({ useHandCursor : true})
    this.retryButton.on("pointerdown", () => this.clickRetry())

    this.tweens.add ({
        targets: this.winSceneText,
    y: (1080/2)-350,
    ease: 'Linear',       
    duration: 1000,
    repeat: 0,       
    yoyo: false,
    })
  }

  update (time, delta) {
    // pass
  }
   
  clickMenu() {
    this.scene.start("menuScene")
  }

  clickRetry() {
    this.scene.start("gameScene")
  }
}

// export the title scene
export default WinScene