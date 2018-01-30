function Game(playerOneTurn, playerTwoTurn, scores, playerOne, playerTwo) {
  this.playerOneTurn = playerOneTurn;
  this.playerTwoTurn = playerTwoTurn;
  this.scores = scores;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

Game.prototype.versus(){
  var newGame = new Game(true, false, [0,0], "human", "human");
}

Game.prototype.comp(){
  var newGame = new Game(true, false, [0,0], "human", "comp");
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

    if(this.playerOneTurn === true) {
    if (selection === $("#square1").val()){
      this.playerOneChar = "Arnold";
    }
    else if (selection === $("#square2").val()){
      this.playerOneChar = "Batman";
    }
    else if (selection === $("#square3").val()){
      this.playerOneChar = "Hillary";
    }
    else if (selection === $("#square4").val()){
      this.playerOneChar = "Oprah";
    }
    else if (selection === $("#square5").val()){
      this.playerOneChar = "Predator";
    }
    else if (selection === $("#square6").val()){
      this.playerOneChar = "Joker";
    }
    else if (selection === $("#square7").val()){
      this.playerOneChar = "Trump";
    }
    else if (selection === $("#square8").val()){
      this.playerOneChar = "Ellen";
    }

  }
  else if(this.playerOneTurn === false) {
    if (selection === $("#square1").val()){
      this.playerTwoChar = "Arnold";
    }
    else if (selection === $("#square2").val()){
      this.playerTwoChar = "Batman";
    }
    else if (selection === $("#square3").val()){
      this.playerTwoChar = "Hillary";
    }
    else if (selection === $("#square4").val()){
      this.playerTwoChar = "Oprah";
    }
    else if (selection === $("#square5").val()){
      this.playerTwoChar = "Predator";
    }
    else if (selection === $("#square6").val()){
      this.playerTwoChar = "Joker";
    }
    else if (selection === $("#square7").val()){
      this.playerTwoChar = "Trump";
    }
    else if (selection === $("#square8").val()){
      this.playerTwoChar = "Ellen";
    }
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
