class Stand{

    constructor(x,y,width,height){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(x,y,width,height,ground_options)
          this.width = width;
          this.height = height;
          World.add(world,this.ground);
    }
    display(){
        var angle = this.ground.angle;
        var pos= this.ground.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }
}
