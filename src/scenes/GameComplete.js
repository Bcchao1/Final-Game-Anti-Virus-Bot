class GameComplete extends Phaser.Scene {
    constructor() {
        super("GameCompleteScene");
}


create() {


        this.background1 = this.add.image(0, 0, 'MenuBG').setOrigin(0, 0);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    
        let menuConfig = {
            fontFamily: 'Consolas',
            fontSize: '73px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
                },
            fixedWidth: 0
 }

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;


        this.add.text(centerX,centerY + textSpacer -33  , 'Viruses Defeated', menuConfig).setOrigin(0.5);
        menuConfig.fontSize ='90px';
        this.add.text(centerX,centerY + textSpacer + 90, 'Victory', menuConfig).setOrigin(0.5);


        menuConfig.backgroundColor = '#000000';
        menuConfig.color = '#000';


}
    

update() {

    if (Phaser.Input.Keyboard.JustDown(keyR)) {
        this.scene.start("menuScene");     
      } 
}
}