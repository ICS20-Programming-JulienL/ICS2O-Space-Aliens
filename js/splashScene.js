/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the splash scenes, ICS2O-Space-Aliens

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'splashScene' })

    this.splashSceneBackgroundImage = null
  } 

  /**
  *Can be defined on your own Scenes
  * This method is called by the Scene manager when the scene starts
  * before preload() and create) 
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  init (data) {
    this.cameras.main.setBackgroundColor('#000000')
  }

  preload () {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }

  /**
  *Can be defined on your own Scenes
  * This method is called by the Scene manager when the scene starts
  * before preload() and create) 
  * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
  */
  create (data) {
    this.splashSceneBackgroundImage = this.add.sprite (
      0,
      0, 
      'splashSceneBackground'
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  /**
   *Can be defined on your own Scenes
   * This method is called by the Scene manager when the scene starts
   * before preload() and create) 
   * @param {number} time - The current time
   * @param {number} delta - The delta time in milliseconds since the last frame.
   */
  update (time, delta) {
    if (time > 3000) {
     this.scene.switch('titleScene') 
    }
  }
}

export default SplashScene