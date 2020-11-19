class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
    this.visiblity=255;
  }
  display(){
    if(this.body.speed<5){
      super.display();
    }else{
      World.remove(world,this.body)
      push();
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        this.visiblity-=10;
        pop();
    }
  }
}