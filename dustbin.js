class Dustbin {
    constructor(x,y){
   
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallthickness = 20;
        this.angle = 0;

        this.leftBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallthickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightBody,-1*this.angle);

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallthickness,{isStatic:true});
        
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);
        World.add(world,this.bottomBody);
    }   
    display(){
        var posL = this.leftBody.position;
        var posR = this.rightBody.position;
        var posB = this.bottomBody.position;
        push();
        translate(posL.x,posL.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("purple");
        stroke("purple");
        rotate(this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        push();
        translate(posR.x,posR.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("purple");
        stroke("purple");
        rotate(-1*this.angle);
        rect(0,0,this.wallthickness,this.dustbinHeight);
        pop();

        push();
        translate(posB.x,posB.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill("purple");
        stroke("purple");
        rect(0,0,this.dustbinWidth,this.wallthickness);
        pop();
    }

}