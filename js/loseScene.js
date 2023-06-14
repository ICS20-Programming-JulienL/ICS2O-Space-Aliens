/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class LoseScene extends Phaser.Scene {
  constructor () {
    super({ key: 'loseScene' })

    // set the title scene background and text to null
    this.loseSceneBackground= null
    this.loseSceneText1= null
    this.loseSceneText2= null

    this.menuButton = null


  // create styling for text
    this.loseSceneTextStyle = { font: "200px times", fill: "#ffffff", align: "center"}
    
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene and load the image
  preload () {
    console.log('Win Scene')
    this.load.image('loseSceneBackground', './assets/loseSceneBackground.jpg')
    this.load.image('menuButton', './assets/menuButton.png')  
    this.load.image('retryButton', './assets/retryButton.png')  

  }

  create (data) {
      //turn the background image into a sprite
    this.loseSceneBackground = this.add.sprite (
      0,
      0, 
      'loseSceneBackground'
    ).setScale(2.75)
    // center the image
    this.loseSceneBackground.x = 1920 / 2
    this.loseSceneBackground.y = 1080 / 2

    // add text for title scene
    this.loseSceneText1 = this.add.text (
      -100,
      250,
      "You",
      this.loseSceneTextStyle
    ).setOrigin(0.5)

    this.loseSceneText2 = this.add.text (
      2220,
      250,
      "Lose!",
      this.loseSceneTextStyle
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
        targets: this.loseSceneText1,
    x : (1920/2)-200,
    ease: 'Linear',       
    duration: 1000,
    repeat: 0,       
    yoyo: false,
    })

     this.tweens.add ({
        targets: this.loseSceneText2,
    x : (1920/2)+250,
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
export default LoseScene