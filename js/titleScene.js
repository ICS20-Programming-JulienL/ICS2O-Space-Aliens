/* global Phaser */

// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Mr. Coxall
// Edited by : Julien Lamoureux
// Created on: May 31 2023
// This file contains the JS functions for the title scenes, ICS2O-Space-Aliens

// extend the title scene into the phaser library
class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene
  preload () {
    console.log('Title Scene')
  }

  create (data) {
    // pass
  }

  update (time, delta) {
    // pass
  }
}

// export the title scene
export default TitleScene