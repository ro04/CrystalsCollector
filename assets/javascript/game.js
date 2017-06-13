function gameClass() {
    this.min = 19;              //> value is no lower than min
    this.max = 121;           //> value is less than (but not equal to) max
    this.crystal_min = 1;
    this.crystal_max = 13;

    // Function returns the random numbers generated
     this.getRandomNumber = function getRandomNumber(min, max){
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() *(max - min)) + min;
    };

       // Function to tenerate a random number for the red crystal.
     this.getRedCrystalRandomNumber = function getRedCrystalRandomNumber(crystal_min, crystal_max){
         crystal_min = Math.ceil(crystal_min);
         crystal_max = Math.floor(crystal_max);
         return Math.floor(Math.random() *(crystal_max - crystal_min)) + crystal_min;
    };

    // Function to generate a random number for the blue crystal.
     this.getBlueCrystalRandomNumber = function getBlueCrystalRandomNumber(crystal_min, crystal_max){
         crystal_min = Math.ceil(crystal_min);
         crystal_max = Math.floor(crystal_max);
         return Math.floor(Math.random() *(crystal_max - crystal_min)) + crystal_min;
    };

    // Function to generate a random number for the yellow crystal.
      this.getYellowCrystalRandomNumber = function getYellowCrystalRandomNumber(crystal_min, crystal_max){
          crystal_min = Math.ceil(crystal_min);
          crystal_max = Math.floor(crystal_max);
          return Math.floor(Math.random() *(crystal_max - crystal_min)) + crystal_min;
     };

     // Function to generate a random number for the green crystal.
     this.getGreenCrystalRandomNumber = function getGreenCrystalRandomNumber(crystal_min, crystal_max){
         crystal_min = Math.ceil(crystal_min);
         crystal_max = Math.floor(crystal_max);
         return Math.floor(Math.random() *(crystal_max - crystal_min)) + crystal_min;
    };
}

var game = new gameClass();   //>instance of my gameClass.

$(document).ready(function () {
     var red_num = 0;                   //> variable to hold red crystal random number.
     var blue_num  = 0;                 //> variable to hold blue crystal random number.
     var yellow_num = 0;              //> variable to hold yellow crystal random number.
     var green_num = 0;                //> variable to hold green crystal random number.
     var running_total = 0;            // variable to hold the cumlative player's score.
     var wins = 0;                          //> variable to hold the number of wins.
     var loses = 0;                          //> variable to hold the number of loses.


     // Show the  random number generated  in the HTML span id "value"
     function displayRandomNumber() {
          ran_num = game.getRandomNumber(game.min, game.max);
          $("#value").html(ran_num);
     }

     //get the randomNumber that was generated for the red crystal
     function setRedCrystalRandomNumber() {
          red_num = game.getRedCrystalRandomNumber(game.crystal_min, game.crystal_max);
          console.log(red_num);
     }

     //get the randomNumber that was generated for the blue crystal
     function setBlueCrystalRandomNumber() {
          blue_num = game.getBlueCrystalRandomNumber(game.crystal_min, game.crystal_max);
          console.log(blue_num);
     }

     //get the randomNumber that was generated for the yellow crystal
     function setYellowCrystalRandomNumber() {
          yellow_num = game.getYellowCrystalRandomNumber(game.crystal_min, game.crystal_max);
          console.log(yellow_num);
     }

     //get the randomNumber that was generated for the green crystal
     function setGreenCrystalRandomNumber() {
          green_num = game.getGreenCrystalRandomNumber(game.crystal_min, game.crystal_max);
          console.log(green_num);
     }

     displayRandomNumber();
     setRedCrystalRandomNumber();
     setBlueCrystalRandomNumber();
     setYellowCrystalRandomNumber();
     setGreenCrystalRandomNumber();

     // When the red crystal img is clicked, get the randomNumber that was generated add it to the
     // running total and display it in the span id = "total-score".
     $(".img-red").on("click", function(){
          running_total = red_num + running_total;
          console.log(running_total);
          $("#total-score").html(running_total);

          //if the running_total === ran_num  the player wins the game
          if(running_total === ran_num){
               isWins();
          }

          if(running_total > ran_num){
               isLoses();
          }

     });

     // When the blue crystal img is clicked, get the randomNumber that was generated add it to the
     // running total and display it in the span id = "total-score".
     $(".img-blue").on("click", function() {
          running_total = blue_num + running_total;
          console.log(running_total);
          $("#total-score").html(running_total);

          //if the running_total === ran_num  the player wins the game
          if(running_total === ran_num){
               isWins();
          }

          if(running_total > ran_num){
               isLoses();
          }
     });

     // When the yellow crystal img is clicked, get the randomNumber that was generated add it to the
     // running total and display it in the span id = "total-score".
     $(".img-yellow").on("click", function() {
          running_total = yellow_num + running_total;
          console.log(running_total);
          $("#total-score").html(running_total);

          //if the running_total === ran_num  the player wins the game
          if(running_total === ran_num){
               isWins();
          }

          if(running_total > ran_num){
               isLoses();
          }
     });

     // When the green crystal img is clicked, get the randomNumber that was generated add it to the
     // running total and display it in the span id = "total-score".
     $(".img-green").on("click", function() {
          running_total = green_num + running_total;
          console.log(running_total);
          $("#total-score").html(running_total);

          //if the running_total === ran_num  the player wins the game
          if(running_total === ran_num){
               isWins();
          }

          if(running_total > ran_num){
               isLoses();
          }
     });

     //display the number of wins in the span id="wins"
     // reset the random number
     // running total score is set back to zero
     //reset the random number of each crystal.
     //display you won in the div id="wins-loses-text"
     function isWins() {
          red_num = 0;
          blue_num = 0;
          yellow_num = 0;
          green_num = 0;
          running_total = 0;
          wins++;

          $("#wins").html(wins);
          $("#total-score").html(running_total);

          displayRandomNumber();
          setRedCrystalRandomNumber();
          setBlueCrystalRandomNumber();
          setYellowCrystalRandomNumber();
          setGreenCrystalRandomNumber();
     }

     function isLoses(){
          red_num = 0;
          blue_num = 0;
          yellow_num = 0;
          green_num = 0;
          running_total = 0;
          running_total = 0;
          loses++;

          $("#loses").html(loses);
          $("#total-score").html(running_total);

          displayRandomNumber();
          setRedCrystalRandomNumber();
          setBlueCrystalRandomNumber();
          setYellowCrystalRandomNumber();
          setGreenCrystalRandomNumber();
     }

});
