class Drops{
    constructor(x,y,r){
        var options ={
            restitution: 0.3,
            isStatic: false,
            friction: 0.1
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,this.r,options)
        World.add(world,this.body)
    }
    display(){
        var rainpos = this.body.position
        push()
        translate(rainpos.x,rainpos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}