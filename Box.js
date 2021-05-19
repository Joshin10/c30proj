class Box  {
    constructor(x, y, width, height){
  var options={
    restitution:0.2,
    friction:0.0
  }
  this.body=Bodies.rectangle(x,y,width,height,options)
  this.width=width
  this.height=height
  this.image=loadImage("block.png")
  World.add(world,this.body);
  this.visiblity=255

    }
    display(){
     
    
       var angle=this.body.angle
       var p=this.body.position
       if(this.body.speed<3){
      imageMode(CENTER)
        image (this.image,p.x,p.y,this.width,this.height)
       }
       else{
         World.remove(world,this.body)
         push()
         this.visiblity=this.visiblity-5
         tint (255,this.visiblity)
       image( this.image,p.x,p.y,this.width,this.height)
       pop()
       }
      
       
  }
}