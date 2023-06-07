/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the game scene, ICS2O-Space-Aliens

// extend the game scene into the phaser library
class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'gameScene' })

    // assign the background and ship  to null
    this.background = null
    this.ship = null

    // assign fireMissile to false
    this.fireMissile = false
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene
  preload () {
    console.log('Game Scene')

    // images for game scene
    this.load.image("gameSceneBackground", "./assets/gameSceneBackground.jpg")
    this.load.image("ship", "/assets/stormtrooper1.png")
    this.load.image("missile", "./assets/laser_beam1.png")
  }

  create (data) {

    // sprite for background
    this.gameSceneBackground = this.add.sprite (
      0,
      0, 
      'gameSceneBackground'
    ).setScale(3.75)
    
    // center the image
    this.gameSceneBackground.setOrigin(0, 0)

    // sprite for ship
    this.ship = this.physics.add.sprite(1920/2, 1080-100, "ship")

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()
  }

  update (time, delta) {
    // called 60 times a second

    // assign the right arrow key, left arrow key, and space bar to a respective variable.
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")

    // if the left arrow key if pressed, move the ship 15 units to the left.
    if (keyLeftObj.isDown === true) {
      this.ship.x = this.ship.x -=15

      // if the ship is at x point less than 0, then set it back to x point 0
      if (this.ship.x < 0) {
        this.ship.x = 0
      }
    }

    // if the right arrow key is pressed 
    if (keyRightObj.isDown === true) {
      this.ship.x = this.ship.x +=15

      // if the ship is at an x point greater than 1920, then set it back to x point 1920  
      if (this.ship.x > 1920) {
        this.ship.x = 1920
      }
    }

    // if the space bar is pressed and if fireMissile is assigned to false...
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {

        // set fireMissile to true
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile").setScale(0.25)

        // add the new missile to the missile group
        this.missileGroup.add(aNewMissile)
      }
    }

    // if the space bar  has been released assign fireMissile to false
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }
  }
}

// export the title scene
export default GameScene