function Game(playerOneTurn, playerTwoTurn, scores, playerOne, playerTwo) {
  this.playerOneTurn = playerOneTurn;
  this.playerTwoTurn = playerTwoTurn;
  this.scores = scores;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

Game.prototype.versus(){
  var newGame = new Game(true, false, [0,0,0], "human", "human");
}

Game.prototype.comp(){
  var newGame = new Game(true, false, [0,0,0], "human", "comp");
}



function changePlayer(playerOneTurn) {
  if (playerOneTurn) {
    playerOneTurn = false;
    playerTwoTurn = true;
  }
  else if (playerTwoTurn) {
    playerOneTurn = true;
    playerTwoTurn = false;
  }
}

  var selection = $(".characters").last().click(function() {
//IF PLAYING AGAINST COMPUTER
    if(this.playerOneTurn === true && newGame.playerTwo === "comp") {
    if (selection === $("#square1").val()){
      this.playerOneChar = "Arnold";
      toStage();
    }
    else if (selection === $("#square2").val()){
      this.playerOneChar = "Batman";
      toStage();
    }
    else if (selection === $("#square3").val()){
      this.playerOneChar = "Hillary";
      toStage();
    }
    else if (selection === $("#square4").val()){
      this.playerOneChar = "Oprah";
      toStage();
    }
    else if (selection === $("#square5").val()){
      this.playerOneChar = "Predator";
      toStage();
    }
    else if (selection === $("#square6").val()){
      this.playerOneChar = "Joker";
      toStage();
    }
    else if (selection === $("#square7").val()){
      this.playerOneChar = "Trump";
      toStage();
    }
    else if (selection === $("#square8").val()){
      this.playerOneChar = "Ellen";
      toStage();
    }
    toStage();
  }
//IF PLAYING AGAINST PLAYER
  else if(this.playerOneTurn === true && newGame.playerTwo === "human") {
    if (selection === $("#square1").val()){
      this.playerOneChar = "Arnold";
      changePlayer();
    }
    else if (selection === $("#square2").val()){
      this.playerOneChar = "Batman";
      changePlayer();
    }
    else if (selection === $("#square3").val()){
      this.playerOneChar = "Hillary";
      changePlayer();
    }
    else if (selection === $("#square4").val()){
      this.playerOneChar = "Oprah";
      changePlayer();
    }
    else if (selection === $("#square5").val()){
      this.playerOneChar = "Predator";
      changePlayer();
    }
    else if (selection === $("#square6").val()){
      this.playerOneChar = "Joker";
      changePlayer();
    }
    else if (selection === $("#square7").val()){
      this.playerOneChar = "Trump";
      changePlayer();
    }
    else if (selection === $("#square8").val()){
      this.playerOneChar = "Ellen";
      changePlayer();
    }
    changePlayer();

  }
  })

function toStart() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").show();
}

function toChars() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page1").hide();
  $(".page2").show();
}

function toStage() {
  $(".page4").hide();
  $(".page3").show();
  $(".page2").hide();
  $(".page1").hide();
}

//frontend logic

$(document).ready(function () {

    $("#versus").click(function () {
    $("#computer").click(function () {
    $(".back-to-start").click(function () {
      toStart();
    $(".back-to-chars").click(function () {
      toChars();
    $(".reset").click(function () {

    $(".rock").click(function () {
    $(".paper").click(function () {
    $(".scissors").click(function () {

    }
