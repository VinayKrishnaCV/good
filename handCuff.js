class Chain{
    constructor(b1,b2){
        var options={
            bodyA:b1,
            bodyB:b2,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        push()
        var p1 = this.chain.bodyA.position
        var p2 = this.chain.bodyB.position
        stroke(0,250,0);
        strokeWeight(5);
        line(p1.x,p1.y,p2.x,p2.y)
        pop()
    }
}