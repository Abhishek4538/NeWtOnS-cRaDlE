class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY}

        }
      this.rope=Constraint.create(options)
      World.add(world,this.rope)
    }
    display(){
        var pos = this.rope.bodyA.position
        var raddishparatha = this.rope.bodyB.position
        strokeWeight(3)
        var point = pos.x
        var nanu = pos.y
        var mama = raddishparatha.x+this.offsetX
        var mami = raddishparatha.y+this.offsetY
        line(point,nanu,mama,mami)


    }
}