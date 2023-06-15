/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the menu scene, ICS2O-Space-Aliens

// extend the menu scene into the phaser library
class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })

    // assign the background image and start button to null
    this.menuSceneBackgroundImage= null
    this.startButton = null
    this.menuSceneMusic = null
  }

  
  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    // console log the menu scene
    console.log('Menu Scene')

    // load the images
    this.load.image('menuSceneBackground', './images/stormtrooper_menu_scene.png')
    this.load.image('startButton', './images/start.png')
    this.load.image('instructionsButton', './images/instructionsButton.png')  

    //load the audio
    this.load.audio('menu_music', './sounds/menu_music.mp3')
  }

  create (data) {

     // play the looped background music
    this.menuSceneMusic = this.sound.add('menu_music')
    this.menuSceneMusic.loop = true
    this.menuSceneMusic.play()   

    // add the sprite for the menu background
    this.menuSceneBackground = this.add.sprite (
      0,
      0, 
      'menuSceneBackground'
    ).setScale(3.75)
    
    // center the image
    this.menuSceneBackground.x = 1920 / 2
    this.menuSceneBackground.y = 1080 / 2

    // add the sprite for the start button and instructions button
    this.startButton = this.add.sprite(1920/2, (1080/2) - 50, "startButton") 
    this.instructionsButton = this.add.sprite(1920/2, (1080/2)+100, "instructionsButton") 

    //make the start button interactive, and when clicked, call the clickStart() function
    this.startButton.setInteractive({ useHandCursor : true})
    this.startButton.on("pointerdown", () => this.clickStart())

    //make the instructions button interactive, and when clicked, call the clickInstructions() function
    this.instructionsButton.setInteractive({ useHandCursor : true})
    this.instructionsButton.on("pointerdown", () => this.clickInstructions())

  }

  update (time, delta) {
  }

  clickStart() {
    // start game scene
    this.scene.start("gameScene")

    //pause the music
    this.menuSceneMusic.pause()
  }

  clickInstructions () {

    // start the instructions scene
    this.scene.start("instructionsScene")

    //pause the music
    this.menuSceneMusic.pause()
  }
}

// export the menu scene
export default MenuScene