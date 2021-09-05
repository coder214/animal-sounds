const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var cw, ch;
var bg, bgm;

var cow, cow_s;
var hen, hen_s;
var cat, cat_s;
var elephant, elephant_s;
var lion, lion_s;
var pig, pig_s;
var tiger, tiger_s;

function preload() {
  bg = loadImage('assets/background.png');
  
  bgm = loadSound('sound1.mp3');
  cow_s = loadSound('cow_s.mp3');
  hen_s = loadSound('hen_s.mp3');
  cat_s = loadSound('cat_s.mp3');
  elephant_s =  loadSound('elephant_s.mp3');
  lion_s = loadSound('lion_s.mp3');
  pig_s = loadSound('pig_s.mp3');
  tiger_s = loadSound('Tiger.mp3');
}

function setup() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile === true){
    cw = displayWidth;
    ch = displayHeight;
    createCanvas(cw, ch);
  }else{
    cw = windowWidth;
    ch = windowHeight;
    createCanvas(cw, ch);
  }

  engine = Engine.create();
  world = engine.world;

  cow = createImg('assets/cow.png');
  cow.size(100, 100);
  cow.position(cw/5-100, ch/2-100);
  cow.mouseClicked(cows);

  hen = createImg('assets/hen.png');
  hen.size(100, 100);
  hen.position(cw/3, ch/2-100);
  hen.mouseClicked(hens);

  cat = createImg('assets/cat.png');
  cat.size(100, 100);
  cat.position(cw/2+100, ch/2-100);
  cat.mouseClicked(cats);

  elephant = createImg('assets/elephant.png');
  elephant.size(100, 100);
  elephant.position(cw/2+400, ch/2-100);
  elephant.mouseClicked(elephants);

  lion = createImg('assets/lion.png');
  lion.size(100, 100);
  lion.position(cw/4-45, ch/2+100);
  lion.mouseClicked(lions);

  pig = createImg('assets/pig.png');
  pig.size(100, 100);
  pig.position(cw/3+150, ch/2+100);
  pig.mouseClicked(pigs);

  tiger = createImg('assets/tiger.png');
  tiger.size(100, 100);
  tiger.position(cw/2+250, ch/2+100);
  tiger.mouseClicked(tigers);
}


function draw() {
  background(bg);

  textSize(100);
  fill('brown');
  stroke('white');
  strokeWeight(5);
  text('ANIMAL SOUNDS', cw/2-430, ch/2-200);

  Engine.update(engine);
  drawSprites();
}

function cows(){
  cow_s.play();
  hen_s.stop();
  cat_s.stop();
  elephant_s.stop();
  lion_s.stop();
  pig_s.stop();
  tiger_s.stop();
}

function hens(){
  hen_s.play();
  cow_s.stop();
  cat_s.stop();
  elephant_s.stop();
  lion_s.stop();
  pig_s.stop();
  tiger_s.stop();
}

function cats(){
  cat_s.play();
  hen_s.stop();
  cow_s.stop();
  elephant_s.stop();
  lion_s.stop();
  pig_s.stop();
  tiger_s.stop();
}

function elephants(){
  elephant_s.play();
  hen_s.stop();
  cat_s.stop();
  cow_s.stop();
  lion_s.stop();
  pig_s.stop();
  tiger_s.stop();
}

function lions(){
  lion_s.play();
  hen_s.stop();
  cat_s.stop();
  elephant_s.stop();
  cow_s.stop();
  pig_s.stop();
  tiger_s.stop();
}

function pigs(){
  pig_s.play();
  hen_s.stop();
  cat_s.stop();
  elephant_s.stop();
  lion_s.stop();
  cow_s.stop();
  tiger_s.stop();
}

function tigers(){
  tiger_s.play();
  hen_s.stop();
  cat_s.stop();
  elephant_s.stop();
  lion_s.stop();
  pig_s.stop();
  cow_s.stop();
}