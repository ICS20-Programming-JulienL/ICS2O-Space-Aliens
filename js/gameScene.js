/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the game scene, ICS2O-Space-Aliens

// extend the game scene into the phaser library
class GameScene extends Phaser.Scene {
  
  // create an enemy in the function createEnemy()
  createEnemy () {

    // make the x location of the enemy a random number
    const enemyXLocation = Math.floor(Math.random()*1920)+1

    // make the x velocity of the enemy a random number
    let enemyXVelocity = Math.floor(Math.random()*50)+1
    enemyXVelocity *= Math.round(Math.random()) ? 1: -1
    
    //create sprite for the enemy and make it fall down the screen
    const anEnemy = this.physics.add.sprite(enemyXLocation, -100, "enemy").setScale(0.35)
    anEnemy.body.velocity.y = 200
    anEnemy.body.velocity.x = enemyXVelocity

    // connect to the enemy group
    this.enemyGroup.add(anEnemy)
  }
  
  constructor () {
    super({ key: 'gameScene' })

    // assign the background and ship  to null
    this.background = null
    this.ship = null
    
    // assign fireMissile to false
    this.fireMissile = false

    // assign gameSceneMusic to null
    this.gameSceneMusic = null
    
    // assign the score to 0 and the score text to null
    this.score = 0
    this.scoreText = null

    // assign the score text styling variable to the intended styling.
    this.scoreTextStyle = { font: "65px Arial", fill: "#ffffff", align: "center" } 
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the game scene
  preload () {
    console.log('Game Scene')

    // images for game scene
    this.load.image("gameSceneBackground", "./assets/gameSceneBackground.jpg")
    this.load.image("ship", "/assets/stormtrooper.png")
    this.load.image("missile", "./assets/laser_beam1.png")
    this.load.image("enemy", "./assets/tie_fighter_enemy.png")

    //load sound effects and music for game scene
    this.load.audio("laser", "./assets/laser.mp3")
    this.load.audio("death_sound", "./assets/death_sound.mp3")
    this.load.audio("explosion", "./assets/explosion.wav")
    this.load.audio("game_music", "./assets/game_music.mp3")

  }

  create (data) {

    // play the looped game scene music
    this.gameSceneMusic = this.sound.add('game_music')
    this.gameSceneMusic.loop = true
    this.gameSceneMusic.play()
  
    // sprite for background
    this.gameSceneBackground = this.add.sprite (
      0,
      0, 
      'gameSceneBackground'
    ).setScale(3.75)
    
    // center the image
    this.gameSceneBackground.setOrigin(0, 0)

    // add the score text
    this.scoreText = this.add.text(10, 10, "Score: " + this.score.toString(), this.scoreTextStyle)
    
    // sprite for ship
    this.ship = this.physics.add.sprite(1920/2, 1080-100, "ship").setScale(0.2)

    // create a group for the missiles
    this.missileGroup = this.physics.add.group()

    // create a group for the enemies
    this.enemyGroup = this.add.group()
    this.createEnemy()

    // collision for enemies and missile
    this.physics.add.collider(this.missileGroup, this.enemyGroup, function (missileCollide, enemyCollide){

      // destory the enemy and the missile
      enemyCollide.destroy()
      missileCollide.destroy()

      // play the explosion sound effect
      this.sound.play("explosion")

      // add 5 points to the score
      this.score = this.score+5
      this.scoreText.setText("Score: " + this.score.toString())

      // create two new enemies
      this.createEnemy()
    }.bind(this)) 

     this.physics.add.collider(this.ship, this.enemyGroup, function (shipCollide, enemyCollide){

      // destroy the ship and the enemy
      enemyCollide.destroy()
      shipCollide.destroy()

      // play the explosion and death sound effect
      this.sound.play("death_sound")

      // start the lose scene
      this.scene.start("loseScene")

      // set missile fire to false
      this.missileFire == false

      //pause game scene music 
      this.gameSceneMusic.pause()
       
      // set the score back to zero
      this.score = 0
    }.bind(this))
  }

  update (time, delta) {
    // called 60 times a second

    // create an enemy every few seconds
    if (time % 9 == 0) {
      this.createEnemy()
    }

    // assign the right arrow key, left arrow key, A key, D key, and space bar to a respective variable.
    const keyAObj = this.input.keyboard.addKey("A")
    const keyDObj = this.input.keyboard.addKey("D")    
    const keyLeftObj = this.input.keyboard.addKey("LEFT")
    const keyRightObj = this.input.keyboard.addKey("RIGHT")
    const keySpaceObj = this.input.keyboard.addKey("SPACE")
    
    // if the score is equal or greater than 50, then...
    if (this.score >= 50) {
      //pause game scene music 
      this.gameSceneMusic.pause()

      //switch the scene to win scene
      this.scene.start("winScene")

      // set the score to 0
      this.score = 0

      // set fire missile to false
      this.missileFire == false
    }

      // if the left arrow key is pressed, move the ship 15 units to the left.
    if ((keyLeftObj.isDown === true) || (keyAObj.isDown === true)) {
      this.ship.x = this.ship.x -=15

      // if the ship is at x point less than 0, then set it back to x point 0
      if (this.ship.x < 0) {
        this.ship.x = 1920
      }
    }
    
    // if the right arrow key is pressed 
    if ((keyRightObj.isDown === true) || (keyDObj.isDown === true)) {
      this.ship.x = this.ship.x +=15

      // if the ship is at an x point greater than 1920, then set it back to x point 1920  
      if (this.ship.x > 1920) {
        this.ship.x = 0
      }
    }

    // if the space bar is pressed and if fireMissile is assigned to false...
    if (keySpaceObj.isDown === true) {
      if (this.fireMissile === false) {

        // set fireMissile to true
        this.fireMissile = true
        const aNewMissile = this.physics.add.sprite(this.ship.x, this.ship.y, "missile").setScale(0.25)
        this.sound.play("laser")

        // add the new missile to the missile group
        this.missileGroup.add(aNewMissile)
      }
    }

    // if the space bar  has been released assign fireMissile to false
    if (keySpaceObj.isUp === true) {
      this.fireMissile = false
    }

    // allow the the missiles to move up the screen
    this.missileGroup.children.each (function (item) {
      item.y = item.y -15 
      if (item.y < 0) {
        item.destroy()
      }
    })
  }
}

// export the game scene
export default GameScene