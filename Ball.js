class Ball{
    constructor(x,y,radius){
    var options = {'frictionAir': 0.0,            
                    'density':10   
                                  }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius 
   
    World.add(world,this.body)       
    }    
    display(){
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS)
    rotate(angle)
    fill ("blue")
    ellipseMode(CENTER)
    ellipse(0,0,this.radius*2)    
    pop()    
    }
    }