/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class InstructionsScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionsScene' })

    // set the title scene background and text to null
    this.instructionsSceneBackgroundImage= null
    this.instructionsSceneTitle= null
    this.instructionsSceneText= null
    this.instructionsSceneMusic = null
    this.menuButton = null

  // create styling for text
    this.instructionsSceneTitleStyle = { font: "170px times", fill: "#fde4b9", align: "center"}
    this.instructionsSceneTextStyle = { font: "40px times", fill: "#fde4b9", align: "center"}
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene and load the image
  preload () {
    console.log('Instructions Scene')
    this.load.image('instructionsSceneBackground', './assets/instructionsSceneBackground.png')
    this.load.image('menuButton', './assets/menuButton.png')  
    this.load.audio('instructions_music', './assets/instructions_music.mp3')
  }

  create (data) {

    this.instructionsSceneMusic = this.sound.add('instructions_music')
    this.instructionsSceneMusic.loop = true
    this.instructionsSceneMusic.play()
  
      //turn the background image into a sprite
    this.instructionsSceneBackground = this.add.sprite (
      0,
      0, 
      'instructionsSceneBackground'
    ).setScale(2.75)
    // center the image
    this.instructionsSceneBackground.x = 1920 / 2
    this.instructionsSceneBackground.y = 1080 / 2

    // add text for title scene
    this.instructionsSceneTitle = this.add.text (
      1920/2,
      (1080/2)-350,
      "Instructions",
      this.instructionsSceneTitleStyle
    ).setOrigin(0.5)

    this.instructionsSceneText = this.add.text (
      1920/2,
      (1080/2)+350,
      "You have been lost from your squad of stormtroopers, and are now \n being invaded by TIE fighters.  Shoot them down to get 5 points each \n using the space bar, and evade their attacks using arrows or A and D keys. \n If you get hit, you lose, but if you get a score of 55, you live to see another day.",
      this.instructionsSceneTextStyle
    ).setOrigin(0.5)
    
    // add the sprite for the start button
    this.menuButton = this.add.sprite(200, 70, "menuButton") 

    //make the start button interactive, and when clicked, call the clickButton() function
    this.menuButton.setInteractive({ useHandCursor : true})
    this.menuButton.on("pointerdown", () => this.clickMenu())

  }

  update (time, delta) {
    // pass
  }
   
  clickMenu() {
    this.scene.start("menuScene")
    this.instructionsSceneMusic.pause()
    }
}

// export the title scene
export default InstructionsScene