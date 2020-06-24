class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.projectery = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x > 200 && this.body.speed>5){
      var position = [this.body.position.x,this.body.position.y];
      this.projectery.push(position);
    }

    for(var i = 0; i<this.projectery.length; i=i+1){
      image(this.smokeImg, this.projectery[i][0],this.projectery[i][1]);
    }
  }
}
