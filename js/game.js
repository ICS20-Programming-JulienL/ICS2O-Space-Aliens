/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 30 2023
// This file contains the JS functions to display components of the game, ICS2O-Space-Aliens

// import scenes
import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'
import MenuScene from './menuScene.js'

// declare variable for game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()
const menuScene = new MenuScene()

//* Setup for game scene*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
  // set the color of the background
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // center background scene
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

// define game
const game = new Phaser.Game(config)

// display scenes
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)
game.scene.add('menuScene', menuScene)

// title for the start
game.scene.start('splashScene')
