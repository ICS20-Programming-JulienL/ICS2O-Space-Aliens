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
  }

  // initialize the background color
  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  // console log the title scene
  preload () {
    console.log('Menu Scene')
  }

  create (data) {
    // pass
  }

  update (time, delta) {
    // pass
  }
}

// export the title scene
export default MenuScene