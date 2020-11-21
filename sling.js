class Slingshot{
    constructor(b1,point){
        var options={
            bodyA:b1,
            pointB:point,
            stiffness:0.4,
            length:10
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
        this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
        if(this.sling.bodyA){
            push()
            var p1 = this.sling.bodyA.position
            var p2 = this.sling.pointB
            imageMode(CENTER)
            if(p1.x<190){
                image(this.sling3,p1.x-20,p1.y,15,25)
                stroke(48, 22, 8);
                strokeWeight(5);
                line(p1.x-15,p1.y,p2.x-20,p2.y)
                line(p1.x+20,p1.y-3,p2.x+18,p2.y)
            }else{
                image(this.sling3,p1.x+30,p1.y+7,15,25)
                stroke(48, 22, 8);
                strokeWeight(5);
                line(p1.x+20,p1.y+10,p2.x-20,p2.y)
                line(p1.x+20,p1.y+10,p2.x+18,p2.y) 
            }
            pop()
        }
    }
    fly(){
        this.sling.bodyA=null;
    }
    attach(body){
        this.sling.bodyA=body
    }
}