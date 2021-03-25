var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var horzDistance = 0;
var database;
var playerRank = 0;

var form, player, game;

var cars, car1, car2, car3, car4;

var wall1, wall2, wall3, wall4

var sword
var swordDrawn = 0;

var enemies, enemy, enemy2, enemy3, enemy4, enemy5

var score = 0

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

 
}


function draw(){
  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    console.log(score)
  }

  if (gameState === 2){
    game.end();
    
  }

}

