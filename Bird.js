class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trailImg = loadImage("sprites/smoke.png")
    this.trail=[]
  }

  display() {
    super.display();
    if(this.body.position.x>200&&this.body.speed>20&&gameState==="Launchified"){
     var position = [this.body.position.x,this.body.position.y]
     this.trail.push(position)
    }
    for (var i=0;i<this.trail.length;i++){
      image(this.trailImg,this.trail[i][0],this.trail[i][1])
    }
  }
}
