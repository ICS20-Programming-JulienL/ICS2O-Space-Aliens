/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: June 14 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the instruction scene into the phaser library
class InstructionsScene extends Phaser.Scene {
  constructor () {
    super({ key: 'instructionsScene' })

    // set the title scene background and text to null
    this.instructionsSceneBackgroundImage= null
    this.instructionsSceneTitle= null
    this.instructionsSceneText= null

    //set the menu button and music to null
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

  preload () {

    // console log the instructions scene
    console.log('Instructions Scene')

    // load the images
    this.load.image('instructionsSceneBackground', './assets/instructionsSceneBackground.png')
    this.load.image('menuButton', './assets/menuButton.png')

    // load the audio 
    this.load.audio('instructions_music', './assets/instructions_music.mp3')
  }

  create (data) {

    // play the looped background music
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

    // add title for instructions scene
    this.instructionsSceneTitle = this.add.text (
      1920/2,
      (1080/2)-350,
      "Instructions",
      this.instructionsSceneTitleStyle
    ).setOrigin(0.5)

    // add text for instructions scene
    this.instructionsSceneText = this.add.text (
      1920/2,
      (1080/2)+350,
      "You have lost your squad of stormtroopers, and are now \n being invaded by TIE fighters.  Shoot them down for 5 points each \n using the space bar, and evade their attacks using the arrow or A and D keys. \n If you get hit, you lose, but if you get a score of 50, you live to see another day.",
      this.instructionsSceneTextStyle
    ).setOrigin(0.5)
    
    // add the sprite for the menu button
    this.menuButton = this.add.sprite(200, 70, "menuButton") 

    //make the menu button interactive, and when clicked, call the clickMenu() function
    this.menuButton.setInteractive({ useHandCursor : true})
    this.menuButton.on("pointerdown", () => this.clickMenu())

  }

  update (time, delta) {
    // pass
  }
   
  clickMenu() {

    //start menu scene
    this.scene.start("menuScene")

    // pause music
    this.instructionsSceneMusic.pause()
    }
}

// export the instructions scene
export default InstructionsScene