class Backdrop{
    constructor(){
  // Creating Top row of background
  
  var tr1= createSprite(38,38, 50,10);
  tr1.addImage(bgt2);
  tr1.scale=0.3;

  var tr2= createSprite(114,38, 50,10);
  tr2.addImage(bgt1);
  tr2.scale=0.3;
 
  var tr3= createSprite(190,38, 50,10);
  tr3.addImage(bgt2);
  tr3.scale=0.3;
  
  var tr4= createSprite(266,38, 50,10);
  tr4.addImage(bgt1);
  tr4.scale=0.3;

  var tr5= createSprite(342,38, 50,10);
  tr5.addImage(bgt2);
  tr5.scale=0.3;
  
  var tr6= createSprite(418,38, 50,10);
  tr6.addImage(bgt1);
  tr6.scale=0.3;

  var tr7= createSprite(494,38, 50,10);
  tr7.addImage(bgt2);
  tr7.scale=0.3;
  
  var tr8= createSprite(570,38, 50,10);
  tr8.addImage(bgt1);
  tr8.scale=0.3;

  var tr9= createSprite(646,38, 50,10);
  tr9.addImage(bgt2);
  tr9.scale=0.3;
  
  var tr10= createSprite(722,38, 50,10);
  tr10.addImage(bgt1);
  tr10.scale=0.3;

  var tr11= createSprite(798,38, 50,10);
  tr11.addImage(bgt2);
  tr11.scale=0.3;
  
  var tr12= createSprite(874,38, 50,10);
  tr12.addImage(bgt1);
  tr12.scale=0.3;

  var tr13= createSprite(950,38, 50,10);
  tr13.addImage(bgt2);
  tr13.scale=0.3;

  var tr14= createSprite(1026,38, 50,10);
  tr14.addImage(bgt1);
  tr14.scale=0.3;

  var tr15= createSprite(1102,38, 50,10);
  tr15.addImage(bgt2);
  tr15.scale=0.3;
  
  var tr16= createSprite(1178,38, 50,10);
  tr16.addImage(bgt1);
  tr16.scale=0.3;

  var tr17= createSprite(1254,38, 50,10);
  tr17.addImage(bgt2);
  tr17.scale=0.3;
  
  var tr18= createSprite(1330,38, 50,10);
  tr18.addImage(bgt1);
  tr18.scale=0.3;

  // Arranging second Row
  
for(var i=38; i<1255; i=i+152){
  var trr=createSprite(i,114, 50,50);
  trr.addImage(bgt4);
  trr.scale=0.3;
 }
 for(var i=114; i<1331; i=i+152){
   var trr=createSprite(i,114, 50,10);
   trr.addImage(bgt5);
   trr.scale=0.3;
 }

  // Creating top third row of tiles
  
  for(var i=38; i<1255; i=i+152){
    var trr=createSprite(i,190, 50,50);
    trr.addImage(bgt5);
    trr.scale=0.3;
   }
   for(var i=114; i<1331; i=i+152){
     var trr=createSprite(i,190, 50,10);
     trr.addImage(bgt4);
     trr.scale=0.3;
   }
  
  // Creating fourth Row of tiles
  for(var i=38; i<1255; i=i+152){
    var trr=createSprite(i,266, 50,50);
    trr.addImage(bgt4);
    trr.scale=0.3;
   }
   for(var i=114; i<1331; i=i+152){
     var trr=createSprite(i,266, 50,10);
     trr.addImage(bgt5);
     trr.scale=0.3;
   }

  // Creating fifth Row of tiles
  for(var i=38; i<1255; i=i+152){
    var trr=createSprite(i,342, 50,50);
    trr.addImage(bgt5);
    trr.scale=0.3;
   }
   for(var i=114; i<1331; i=i+152){
     var trr=createSprite(i,342, 50,10);
     trr.addImage(bgt4);
     trr.scale=0.3;
   }
// Creating sixth Row of tiles
for(var i=38; i<1255; i=i+152){
  var trr=createSprite(i,418, 50,50);
  trr.addImage(bgt4);
  trr.scale=0.3;
 }
 for(var i=114; i<1331; i=i+152){
   var trr=createSprite(i,418, 50,10);
   trr.addImage(bgt5);
   trr.scale=0.3;
 }
// Creating sixth Row of tiles
for(var i=38; i<1255; i=i+152){
  var trr=createSprite(i,494, 50,50);
  trr.addImage(bgt5);
  trr.scale=0.3;
 }
 for(var i=114; i<1331; i=i+152){
   var trr=createSprite(i,494, 50,10);
   trr.addImage(bgt4);
   trr.scale=0.3;
 }

 // Creating last row of background
 var lr=createSprite(50,580, 50,50);
 lr.addImage(bgt7);
 lr.scale=0.38;
 
 var lr=createSprite(148,580, 50,50);
 lr.addImage(bgt7);
 lr.scale=0.38;

 var lr=createSprite(246,580, 50,50);
 lr.addImage(bgt7);
 lr.scale=0.38;

 var lr=createSprite(432,580, 50,50);
 lr.addImage(acidfull);
 lr.scale=0.38;

 var lr=createSprite(344,580, 50,50);
 lr.addImage(bgt8);
 lr.scale=0.38;

 var lr=createSprite(530,580, 50,50);
 lr.addImage(acidfull);
 lr.scale=0.38;

 
 var lr=createSprite(618,580, 50,50);
 lr.addImage(bgt6);
 lr.scale=0.38;

 for(var i=716; i<1305; i=i+98){
  var lr=createSprite(i,580, 50,50);
  lr.addImage(bgt7);
  lr.scale=0.38;
 }
 

    }
}