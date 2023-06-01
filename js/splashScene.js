/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the splash scenes, ICS2O-Space-Aliens

class SplashScene extends Phaser.Scene {
  constructor() {
    super({ key: "splashScene" })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }

  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene