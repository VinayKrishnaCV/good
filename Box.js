class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
    this.visiblity=255
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

};
