class Box{
    constructor(x,y,width,height){
    var options = {'friction': 1,
                    'restitution':0.5           
                       
                                  }
    this.body = Bodies.rectangle(x,y,width,height,options)
    this.width = width
    this.height = height
    World.add(world,this.body)       
    }    
    display(){
    var angle = this.body.angle
    push()
    translate(this.body.position.x,this.body.position.y)
    angleMode(RADIANS)
    rotate(angle)
    fill ("green")
    rectMode(CENTER)
    rect(0,0,this.width,this.height)    
    pop()    
    }
    }