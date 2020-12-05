
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var constrainedLog
var chain
var catapult1,catapult2
var gameState="on sling";
var score=0;

// Data types in Javascript
    //String
    var string = "This is a string"
    console.log(string)

    //Number
    var num = 12
    console.log(num)

    //Boolean
    var bool = true
    console.log(bool)

    //undefined
    var object;
    console.log(object)

    //null
    object = null
    console.log(object)

    // Array
    var arr1 = [1,2,3,4,5]
    console.log(arr1)

    var arr2 = [12, "Hello", true,object]
    console.log(arr2)

    var arr3 = [[1,2],[2,3],[3,4],arr1]
    console.log(arr3)

    console.log(arr3[0])
    console.log(arr3[0][1] + " " + arr3[3][0])
    console.log(arr3.length)

    arr3.push([6,7])
    console.log(arr3)

    arr3.pop();
    console.log(arr3)


function preload() {
    catapult1 = loadImage("sprites/sling1.png");
    catapult2 = loadImage("sprites/sling2.png");
    getBackgroundIMG()
}

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    constrainedLog = new Log(300,200,100,0)
    
    bird = new Bird(188,86);
    chain=new Slingshot(bird.body,{x:182,y:72});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }else{
        background(200)
    } 
    fill(255)
    text("score:"+score,617,13)  
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig3.display();
    log3.display();
    fill(0)
    box5.display();
    log4.display();
    log5.display();
    image(catapult1,179,45)
    fill(20)
    text(mouseX+","+mouseY,mouseX,mouseY)
    bird.display();
    chain.display();
    image(catapult2,150,40)
    platform.display();
    pig1.scoire();
    pig3.scoire();
    text("press space to reset the bird",5,10)
    text("press r to restart the game",5,20)
}

function mouseDragged (){
    if(gameState==="on sling"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}
function mouseReleased () {
    chain.fly();
    gameState="Launchified"
}
function keyPressed(){
    if(keyCode===32&&gameState==="Launchified"){
        Matter.Body.setPosition(bird.body,{x:182,y:72})
        Matter.Body.setAngularVelocity(bird.body,0)
        chain.attach(bird.body);
        Matter.Body.setAngle(bird.body,0)
        gameState="on sling"
        bird.trail=[]
    }
    if(keyCode===82&&score===200){
        window.location.reload();
    }
}

//synchronously
async function getBackgroundIMG(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    var responseJSON = await response.json();
    //console.log(responseJSON)

    var DatetoTime= responseJSON.datetime
    //console.log(DatetoTime)

    var hour = DatetoTime.slice(11,13)
    console.log(hour)
    if(hour>=06 && hour<12){
       bg =  "sprites/bg.png"
    }else{
        bg = "sprites/bg2.jpg"
    }
    backgroundImg = loadImage(bg);
}