class Hexagon {
    constructor(x, y, width, height){
      var options = {
        'restitution':0,
        'friction':1.4,
        'isStatic':false,
        'density':1.2
    }
      this.image = loadImage("hexagon.png");
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 50;
      this.body = Bodies.rectangle(this.x,this.y,50,50,options);
      World.add(world,this.body);

    }

  display(){
   var pos =this.body.position;
   var angle = this.body.angle;
  
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}