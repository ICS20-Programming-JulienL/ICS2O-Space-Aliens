/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Created on: May 30 2023
// This file contains the JS functions for index.html, ICS2O-Space-Aliens

//* Setup for game scene*/
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics : {
    default : 'arcade',
    arcade: {
      debug: true
    }
  },
  // set the color of the background
  backgroundColor: 0x5f8e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // center background scene
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)
