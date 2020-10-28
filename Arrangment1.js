var rbarrel, gbarrel;
var doorUn, doorL, doorO;
var rswitch, gswitch;
var p1, p2, p3, p4, p5,p6,p7;
var b1,b2,b3,b4,b5;
var spike, saw1;
var halfacid;
var f1, f2, f3;

class Arrangments{
    constructor(){
     // At left top
        p1=createSprite(38,190,50,50);
        p1.addImage(t8);
        p1.scale=0.3;

        p1=createSprite(114,190,50,50);
        p1.addImage(t8);
        p1.scale=0.3;

        p1=createSprite(190,190,50,50);
        p1.addImage(t8);
        p1.scale=0.3;

        p1=createSprite(266,190,50,50);
        p1.addImage(t11);
        p1.scale=0.3;

        b1=createSprite(114,125,50,50);
        b1.addImage(box);
        b1.scale=0.2;

        b1=createSprite(166,125,50,50);
        b1.addImage(box);
        b1.scale=0.2;

        b2=createSprite(140,76,50,50);
        b2.addImage(box);
        b2.scale=0.2;

     // Left Bottom
        
        p2=createSprite(50,494,50,50);
        p2.addImage(t8);
        p2.scale=0.38;
        
        p2=createSprite(148,494,50,50);
        p2.addImage(t8);
        p2.scale=0.38;

        p2=createSprite(246,494,50,50);
        p2.addImage(t8);
        p2.scale=0.38;
        
        halfacid=createSprite(436,494,50,50);
        halfacid.addImage(acidhalf);
        halfacid.scale=0.38;
        halfacid.depth=128;

        halfacid=createSprite(532,494,50,50);
        halfacid.addImage(acidhalf);
        halfacid.scale=0.38;
        halfacid.depth=128;

        p2=createSprite(344,494,50,50);
        p2.addImage(t11);
        p2.scale=0.38;

        doorUn= createSprite(80,375,20,50);
        doorUn.addImage(doorlock);
        doorUn.scale=0.3;

        rswitch= createSprite(180,393,5,20);
        rswitch.addImage(wrongswitch);
        rswitch.scale=0.4;

        f2=createSprite(50,390,50,10);
        f2.addImage(fencecenter);
        f2.scale=0.4;

        f2=createSprite(150,390,50,10);
        f2.addImage(fencecenter);
        f2.scale=0.4;

        f2=createSprite(250,390,50,10);
        f2.addImage(fenceright);
        f2.scale=0.4;
     
     // Bottom centre
        p3=createSprite(620,494,50,50);
        p3.addImage(t12);
        p3.scale=0.38;

        p3=createSprite(718,494,50,50);
        p3.addImage(t8);
        p3.scale=0.38;

        p3=createSprite(816,494,50,50);
        p3.addImage(t8);
        p3.scale=0.38;

        p3=createSprite(914,494,50,50);
        p3.addImage(t10);
        p3.scale=0.38;
      //  console.log(p3.depth);
        saw1=createSprite(770,450,50,50);
        saw1.addImage(saw);
        saw1.scale=0.26;
        saw1.depth=150;
        
        // Movement of saw

        saw1.rotation=180;
        saw1.rotateToDirection=true;

     // Bottom right   
        p3=createSprite(1012,494,50,50);
        p3.addImage(bgt8);
        p3.scale=0.38;

        spike= createSprite(1100,494,50,10);
        spike.addImage(spikes);
        spike.scale=0.3;
        
        spike= createSprite(1170,494,50,10);
        spike.addImage(spikes);
        spike.scale=0.3;

        spike= createSprite(1230,494,50,10);
        spike.addImage(spikes);
        spike.scale=0.3;

        // Creating centre

        p4=createSprite(915,396,50,50);
        p4.addImage(t12);
        p4.scale=0.38;

        p4=createSprite(1012,396,50,50);
        p4.addImage(t11);
        p4.scale=0.38;

        doorO= createSprite(1010,280,30,60);
        doorO.addImage(dooropen);
        doorO.scale=0.3;

        gswitch= createSprite(930,308,30,60);
        gswitch.addImage(correctswitch);
        gswitch.scale=0.3;

        p5=createSprite(415,342,50,50);
        p5.addImage(t3);
        p5.scale=0.3;

        p5=createSprite(490,342,50,50);
        p5.addImage(t1);
        p5.scale=0.3;

        p5=createSprite(565,342,50,50);
        p5.addImage(t2);
        p5.scale=0.3;

        rbarrel=createSprite(420,268,10,60);
        rbarrel.addImage(redbarrel);
        rbarrel.scale=0.3;

        p6=createSprite(710,300,50,50);
        p6.addImage(t4);
        p6.scale=0.3;

        p6=createSprite(560,230,50,50);
        p6.addImage(t4);
        p6.scale=0.3;

        p6=createSprite(810,210,50,50);
        p6.addImage(t4);
        p6.scale=0.3;

        // Creating Right corner

        p6=createSprite(1310,190,50,50);
        p6.addImage(t8);
        p6.scale=0.3;

        p6=createSprite(1235,190,50,50);
        p6.addImage(t8);
        p6.scale=0.3;

        p6=createSprite(1160,190,50,50);
        p6.addImage(t12);
        p6.scale=0.3;

        gbarrel=createSprite(1280,116,10,60);
        gbarrel.addImage(greenbarrel);
        gbarrel.scale=0.3;

        f1= createSprite(1310,114,40,10);
        f1.addImage(fencecenter);
        f1.scale=0.3;
        
        f1= createSprite(1235,114,40,10);
        f1.addImage(fenceleft);
        f1.scale=0.3;
        
    }
}