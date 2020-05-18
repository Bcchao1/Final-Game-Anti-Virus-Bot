class LevelTwo extends Phaser.Scene {
    //var e;
    constructor() {
        super("LevelTwoScene");

    }


 preload() {

        this.load.image('Lv2BG', './assets/Templv2.png');
        this.load.image('character', './assets/Char.png');
        this.load.spritesheet('projectile', './assets/projectile.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('projectile2', './assets/projectile2.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
        this.load.spritesheet('projectile3', './assets/projectile3.png', {frameWidth: 32, frameHeight: 64, startFrame: 0, endFrame: 9});
        this.load.spritesheet('projectile4', './assets/projectile4.png', {frameWidth: 32, frameHeight: 64, startFrame: 0, endFrame: 9});
        this.load.spritesheet('EnergyBlast', './assets/EnergyBlast.png', {frameWidth: 30, frameHeight: 30, startFrame: 0, endFrame: 9});

        this.load.audio('walk', './assets/robowalk.wav');
        this.load.audio('roboengine', './assets/engine.mp3');
        this.load.audio('boom', './assets/explode.wav');
        }
      
create() {

              
        this.Lv2BG = this.add.image(0, 0, 'Lv2BG').setOrigin(0, 0);

        this.p1Char = new Character(this, 200, 200, 'character').setScale(0.5, 0.5).setOrigin(0, 0);

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

      
            
        this.cameras.main.setBounds(0, 0, 1000, 1000);
        this.cameras.main.setZoom(2);
        // have camera follow copter
        // startFollow(target [, roundPixels] [, lerpX] [, lerpY] [, offsetX] [, offsetY])
        this.cameras.main.startFollow(this.p1Char, true, 0.1, 0.1);
      

        this.anims.create({
          key: 'launchL',
          frames: this.anims.generateFrameNumbers('projectile', { start: 0, end: 9, first: 0}),
          frameRate: 30
      });

        this.anims.create({
          key: 'launchR',
          frames: this.anims.generateFrameNumbers('projectile2', { start: 0, end: 9, first: 0}),
          frameRate: 30
        });

        this.anims.create({
          key: 'launchU',
          frames: this.anims.generateFrameNumbers('projectile3', { start: 0, end: 9, first: 0}),
          frameRate: 30
          });


        this.anims.create({
          key: 'launchD',
          frames: this.anims.generateFrameNumbers('projectile4', { start: 0, end: 9, first: 0}),
          frameRate: 30
          });

          this.anims.create({
          key: 'EB',
          frames: this.anims.generateFrameNumbers('EnergyBlast', { start: 0, end: 9, first: 0}),
          frameRate: 30
         });

}

update() {

        this.p1Char.update();

        var boom= this.sound.add('boom');
              
        // shoot mechanic
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
    
          this.shoot(this.p1Char);
          boom.play();

          }

        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          this.scene.start("FinalLevelScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyR)) {
          this.scene.start("menuScene");    
        }
    }

    shoot(pew) {

      
        // create energy burst sprite at char's position
        let boom = this.add.sprite(pew.x-64, pew.y - 8, 'projectile').setOrigin(0, 0);
        
        boom.anims.play('launchL');             
        boom.on('animationcomplete', () => {    
            pew.reset();                       
            boom.destroy();                     
        });      

      
        let boom2 = this.add.sprite(pew.x +15, pew.y - 8, 'projectile2').setOrigin(0, 0);
        
        boom2.anims.play('launchR');             
        boom2.on('animationcomplete', () => {    
            pew.reset();                       
            boom2.destroy();                     
        });     
        
        let boom3 = this.add.sprite(pew.x -10 , pew.y +15, 'projectile3').setOrigin(0, 0);
        
        boom3.anims.play('launchU');             
        boom3.on('animationcomplete', () => {    
            pew.reset();                       
            boom3.destroy();                     
        });      

        let boom4 = this.add.sprite(pew.x -9, pew.y - 65, 'projectile4').setOrigin(0, 0);
        
        boom4.anims.play('launchD');             
        boom4.on('animationcomplete', () => {    
            pew.reset();                       
            boom4.destroy();                     
        });      

        let eBlast = this.add.sprite(pew.x, pew.y, 'EnergyBlast').setOrigin(0, 0).setScale(0.5, 0.5);
        
        eBlast.anims.play('EB');             
        eBlast.on('animationcomplete', () => {    
            pew.reset();                       
            eBlast.destroy();                     
        });      

}

}