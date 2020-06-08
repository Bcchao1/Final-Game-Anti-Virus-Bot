class FinalLevel extends Phaser.Scene {
  constructor() {
      super("FinalLevelScene");

      this.ACCELERATION = 500;
      this.MAX_X_VEL = 200;   
      this.MAX_Y_VEL = 200;
      this.DRAG = 600;    

      this.vr1 = 19;


     
  }


preload() {

     
      this.load.image('character', './assets/Char.png');
      this.load.spritesheet('projectile', './assets/projectile.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
      this.load.spritesheet('projectile2', './assets/projectile2.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});
      this.load.spritesheet('projectile3', './assets/projectile3.png', {frameWidth: 32, frameHeight: 64, startFrame: 0, endFrame: 9});
      this.load.spritesheet('projectile4', './assets/projectile4.png', {frameWidth: 32, frameHeight: 64, startFrame: 0, endFrame: 9});
      this.load.spritesheet('EnergyBlast', './assets/EnergyBlast.png', {frameWidth: 30, frameHeight: 30, startFrame: 0, endFrame: 9});



     this.load.tilemapTiledJSON("map3", "./assets/tilemap3.json");  
     this.load.image("tiles1", './assets/Tilesetp.png');
   


        }

 
    
create() {


      const map = this.add.tilemap("map3");

      const tileset = map.addTilesetImage("tileset1", "tiles1");

      const backgroundLayer = map.createStaticLayer("Background", tileset, 0, 0);
      const boundariesLayer = map.createStaticLayer("Boundaries", tileset, 0, 0);
      const sceneryLayer = map.createStaticLayer("Scenery", tileset, 0, 0);
      const exitLayer = map.createStaticLayer("Exit", tileset, 0, 0);

      boundariesLayer.setCollision([14]);


      this.p1Char = this.physics.add.image(50,50, 'character').setScale(0.5, 0.5).setOrigin(0, 0);

      this.charSfx = new Character(this, -500, -500, 'null').setScale(0.5, 0.5).setOrigin(0, 0);


      this.p1Char.body.setSize(this.p1Char.width/2);
      this.p1Char.body.setMaxVelocity(this.MAX_X_VEL, this.MAX_Y_VEL);
      this.p1Char.body.setCollideWorldBounds(false);
      
      console.log(this.physics);
      this.physics.add.collider(this.p1Char, boundariesLayer);
      


      keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
      keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

     
          
      this.cameras.main.setBounds(0, 0, 1000, 1000);
      this.cameras.main.setZoom(2);
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

        //viruses
        this.vs1 = this.add.image(216, 377, 'v1').setOrigin(0, 0);
        this.vs2 = this.add.image(87, 482, 'v1').setOrigin(0, 0);
        this.vs3 = this.add.image(83, 561, 'v1').setOrigin(0, 0);
        this.vs4 = this.add.image(90, 759, 'v1').setOrigin(0, 0);
        this.vs5 = this.add.image(87, 857, 'v1').setOrigin(0, 0);
        this.vs6 = this.add.image(407, 830, 'v1').setOrigin(0, 0);
        this.vs7 = this.add.image(503, 830, 'v1').setOrigin(0, 0);
        this.vs8 = this.add.image(617, 147, 'v1').setOrigin(0, 0);
        this.vs9 = this.add.image(486, 144, 'v1').setOrigin(0, 0);
        this.vs10 = this.add.image(481, 60, 'v1').setOrigin(0, 0);
        this.vs11 = this.add.image(622, 61, 'v1').setOrigin(0, 0);
        this.vs12 = this.add.image(867, 86, 'v1').setOrigin(0, 0);
        this.vs13 = this.add.image(808, 475, 'v1').setOrigin(0, 0);
        this.vs14 = this.add.image(816, 660, 'v1').setOrigin(0, 0);
        this.vs15 = this.add.image(813, 861, 'v1').setOrigin(0, 0);
        this.vs16 = this.add.image(91, 664, 'v1').setOrigin(0, 0);
        this.vs17 = this.add.image(560, 468, 'v1').setOrigin(0, 0);
        this.vs18 = this.add.image(475, 230, 'v1').setOrigin(0, 0);
        this.vs19 = this.add.image(575, 231, 'v1').setOrigin(0, 0);
 
        
  }

update() {

        //   this.p1Char.update();

            //move character
            
        if(keyA.isDown && keyW.isDown && this.p1Char.x > 0 && this.p1Char.y >0){
          this.p1Char.body.setAccelerationX(-this.ACCELERATION);
          this.p1Char.body.setAccelerationY(-this.ACCELERATION);
      }else if (keyD.isDown && keyW.isDown && this.p1Char.x <985 && this.p1Char.y >0) {
          this.p1Char.body.setAccelerationX(this.ACCELERATION);
          this.p1Char.body.setAccelerationY(-this.ACCELERATION);
      }else if (keyA.isDown && keyS.isDown && this.p1Char.x >0 && this.p1Char.y <985) {
          this.p1Char.body.setAccelerationX(-this.ACCELERATION);
          this.p1Char.body.setAccelerationY(this.ACCELERATION);
      }else if (keyD.isDown && keyS.isDown && this.p1Char.x <985 && this.p1Char.y <985) {
          this.p1Char.body.setAccelerationX(this.ACCELERATION);
          this.p1Char.body.setAccelerationY(this.ACCELERATION);
      }else if (keyA.isDown && this.p1Char.x >0) {
        this.p1Char.body.setAccelerationX(-this.ACCELERATION);
      }else if (keyD.isDown && this.p1Char.x <985) {
        this.p1Char.body.setAccelerationX(this.ACCELERATION);
      }else if (keyW.isDown && this.p1Char.y >0) {
        this.p1Char.body.setAccelerationY(-this.ACCELERATION);
      }else if (keyS.isDown && this.p1Char.y <985) {
        this.p1Char.body.setAccelerationY(this.ACCELERATION);
      }else {
        this.p1Char.body.setAccelerationX(0);
        this.p1Char.body.setAccelerationY(0);

      }

      this.charSfx.update();
     
      
      //1
 
     
      if ( this.p1Char.x + 10 > this.vs1.x && this.p1Char.x - 10 < this.vs1.x && this.p1Char.y + 10 > this.vs1.y && this.p1Char.y - 10 < this.vs1.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs1.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs2.x && this.p1Char.x - 10 < this.vs2.x && this.p1Char.y + 10 > this.vs2.y && this.p1Char.y - 10 < this.vs2.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs2.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs3.x && this.p1Char.x - 10 < this.vs3.x && this.p1Char.y + 10 > this.vs3.y && this.p1Char.y - 10 < this.vs3.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs3.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs4.x && this.p1Char.x - 10 < this.vs4.x && this.p1Char.y + 10 > this.vs4.y && this.p1Char.y - 10 < this.vs4.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs4.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      //5
      if ( this.p1Char.x + 10 > this.vs5.x && this.p1Char.x - 10 < this.vs5.x && this.p1Char.y + 10 > this.vs5.y && this.p1Char.y - 10 < this.vs5.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs5.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs6.x && this.p1Char.x - 10 < this.vs6.x && this.p1Char.y + 10 > this.vs6.y && this.p1Char.y - 10 < this.vs6.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs6.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs7.x && this.p1Char.x - 10 < this.vs7.x && this.p1Char.y + 10 > this.vs7.y && this.p1Char.y - 10 < this.vs7.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs7.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs8.x && this.p1Char.x - 10 < this.vs8.x && this.p1Char.y + 10 > this.vs8.y && this.p1Char.y - 10 < this.vs8.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
        this.vs8.destroy();
        console.log(this.p1Char.x, this.p1Char.y);
        this.shoot(this.p1Char);
        this.sound.play('boom');
        this.vr1 -= 1;
      }
      if ( this.p1Char.x + 10 > this.vs9.x && this.p1Char.x - 10 < this.vs9.x && this.p1Char.y + 10 > this.vs9.y && this.p1Char.y - 10 < this.vs9.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs9.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        //10
      if ( this.p1Char.x + 10 > this.vs10.x && this.p1Char.x - 10 < this.vs10.x && this.p1Char.y + 10 > this.vs10.y && this.p1Char.y - 10 < this.vs10.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs10.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        if ( this.p1Char.x + 10 > this.vs11.x && this.p1Char.x - 10 < this.vs11.x && this.p1Char.y + 10 > this.vs11.y && this.p1Char.y - 10 < this.vs11.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs11.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        if ( this.p1Char.x + 10 > this.vs12.x && this.p1Char.x - 10 < this.vs12.x && this.p1Char.y + 10 > this.vs12.y && this.p1Char.y - 10 < this.vs12.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs12.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        if ( this.p1Char.x + 10 > this.vs13.x && this.p1Char.x - 10 < this.vs13.x && this.p1Char.y + 10 > this.vs13.y && this.p1Char.y - 10 < this.vs13.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs13.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
       }
        if ( this.p1Char.x + 10 > this.vs14.x && this.p1Char.x - 10 < this.vs14.x && this.p1Char.y + 10 > this.vs14.y && this.p1Char.y - 10 < this.vs14.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs14.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
       }
        //15
        if ( this.p1Char.x + 10 > this.vs15.x && this.p1Char.x - 10 < this.vs15.x && this.p1Char.y + 10 > this.vs15.y && this.p1Char.y - 10 < this.vs15.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs15.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
       }
        if ( this.p1Char.x + 10 > this.vs16.x && this.p1Char.x - 10 < this.vs16.x && this.p1Char.y + 10 > this.vs16.y && this.p1Char.y - 10 < this.vs16.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs16.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        if ( this.p1Char.x + 10 > this.vs17.x && this.p1Char.x - 10 < this.vs17.x && this.p1Char.y + 10 > this.vs17.y && this.p1Char.y - 10 < this.vs17.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs17.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        if ( this.p1Char.x + 10 > this.vs18.x && this.p1Char.x - 10 < this.vs18.x && this.p1Char.y + 10 > this.vs18.y && this.p1Char.y - 10 < this.vs18.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
          this.vs18.destroy();
          console.log(this.p1Char.x, this.p1Char.y);
          this.shoot(this.p1Char);
          this.sound.play('boom');
          this.vr1 -= 1;
      }
        //19
        if ( this.p1Char.x + 10 > this.vs19.x && this.p1Char.x - 10 < this.vs19.x && this.p1Char.y + 10 > this.vs19.y && this.p1Char.y - 10 < this.vs19.y && Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.vs19.destroy();
            console.log(this.p1Char.x, this.p1Char.y);
            this.shoot(this.p1Char);
            this.sound.play('boom');
            this.vr1 -= 1;
      }
      //graders next scene button ENTER
      if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
          game.settings = {
          }
          this.scene.start("GameCompleteScene");    
      }
      //reset to menu
      if (Phaser.Input.Keyboard.JustDown(keyR)) {
      
        this.scene.start("menuScene");     
      }
      
      if (this.vr1==0 && this.p1Char.x > 545 && this.p1Char.x < 565 && this.p1Char.y > 950 && this.p1Char.y < 980){
        this.scene.start("GameCompleteScene");  
      }
      
      }
  
shoot(pew) {

    
      // create energy burst sprite at char's position
      let boom = this.add.sprite(pew.x-64, pew.y - 8, 'projectile').setOrigin(0, 0);
      
      boom.anims.play('launchL');             
      boom.on('animationcomplete', () => {    
          //pew.reset();                       
          boom.destroy();                     
      });      

    
      let boom2 = this.add.sprite(pew.x +15, pew.y - 8, 'projectile2').setOrigin(0, 0);
      
      boom2.anims.play('launchR');             
      boom2.on('animationcomplete', () => {    
          //pew.reset();                       
          boom2.destroy();                     
      });     
      
      let boom3 = this.add.sprite(pew.x -10 , pew.y +15, 'projectile3').setOrigin(0, 0);
      
      boom3.anims.play('launchU');             
      boom3.on('animationcomplete', () => {    
          //pew.reset();                       
          boom3.destroy();                     
      });      

      let boom4 = this.add.sprite(pew.x -9, pew.y - 65, 'projectile4').setOrigin(0, 0);
      
      boom4.anims.play('launchD');             
      boom4.on('animationcomplete', () => {    
          //pew.reset();                       
          boom4.destroy();                     
      });      

      
      let eBlast = this.add.sprite(pew.x, pew.y, 'EnergyBlast').setOrigin(0, 0).setScale(0.5, 0.5);
      
      eBlast.anims.play('EB');             
      eBlast.on('animationcomplete', () => {    
          //pew.reset();                       
          eBlast.destroy();                     
      });    
      

        }



}