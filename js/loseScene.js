/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: June 14 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the lose scene into the phaser library
class LoseScene extends Phaser.Scene {
  constructor () {
    super({ key: 'loseScene' })

    // set the title scene background and text to null
    this.loseSceneBackground= null
    this.loseSceneText1= null
    this.loseSceneText2= null

    // set the music and button to null
    this.loseSceneMusic = null
    this.menuButton = null


  // create styling for text
    this.loseSceneTextStyle = { font: "200px times", fill: "#ffffff", align: "center"}
    
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    // console log the title scene 
    console.log('Win Scene')

    // load the images
    this.load.image('loseSceneBackground', './assets/loseSceneBackground.jpg')
    this.load.image('menuButton', './assets/menuButton.png')  
    this.load.image('retryButton', './assets/retryButton.png')  

  //load the audio
    this.load.audio('lose_music', './assets/lose_music.mp3')

  }

  create (data) {

    // play the looped background music
    this.loseSceneMusic = this.sound.add('lose_music')
    this.loseSceneMusic.loop = true
    this.loseSceneMusic.play()
    
      //turn the background image into a sprite
    this.loseSceneBackground = this.add.sprite (
      0,
      0, 
      'loseSceneBackground'
    ).setScale(2.75)
    
    // center the image
    this.loseSceneBackground.x = 1920 / 2
    this.loseSceneBackground.y = 1080 / 2

    // add text that says "You"
    this.loseSceneText1 = this.add.text (
      -100,
      250,
      "You",
      this.loseSceneTextStyle
    ).setOrigin(0.5)

    // add text that says "Lose!"
    this.loseSceneText2 = this.add.text (
      2220,
      250,
      "Lose!",
      this.loseSceneTextStyle
    ).setOrigin(0.5)

 // add the sprite for the menu and retry buttons
    this.menuButton = this.add.sprite(1920/2, (1080/2) - 50, "menuButton") 
    this.retryButton = this.add.sprite((1920/2)+20, (1080/2) + 120, "retryButton") 

    //make the menu button interactive, and when clicked, call the clickMenu() function
    this.menuButton.setInteractive({ useHandCursor : true})
    this.menuButton.on("pointerdown", () => this.clickMenu())

    //make the retry button interactive, and when clicked, call the clickRetry() function
    this.retryButton.setInteractive({ useHandCursor : true})
    this.retryButton.on("pointerdown", () => this.clickRetry())

    // add animation for the text that says "You"
    this.tweens.add ({
        targets: this.loseSceneText1,
    x : (1920/2)-200,
    ease: 'Linear',       
    duration: 1000,
    repeat: 0,       
    yoyo: false,
    })

    // add animation for the text that says "Lose!"
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
  }

  clickMenu() {

    // start the menu scene
    this.scene.start("menuScene")

    // pause the music
    this.loseSceneMusic.pause()
  }

  clickRetry() {

    // start game scene
    this.scene.start("gameScene")

    // pause the music
    this.loseSceneMusic.pause()
  }
}

// export the lose scene
export default LoseScene