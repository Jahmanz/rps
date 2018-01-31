function Game(playerOneTurn, playerTwoTurn, scores, playerOne, playerTwo) {
  this.playerOneTurn = playerOneTurn;
  this.playerTwoTurn = playerTwoTurn;
  this.scores = scores;
  this.playerOne = playerOne;
  this.playerTwo = playerTwo;
}

Game.prototype.changePlayer = function(){
  if (this.playerOneTurn === true) {
    this.playerOneTurn = false;
    this.playerTwoTurn = true;
  }
  else if (this.playerTwoTurn === true) {
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }
}

Game.prototype.charChoiceDisplay = function() {
  $("#charChoice").text("Player 1: " + this.playerOneChar);
}

function toStart() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").show();
}

function toChars() {
  $(".page4").hide();
  $(".page3").hide();
  $(".page2").show();
  $(".page1").hide();
}

function toStage() {
  $(".page4").hide();
  $(".page3").show();
  $(".page2").hide();
  $(".page1").hide();
}

function toFight() {
  $(".page4").show();
  $(".page3").hide();
  $(".page2").hide();
  $(".page1").hide();
}


Game.prototype.getWinner = function() {
  if (inputOne !== "" && inputTwo !== "") {
    if (inputOne === "rock" && inputTwo === "scissors") {
      this.scores[0] += 1;
    } else if (inputOne === "rock" && inputTwo === "paper")  {
      this.scores[2] += 1;
    } else if (inputOne === "rock" && inputTwo === "rock")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "paper" && inputTwo === "rock") {
      this.scores[0] += 1;
    } else if (inputOne === "paper" && inputTwo === "scissors")  {
      this.scores[2] += 1;
    } else if (inputOne === "paper" && inputTwo === "paper")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    } else if (inputOne === "scissors" && inputTwo === "paper") {
      this.scores[0] += 1;
    } else if (inputOne === "scissors" && inputTwo === "rock")  {
      this.scores[2] += 1;
    } else if (inputOne === "scissors" && inputTwo === "scissors")  {
      this.scores[1] += 1;
      $("#tieMessage").text("TIE! Roll again.");
    }
    $("#playerOneScore").text(this.scores[0]);
    $("#playerTwoScore").text(this.scores[2]);
    inputOne = "";
    inputTwo = "";


  }
}
var inputOne = "";
var inputTwo = "";

//frontend logic

