class Paper {
    constructor(x,y,radius){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:0.4
    }
    this.x = x;
    this.y = y;
    this.radius = radius/2;
    this.image = loadImage("./paper.png");
    this.body = Bodies.circle(x,y,this.radius,options);
    World.add(world,this.body);


    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("red");
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    //ellipseMode(RADIUS);
    //ellipse(0,0,this.radius,this.radius)
    pop();
    }

}