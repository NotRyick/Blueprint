class ground {

    constructor (x,y,width,height){
    var fixed ={
        isStatic: true
    }
     this.body = Bodies.rectangle(x,y,width,height,fixed);
     this.width = width;
     this.height = height;
     World.add(world,this.body)
}

display(){


    rectMode(CENTER);
    fill("yellow");
    rect(this.body.position.x,this.body.position.y,this.width,this.height)


}

}