class Slingshot{
    constructor(BodyA,PointB){
        var options = {
            bodyA:BodyA,
            pointB:PointB,
            stiffness:0.04,
            length:0.5
        }
        this.pointB = this.pointB
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }
    
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            stroke("Blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            
           
        }
    }
