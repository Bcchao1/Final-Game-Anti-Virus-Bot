// Game: An explosive AntiVirus bot fights solo to deal with an army of malicious software. 
// Individual Project
// All visual Graphics made by myself in Aesprite , Audio files copyright free downloaded

class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
}

preload() {
        this.load.image('MenuBG', './assets/MenuBG1.png');
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


        this.add.text(centerX,centerY + textSpacer + 60,'WASD to move, SPACE to activate EnergyBlast', menuConfig).setOrigin(0.5);
        this.add.text(centerX,centerY + 2*textSpacer +60, 'Press "Enter" to start', menuConfig).setOrigin(0.5);

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