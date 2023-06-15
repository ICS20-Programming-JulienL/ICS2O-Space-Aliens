/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: June 14 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class WinScene extends Phaser.Scene {
  constructor () {
    super({ key: 'winScene' })

    // set the win scene background and text to null
    this.winSceneBackground= null
    this.winSceneText= null

    // set the music and button to null
    this.menuButton = null
    this.winSceneMusic = null


  // create styling for text
    this.winSceneTextStyle = { font: "200px times", fill: "#000000", align: "center"}
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {

    // console log the win scene
    console.log('Win Scene')

    // load the images
    this.load.image('winSceneBackground', './assets/winSceneBackground.jpg')
    this.load.image('menuButton', './assets/menuButton.png')  
    this.load.image('retryButton', './assets/retryButton.png')  

    //laod the audio
    this.load.audio('win_music', './assets/win_music.mp3')

  }

  create (data) {

    // play the looped background music
    this.winSceneMusic = this.sound.add('win_music')
    this.winSceneMusic.loop = true
    this.winSceneMusic.play()
    
      //turn the background image into a sprite
    this.winSceneBackground = this.add.sprite (
      0,
      0, 
      'winSceneBackground'
    ).setScale(2.75)
    
    // center the image
    this.winSceneBackground.x = 1920 / 2
    this.winSceneBackground.y = 1080 / 2

    // add text for win scene
    this.winSceneText = this.add.text (
      1920/2,
      -250,
      "You Win!",
      this.winSceneTextStyle
    ).setOrigin(0.5)

 // add the sprite for the menu and retry button
    this.menuButton = this.add.sprite(1920/2, (1080/2) - 50, "menuButton") 
    this.retryButton = this.add.sprite((1920/2)+20, (1080/2) + 120, "retryButton") 

    //make the menu button interactive, and when clicked, call the clickMenu() function
    this.menuButton.setInteractive({ useHandCursor : true})
    this.menuButton.on("pointerdown", () => this.clickMenu())

    //make the retry button interactive, and when clicked, call the clickRetry() function 
    this.retryButton.setInteractive({ useHandCursor : true})
    this.retryButton.on("pointerdown", () => this.clickRetry())

    // add animations for win scene text
    this.tweens.add({
    targets: this.winSceneText, 
     y: (1080/2)-350,
    ease: 'Linear',       
    duration: 2000,
    repeat: 0,       
    yoyo: false,
    rotation: 12.5, 
    duration: 2000 
      })
  }

  update (time, delta) {
  }
   
  clickMenu() {

    // start the menu scene
    this.scene.start("menuScene")

    //pause the music
    this.winSceneMusic.pause()
  }

  clickRetry() {

    // start the game scene
    this.scene.start("gameScene")

    // pause the music
    this.winSceneMusic.pause()
  }
}

// export the win scene
export default WinScene