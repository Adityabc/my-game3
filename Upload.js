//Declaring variables for objects in background
var redbarrel, greenbarrel, box, saw;
var doorlock, doorunlock, dooropen, correctswitch, wrongswitch;

// Declaring Tiles variables
var acidhalf, acidfull, fenceright, fenceleft, fencecenter, spikes;
var bgt1,bgt2,bgt3,bgt4,bgt5,bgt6,bgt7,bgt8;
var t1,t2,t3,t4,t5,t6,t7,t8,t9,t10,t11,t12,t13,t14,t15;
var brotherattackimg, brotherdeadimg, brotheridleimg, brotherrunimg, brotherjumpimg, brotherjumpattackimg;
var villianjumpimg, villianjumpmeleeimg, villianmeleeimg, villianjumpshootimg, villiandeadimg,villianrunshootimg,villianshootimg, villianidleimg, villianrunimg, villianslideimg;


class Upload{
    constructor(){
 // Loading objects images
 redbarrel =loadImage("images/objects/Barrel1.png");
 greenbarrel =loadImage("images/objects/Barrel2.png");
 box =loadImage("images/objects/Box.png");
 saw= loadImage("images/objects/Saw.png");
 doorlock =loadImage("images/objects/DoorLocked.png");
 doorunlock =loadImage("images/objects/Doorunlocked.png");
 dooropen =loadImage("images/objects/DoorOpen.png");
 correctswitch =loadImage("images/objects/Switch (1).png");
 wrongswitch =loadImage("images/objects/Switch (2).png");

 //Load Background objects
 bgt1 =loadImage("images/tiles/BGTile1.png");
 bgt2 =loadImage("images/tiles/BGTile2.png");
 bgt3 =loadImage("images/tiles/BGTile3.png");
 
 bgt4 =loadImage("images/tiles/BGTileL.png");
 bgt5 =loadImage("images/tiles/BGTileR.png");

 acidhalf =loadImage("images/tiles/Acid1.png");
 acidfull=loadImage("images/tiles/Acid2.png");

 bgt6=loadImage("images/tiles/LTL.png");
 bgt7=loadImage("images/tiles/LTM.png");
 bgt8=loadImage("images/tiles/LTR.png");

  t1 =loadImage("images/tiles/HTBC.png");
  t2 =loadImage("images/tiles/HTBL.png");
  t3 =loadImage("images/tiles/HTBR.png");
  t4 =loadImage("images/tiles/HTBS.png");
  t5 =loadImage("images/tiles/HTC.png");

  t6 =loadImage("images/tiles/HTL.png");
  t7=loadImage("images/tiles/HTR.png");

  t8 =loadImage("images/tiles/BTC.png");
  t9 =loadImage("images/tiles/BTcrL.png");
  t10=loadImage("images/tiles/BTcrR.png");
  t11 =loadImage("images/tiles/BTL.png");
  t12 =loadImage("images/tiles/BTR.png");

  fenceleft= loadImage("images/tiles/Fence1.png");
  fenceright= loadImage("images/tiles/Fence3.png");
  fencecenter= loadImage("images/tiles/Fence2.png");
  spikes = loadImage("images/tiles/Spike.png");

  //adding the brother animation
  brotheridleimg=loadAnimation("images/brother/Idle (1).png", "images/brother/Idle (2).png", "images/brother/Idle (2).png",
  "images/brother/Idle (4).png", "images/brother/Idle (5).png", "images/brother/Idle (6).png", "images/brother/Idle (7).png",
  "images/brother/Idle (8).png", "images/brother/Idle (9).png", "images/brother/Idle (10).png");
  
  brotherrunimg=loadAnimation("images/brother/Run (1).png", "images/brother/Run (2).png", "images/brother/Run (3).png",
  "images/brother/Run (4).png", "images/brother/Run (5).png", "images/brother/Run (6).png",
  "images/brother/Run (7).png", "images/brother/Run (8).png", "images/brother/Run (9).png", 
  "images/brother/Run (10).png",);

  brotherattackimg =loadAnimation("images/brother/Attack (1).png", "images/brother/Attack (2).png", "images/brother/Attack (3).png", 
  "images/brother/Attack (4).png", "images/brother/Attack (5).png", "images/brother/Attack (6).png", 
  "images/brother/Attack (7).png","images/brother/Attack (8).png", "images/brother/Attack (9).png",
  "images/brother/Attack (10).png")
  
  brotherdeadimg = loadAnimation("images/brother/Dead (1).png", "images/brother/Dead (2).png", "images/brother/Dead (3).png",
  "images/brother/Dead (4).png", "images/brother/Dead (5).png", "images/brother/Dead (6).png", "images/brother/Dead (7).png",
  "images/brother/Dead (8).png", "images/brother/Dead (9).png", "images/brother/Dead (10).png");

  brotherjumpimg = loadAnimation("images/brother/Jump (1).png", "images/brother/Jump (2).png", "images/brother/Jump (3).png",
  "images/brother/Jump (4).png", "images/brother/Jump (5).png", "images/brother/Jump (6).png", "images/brother/Jump (7).png",
  "images/brother/Jump (8).png", "images/brother/Jump (9).png", "images/brother/Jump (10).png");

  brotherjumpattackimg = loadAnimation("images/brother/JumpAttack (1).png", "images/brother/JumpAttack (2).png", "images/brother/JumpAttack (3).png",
  "images/brother/JumpAttack (4).png", "images/brother/JumpAttack (5).png", "images/brother/JumpAttack (6).png", "images/brother/JumpAttack (7).png",
  "images/brother/JumpAttack (8).png", "images/brother/JumpAttack (9).png", "images/brother/JumpAttack (10).png");

  //adding the villian animation
  villianidleimg=loadAnimation("images/villian/Idle (1).png",  "images/villian/Idle (2).png","images/villian/Idle (3).png",
  "images/villian/Idle (4).png", "images/villian/Idle (5).png", "images/villian/Idle (6).png", "images/villian/Idle (7).png",
  "images/villian/Idle (8).png", "images/villian/Idle (9).png", "images/villian/Idle (10).png");
  
  villianrunimg=loadAnimation("images/villian/Run (1).png", "images/villian/Run (2).png", "images/villian/Run (3).png",
  "images/villian/Run (4).png", "images/villian/Run (5).png", "images/villian/Run (6).png",
  "images/villian/Run (7).png", "images/villian/Run (8).png");

  villianrunshootimg=loadAnimation("images/villian/RunShoot (1).png", "images/villian/RunShoot (2).png", "images/villian/RunShoot (3).png",
  "images/villian/RunShoot (4).png", "images/villian/RunShoot (5).png", "images/villian/RunShoot (6).png",
  "images/villian/RunShoot (7).png", "images/villian/RunShoot (8).png", "images/villian/RunShoot (9).png");

  villianshootimg=loadAnimation("images/villian/Shoot (1).png", "images/villian/Shoot (2).png", "images/villian/Shoot (3).png",
  "images/villian/Shoot (4).png"); 


  villianjumpimg =loadAnimation("images/villian/Jump (1).png", "images/villian/Jump (2).png", "images/villian/Jump (3).png", 
  "images/villian/Jump (4).png", "images/villian/Jump (5).png", "images/villian/Jump (6).png", 
  "images/villian/Jump (7).png","images/villian/Jump (8).png", "images/villian/Jump (9).png",
  "images/villian/Jump (10).png");

  villianjumpmeleeimg =loadAnimation("images/villian/JumpMelee (1).png", "images/villian/JumpMelee (2).png", "images/villian/JumpMelee (3).png", 
  "images/villian/JumpMelee (4).png", "images/villian/JumpMelee (5).png", "images/villian/JumpMelee (6).png", 
  "images/villian/JumpMelee (7).png","images/villian/JumpMelee (8).png");

  villianmeleeimg =loadAnimation("images/villian/Melee (1).png", "images/villian/Melee (2).png", "images/villian/Melee (3).png", 
  "images/villian/Melee (4).png", "images/villian/Melee (5).png", "images/villian/Melee (6).png", 
  "images/villian/Melee (7).png","images/villian/Melee (8).png");

  villianjumpshootimg =loadAnimation("images/villian/JumpShoot (1).png", "images/villian/JumpShoot (2).png", "images/villian/JumpShoot (3).png", 
  "images/villian/JumpShoot (4).png", "images/villian/JumpShoot (5).png");

  villiandeadimg = loadAnimation("images/villian/Dead (1).png", "images/villian/Dead (2).png", "images/villian/Dead (3).png",
  "images/villian/Dead (4).png", "images/villian/Dead (5).png", "images/villian/Dead (6).png", "images/villian/Dead (7).png",
  "images/villian/Dead (8).png", "images/villian/Dead (9).png", "images/villian/Dead (10).png");

  villianslideimg =loadAnimation("images/villian/Slide (1).png", "images/villian/Slide (2).png", "images/villian/Slide (3).png", 
  "images/villian/Slide (4).png", "images/villian/Slide (5).png", "images/villian/Slide (6).png", 
  "images/villian/Slide (7).png","images/villian/Slide (8).png", "images/villian/Slide (9).png",
  "images/villian/Slide (10).png");


    }
}