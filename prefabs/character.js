// Main Character Prefab
class Character extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
     
      scene.add.existing(this);
      let projectileDirection

      this.walking = scene.sound.add('walk'); 
      this.zoom = scene.sound.add('roboengine'); 
    }

update(){

    //move mechanic
    /*

    if(keyA.isDown && keyW.isDown && this.x > 0 && this.y >0){
        this.x -=1;
        this.y -=1;
    }else if (keyD.isDown && keyW.isDown && this.x <985 && this.y >0) {
        this.x +=1;
        this.y -=1;
    }else if (keyA.isDown && keyS.isDown && this.x >0 && this.y <985) {
        this.x -=1;
        this.y +=1;
    }else if (keyD.isDown && keyS.isDown && this.x <985 && this.y <985) {
        this.x +=1;
        this.y +=1;
    }else if (keyA.isDown && this.x >0) {
        this.x -=2;
        //this.walking.play();
    }else if (keyD.isDown && this.x <985) {
        this.x +=2;
    }else if (keyW.isDown && this.y >0) {
        this.y -=2;
    }else if (keyS.isDown && this.y <985) {
        this.y +=2;
       // projectileDirection.position.x -=2;
    }
*/
    if(keyA.isDown & !this.walking.isPlaying || keyW.isDown & !this.walking.isPlaying || keyD.isDown & !this.walking.isPlaying || keyS.isDown & !this.walking.isPlaying ){
        this.walking.play();
    }
    if(keyA.isDown & !this.zoom.isPlaying || keyW.isDown & !this.zoom.isPlaying || keyD.isDown & !this.zoom.isPlaying || keyS.isDown & !this.zoom.isPlaying ){
        this.zoom.play();
    }



}

reset() {


}

  }