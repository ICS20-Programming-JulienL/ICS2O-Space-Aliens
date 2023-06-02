/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 30 2023
// This file contains the JS functions to display components of the game, ICS2O-Space-Aliens

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// declare variable for game scene
const splashScene = new SplashScene()
const titleScene = new TitleScene()

//* Setup for game scene*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics : {
    default : "arcade",
    arcade: {
      debug: true,
    },
  },
  // set the color of the background
  backgroundColor: 0xffffff,
  scale: {
    mode: Phaser.Scale.FIT,
    // center background scene
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

const game = new Phaser.Game(config)

// display scenes
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)


// title for the start
game.scene.start('splashScene')
game.scene.start('titleScene')
