export default {
  type: Phaser.AUTO,

  width: 800,
  height: 600,
  render: {
      // pixelArt: true,
  },
  scale: {
    //CHANGE TO YOUR NAME!!
      parent: 'pep',
      autoCenter: true,
  },

  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 0 },
          debug: false
      },
  },
  dom: {
      createContainer: true,
  },
  scene: [],
  audio: {
      disableWebAudio: true,
      noAudio: false
  },
}
