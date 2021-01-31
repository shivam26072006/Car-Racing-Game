var back, playerCount, database, gameState=0;
var form, player, game, allPlayers;

function setup(){

    createCanvas(600,600);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

}

function draw(){

}