$(document).ready(function () {
  var newGame = new Game(true, false, [0,0,0], "human", "comp");
  toStart();
//CHOOSE YOUR FIGHTER CLICK FUNCTION
  $(".fighters").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    console.log(selection);

  //IF PLAYING AGAINST COMPUTER
      if(newGame.playerTwo === "comp") {
      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        console.log(newGame.playerOneChar);
        $("#player1").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        console.log(newGame.playerOneChar);
        $("#player1").html('<img id="batmanImage" src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        console.log(newGame.playerOneChar);
        $("#player1").html('<img id="batmanImage" src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        $("#player1").html('<img id="batmanImage" src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        $("#player1").html('<img id="batmanImage" src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        $("#player1").html('<img id="batmanImage" src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        $("#player1").html('<img id="batmanImage" src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        $("#player1").html('<img id="batmanImage" src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
        $("#player2").html('<img id="terminatorImage" src="https://www.sideshowtoy.com/wp-content/uploads/2016/02/terminator-genisys-endoskeleton-sixth-scale-hot-toys-thumb-902662.jpg" />');
        toStage();
      }
    }
  //IF PLAYING AGAINST PLAYER
    else if(newGame.playerTwo === "human" && newGame.playerOneChar === undefined) {

      if (selection === "batman"){
        newGame.playerOneChar = "Batman";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
        console.log(newGame.playerTwoTurn);
      }
      else if (selection === "joker"){
        newGame.playerOneChar = "Joker";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
      }
      else if (selection === "trump"){
        newGame.playerOneChar = "Trump";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');
      }
      else if (selection === "hillary"){
        newGame.playerOneChar = "Hillary";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
      }
      else if (selection === "arnold"){
        newGame.playerOneChar = "Arnold";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
      }
      else if (selection === "predator"){
        newGame.playerOneChar = "Predator";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
      }
      else if (selection === "oprah"){
        newGame.playerOneChar = "Oprah";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
      }
      else if (selection === "ellen"){
        newGame.playerOneChar = "Ellen";
        newGame.changePlayer();
        newGame.charChoiceDisplay();
        $("#player1").html('<img id="batmanImage" src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
      }
    }
    else if(newGame.playerTwoTurn === true){
      if(selection === "batman") {
        newGame.playerTwoChar = "Batman";
        newGame.changePlayer();
        $("#player2").html('<img id="batmanImage" src="http://cdn3.darkhorizons.com/wp-content/uploads/2017/07/reeves-the-batman-will-begin-an-arc.jpg" />');
        toStage();
      }
      else if(selection === "joker") {
        newGame.playerTwoChar = "Joker";
        newGame.changePlayer();
        $("#player2").html('<img src="https://vignette.wikia.nocookie.net/batman/images/2/22/The_Joker_smile.jpg" />');
        toStage();
      }
      else if(selection === "trump") {
        newGame.playerTwoChar = "Trump";
        newGame.changePlayer();
        $("#player2").html('<img src="https://cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg" />');

        toStage();
      }
      else if(selection === "hillary") {
        newGame.playerTwoChar = "Hillary";
        newGame.changePlayer();
        $("#player2").html('<img src="http://c6.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/why-hell-hillary-clinton-comparing-herself-wonder-woman.jpg" />');
        toStage();
      }
      else if(selection === "arnold") {
        newGame.playerTwoChar = "Arnold";
        newGame.changePlayer();
        $("#player2").html('<img src="http://www.dreadcentral.com/wp-content/uploads/2015/07/pred.jpg" />');
        toStage();``
      }
      else if(selection === "predator") {
        newGame.playerTwoChar = "Predator";
        newGame.changePlayer();
        $("#player2").html('<img src="https://www.sideshowtoy.com/wp-content/uploads/2013/03/350x350-hottoys-Predator.jpg" />');
        toStage();
      }
      else if(selection === "oprah") {
        newGame.playerTwoChar = "oprah";
        newGame.changePlayer();
        $("#player2").html('<img src="https://ewedit.files.wordpress.com/2015/01/oprah_l-24.jpg" />');
        toStage();
      }
      else if(selection === "ellen") {
        newGame.playerTwoChar = "Ellen";
        newGame.changePlayer();
        $("#player2").html('<img src="http://media.breitbart.com/media/2017/05/EllenDeGeneresTrumpNotWelcome-640x480.jpg" />');
        toStage();
      }
    };
  });
//STAGE SELECTION CLICK FUNCTION
  $(".stages").click(function(event) {
    event.preventDefault();
    var selection = $(this)[0].id;
    if (selection === "epicodus"){
      $("body").removeClass();
      $("body").addClass("epicodus");
    }
    if (selection === "jungle"){
      $("body").removeClass();
      $("body").addClass("jungle");
    }
    if (selection === "oval"){
      $("body").removeClass();
      $("body").addClass("oval");
    }
    if (selection === "boxing"){
      $("body").removeClass();
      $("body").addClass("boxing");
    }
    if (selection === "oprahStage"){
      $("body").removeClass();
      $("body").addClass("oprahStage");
    }
    if (selection === "arkham"){
      $("body").removeClass();
      $("body").addClass("arkham");
    }
  });
  $("#pvp").click(function () {
    newGame.playerTwo = "human";
    console.log(newGame);
    toChars();
  });
  $("#cpu").click(function () {
    newGame.playerTwo = "comp";
    console.log(newGame);
    toChars();
  });
  $("#fight").click(function () {
    toFight();
  });
  $("#newgame").click(function () {
    location.reload();
  });

  $(document).keypress(function(e) {
    // console.log(e);
    // if (e.originalEvent.keyCode == 100) {
    //   alert("HTE D KEY!");
    // }
    if(e.originalEvent.keyCode == 113) {
      $("#p-one-rock").click();
    }
    else if(e.originalEvent.keyCode == 119) {
      $("#p-one-paper").click();
    }
    else if(e.originalEvent.keyCode == 101) {
      $("#p-one-scissors").click();
    }
    else if(e.originalEvent.keyCode == 105) {
      $("#p-two-rock").click();
    }
    else if(e.originalEvent.keyCode == 111) {
      $("#p-two-paper").click();
    }
    else if(e.originalEvent.keyCode == 112) {
      $("#p-two-scissors").click();
    }

  });

  $("#p-one-rock").click(function(event) {
    event.preventDefault();
    $("#tieMessage").text("");
    inputOne = "rock";
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    console.log(inputTwo);
    newGame.getWinner();

  });
  $("#p-one-paper").click(function(event) {
    event.preventDefault();
    inputOne = "paper";
    $("#tieMessage").text("");
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    console.log(inputTwo);
    newGame.getWinner();

  });
  $("#p-one-scissors").click(function(event) {
    event.preventDefault();
    inputOne = "scissors";
    $("#tieMessage").text("");
    if(newGame.playerTwo === "comp") {
      inputTwo = Math.floor(Math.random() * 3 + 1);
      if(inputTwo === 1) {
        inputTwo = "rock";
      }
      else if(inputTwo === 2){
        inputTwo = "paper";
      }
      else if(inputTwo === 3){
        inputTwo = "scissors";
      }
    }
    console.log(inputTwo);
    newGame.getWinner();

  });
  $("#p-two-rock").click(function(event) {
    event.preventDefault();
    inputTwo = "rock";
    console.log(inputTwo);
    newGame.getWinner();

    console.log(newGame.scores);
  });
  $("#p-two-paper").click(function(event) {
    event.preventDefault();
    inputTwo = "paper";
    console.log(inputTwo);
    newGame.getWinner();

  });
  $("#p-two-scissors").click(function(event) {
    event.preventDefault();
    inputTwo = "scissors";
    console.log(inputTwo);
    newGame.getWinner();

  });

  $("#replay").click(function () {
    newGame.scores = [0, 0, 0];
    $("#playerOneScore").text("");
    $("#playerTwoScore").text("");
    $("#tieMessage").text("");
  });

});


//   $(".rock").click(function () {
//   });
//   $(".paper").click(function () {
//   });
//   $(".scissors").click(function () {
//   });
// });
