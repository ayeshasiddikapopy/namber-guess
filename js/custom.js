
// start game-->>
let startinput = document.querySelector(".startinput");
let startbutton = document.querySelector(".startbutton");
let error = document.querySelector(".error")
let wanna = document.querySelector(".wanna")

// player one -->>
let playerone_input = document.querySelector(".playerone_input");
let playerone_button = document.querySelector(".playerone_button");
let playerone_error = document.querySelector(".playerone_error");
let playerone = document.querySelector(".player_one");

// player two -->>
let playertwo_input = document.querySelector(".playertwo_input");
let playertwo_button = document.querySelector(".playertwo_button");
let playertwo_error = document.querySelector(".playertwo_error");
let player_two = document.querySelector(".player_two");

//player three -->>
let playerThree_input = document.querySelector(".playerThree_input");
let playerThree_button = document.querySelector(".playerThree_button");
let playerThree_error = document.querySelector(".playerThree_error");
let player_Three = document.querySelector(".player_Three");

// chance
let count = 6;
let nam = document.querySelector(".nam");
let chance = document.querySelector(".chance");

// chance player3
let counts = 6;
let nams = document.querySelector(".nams");
let chances = document.querySelector(".chances");

//player One in progress
startbutton.addEventListener("click", function(){ 
    if(startinput.value == ""){
      //working for errors
      error.style.display = "block";
      error.innerHTML = "Fill the line";
    }else{
      //start game
      wanna.style.display = "none" // none will be used when users give name   
      startinput.style.display = "none";
      startbutton.style.display = "none";
      error.style.display = "none";
      //player one 
      playerone.style.display = "block";
      playerone_input.style.display = "block";
      playerone_button.style.display = "block";
    }
});

// player one in progess-->>
playerone_button.addEventListener("click", function(){
  // 1 theke boro & 10 er theke choto hote hobe
  if(playerone_input.value < 1 || playerone_input.value > 10){
    console.log("error");
  }else{
    //shows only in number not strings
    if(playerone_input.value - 0){   // akhane 1 dile output er 1 dile not a number ase keno?
      console.log("number");         // 0, "", nan , undefine -->> false
      playerone_error.style.display = "none";

      //player two
      player_two.style.display = "block";
      playertwo_input.style.display = "block";
      playertwo_button.style.display = "block";

      //player one display removed
      playerone.style.display = "none";
      playerone_input.style.display = "none";
      playerone_button.style.display = "none";

    }else{
      console.log("not a number");
      playerone_error.innerHTML = "Give a number";
      playerone_error.style.display = "block";
    }
  }  
});

// player two in progress
playertwo_button.addEventListener("click", function(){

    if(playertwo_input.value < 1 || playertwo_input.value > 10){
        console.log("error");
        
    }else{
        if(playertwo_input.value - 1){      // for make it number forcfully
            console.log("passed")
            playertwo_error.style.display = "none";
        }
        else{
            console.log("give a number");
            playertwo_error.style.display = "block";
            playertwo_error.innerHTML = "Give a number"
        }
    }
    // for same number it will show winning
    if(playerone_input.value == playertwo_input.value){
        console.log("won")
        // player_two.innerHTML = "player two winner",
        //player tew removed
        player_two.style.display = "none",
        playertwo_input.style.display = "none",
        playertwo_button.style.display = "none",

        // player thrre added after succes of player two 
        player_Three.style.display = "block",
        playerThree_input.style.display = "block",
        playerThree_button.style.display = "block"

    }else{
        console.log("failed");
        count--;
        chance.innerHTML = count; 
        console.log(count);
        chance.style.display = "inline-block";
        nam.style.display = "block";    // chance 5 dile show korar somoi already 5 porjonto nia nei , chance 4 theke show koree
          if(count == 0){
            console.log("game over");
            player_two.innerHTML = "lets move",
            //player tew removed
            player_two.style.display = "none",
            playertwo_input.style.display = "none",
            playertwo_button.style.display = "none",
            // player thrre added after succes of player two 
            player_Three.style.display = "block",
            playerThree_input.style.display = "block",
            playerThree_button.style.display = "block"
          }
    }
});

// player three in progress
playerThree_button.addEventListener("click", function(){
  if(playerThree_input.value < 1 || playerThree_input.value > 10){
    console.log("error");
  }else{
    if(playerThree_input.value - 1){   
      console.log("its a number");
      playerThree_error.style.display = "none"
    }else{
      console.log(`its not a number`);
      playerThree_error.innerHTML = "Give a number",
      playerThree_error.style.display = "block"
    }
  }
  if(playerone_input.value == playerThree_input.value){
    console.log(`win`);
  }else{
    console.log(`faild`)
    counts--;
    chances.innerHTML = counts; 
    console.log(counts);
    chances.style.display = "inline-block";
    nams.style.display = "block";    // chance 5 dile show korar somoi already 5 porjonto nia nei , chance 4 theke show koree
      if(counts == 0){
        console.log("game over");

      }
  }
});



// 1. whats name 
// 2. palyer winner 
// 3. game over