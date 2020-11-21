class Bin{
    constructor(x,y,width,height){
      var position={
      isStatic:true    
      }
      this.bin=Bodies.rectangle(x,y,width,height,position)
      this.bin1=Bodies.rectangle(x-150,y-5,20,200,position)
      this.bin2=Bodies.rectangle(x+150,y-5,20,200,position);
      this.image=loadImage("bin.png");
      World.add(world,this.bin)
      World.add(world,this.bin1)
      World.add(world,this.bin2)

      this.w=width
      this.h=height
    }
          display(){
        var pos=this.bin.position;
        var pos1=this.bin1.position;
        var pos2=this.bin2.position;
        fill("blue");
        rect(pos.x,pos.y,this.w,this.h);
        imageMode(CENTER);
        image(this.image,1750,350,300,150)
        //rect(pos1.x,pos1.y,20,200);
        //rect(pos2.x,pos2.y,20,200);
          }  
        }