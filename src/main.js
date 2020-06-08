let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    physics: {
      default: "arcade",
      arcade: {
          //debug: true,
      }
  },


    scene: [ Menu, LevelOne, LevelTwo, FinalLevel,GameComplete]
  }

let game = new Phaser.Game(config);
// define game settings
game.settings = {

}

let keyE,keyW,keyA,keyS,keyD,keyENTER,keySPACE,keyR;