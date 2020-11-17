class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            'restitution':1,
            'friction':0,
            'density':0.5

        }
        this.body=Bodies.rectangle(x,y,40,40,options)
        this.radius = 40
        
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        fill("pink")
        ellipse(0,0,40,40)
        pop();
    }
};