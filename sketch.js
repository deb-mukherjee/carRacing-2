var database;
var gameState;
gameState = 0;
var playerCount;
var distance = 0;
var allPlayers;
var game, form, player
function setup() {
  database = firebase.database();
  //console.log(database);
  createCanvas(500, 500);

  game = new Game();
  game.getState();
  game.start();



}

function draw() {
  if (playerCount === 2) {
    game.update(1);
}

if(gameState === 1){
  clear();
  game.play();
}

}

