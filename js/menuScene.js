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
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene, and load the star button and menu background images
  preload () {
    console.log('Menu Scene')
    this.load.image('menuSceneBackground', './assets/stormtrooper_menu_scene.png')
    this.load.image('startButton', './assets/start.png')
  }

  create (data) {

    // add the sprite for the menu background
    this.menuSceneBackground = this.add.sprite (
      0,
      0, 
      'menuSceneBackground'
    ).setScale(3.75)
    
    // center the image
    this.menuSceneBackground.x = 1920 / 2
    this.menuSceneBackground.y = 1080 / 2

    // add the sprite for the start button
    this.startButton = this.add.sprite(1920/2, (1080/2) + 100, "startButton") 

    //make the start button interactive, and when clicked, call the clickButton() function
    this.startButton.setInteractive({ useHandCusor : true})
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  update (time, delta) {
    // pass
  }

  clickButton() {
    this.scene.start("gameScene")
  }
}

// export the title scene
export default MenuScene