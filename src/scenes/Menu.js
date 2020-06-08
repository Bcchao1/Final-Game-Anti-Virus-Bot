// Game: An explosive AntiVirus bot fights solo to deal with an army of malicious software. 
// Individual Project
// All visual Graphics made by myself in Aesprite and Tiled , Audio files copyright free downloaded

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
}

preload() {

        this.load.image('MenuBG', './assets/MenuBG1.png');
        this.load.image('v1', './assets/virus1.png');
        this.load.audio('walk', './assets/robowalk.wav');
        this.load.audio('roboengine', './assets/engine.mp3');
        this.load.audio('boom', './assets/explode.wav');
        
}

create() {


        this.background1 = this.add.image(0, 0, 'MenuBG').setOrigin(0, 0);
                //this.cameras.main.setBounds(0, 0, 1000, 1000);
            // this.cameras.main.setZoom(1);

        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        

        let menuConfig = {
            fontFamily: 'Consolas',
            fontSize: '20px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
                },
            fixedWidth: 0
 }


        //show menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;


        this.add.text(centerX,centerY + textSpacer + 60,'WASD to Propel, SPACE to activate EnergyBlast', menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY + textSpacer + 90,'Destroy all Viruses with EnergyBlast, then find the Exit', menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY + textSpacer + 130, 'Press "Enter" to start', menuConfig).setOrigin(0.5);

        menuConfig.fontSize = 70;
        this.add.text(centerX,centerY- textSpacer, 'Anti-Virus Bot', menuConfig).setOrigin(0.5);

        menuConfig.backgroundColor = '#000000';
        menuConfig.color = '#000';
}

update() {
        if (Phaser.Input.Keyboard.JustDown(keyENTER)) {
        this.scene.start("LevelOneScene");    
}
}
}