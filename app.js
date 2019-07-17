/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


/************************
* Variables Declaration *
************************/

var scores, roundScore, activePlayer, gamePlaying;

//Saves the last dice roll
var lastDice;

init(); // Initializes the application and zeroes the values



/*We choose the Reroll Button ID from HTML and we create an event. 
* We choose "click" as we want the event to activate when we click on the buton.
* the seconds argument on the eventListener is the function we call. This one
* is a anonymous function and cannot be called outside of this event. It is 
* created and used only here. 
*/


/************** 
* Button Roll *
**************/
document.querySelector(".btn-roll").addEventListener("click", function()
{
    if(gamePlaying)
    {
        /*******************
        * 1. Random Number *
        *******************/

        /*math.random generates a random number from 0 to 1
        * math.floor creates an int without decimals
        * So we multiply the result by 6, plus one (to exclude 0) to get a number 1 to 6
        */
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        
        console.log(dice1, dice2); /******** DEBUG ************/
        
        /************************
        * 2. Display The Result *
        ************************/  

        /*//This is the DOM object for the dice
        var diceDOM = document.querySelector(".dice");

        //We alter the css of the dice so the img is displayed
        diceDOM.style.display = "block";

        //Now we want to display the right img
        //That happens by changing the source
        diceDOM.src = "dice-" + dice + ".png";*/
        
        
        //This is the DOM object for the dice
        document.getElementById("dice-1").style.display = "block";
        document.getElementById("dice-2").style.display = "block";


        //Now we want to display the right img
        //That happens by changing the source
        document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
        document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
        
        
        /************************************************************* 
        * 3. Update The Round Score IF the random number was NOT a 1 *
        *************************************************************/ 

//        // !== performs type coarcion
//        if(dice !== 1)
//            {
//                //Add score
//                roundScore += dice;
//                document.querySelector("#current-" + activePlayer).textContent =  roundScore; 
//            }
//        else
//            {
//                //Next Player
//                nextPlayer();
//            }
        }
});



//
//
///**************
//* Button Hold *
//**************/
//document.querySelector(".btn-hold").addEventListener("click", function()
//{
//    if(gamePlaying)
//    {
//        /***************************************
//        * 1. Add CURRENT score to GLOBAL score *
//        ***************************************/
//
//        scores[activePlayer] += roundScore;
//
//        /*******************
//        * 2. Update the UI *
//        *******************/
//
//        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
//
//        /**********************************
//        * 3. Check if player won the game *
//        **********************************/
//
//        if (scores[activePlayer] >= 20)
//            {
//                document.querySelector("#name-" + activePlayer).textContent = "WINNER";
//                document.querySelector(".dice").style.display = "none";
//                document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
//                document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
//                gamePlaying = false;
//            }
//        else
//            {
//                /*****************
//                * 4. Next Player *
//                *****************/
//
//                nextPlayer();
//            }
//    }
//});
//
//
///*************
//* Button New *
//*************/
//document.querySelector(".btn-new").addEventListener("click", init);
//
//
//function nextPlayer()
//{
//    //Next player
//    //Using ternary operator
//    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
//        
//                
//    //Reseting round score
//    roundScore = 0;
//            
//    console.log("roundscore 0");
//            
//            //Reseting round score on web page
//            document.getElementById("current-0").textContent = 0;
//            document.getElementById("current-1").textContent = 0;
//
//            
//            console.log("html 0");
//            
//            /* 
//             * The red dot on the active player and the black font comes from the
//             * "active" attribute in the HTML class. So we have to remove it from
//             * player 1 and add it to player to 2
//             */
//            
////            //Removes "active" attribute
////            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
////            
////            //Adds "active" attribute
////            document.querySelector(".player-1-panel").classList.add("active");
//            
//            //But when it changes to second player then ti won't change to the first
//            //so we have to use toggle in order to change the player each time we
//            //roll a 1
//            
//            document.querySelector(".player-0-panel").classList.toggle("active");
//            document.querySelector(".player-1-panel").classList.toggle("active");
//            
//            document.querySelector(".dice").style.display = "none";    
//}



function init()
{
    gamePlaying = true;
    
   //Includes the scores of each player
    scores = [0,0];
    roundScore = 0;

    //0 is the first player
    //1 is the second player
    activePlayer =0;
    
    //querySelector to change the CSS of some element
    //For example if we want to hide the dice
    // we choose the CLASS of the dice 
    //and set the display to none
    document.querySelector(".dice").style.display = "none"; 
    document.getElementById("dice-2").style.display = "none";



    //Sets the round and current scores to 0 using the getElementbyId
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-1").textContent = "Player 2";
    document.getElementById("name-0").textContent = "Player 1";
    
    //Remove winner class for all players
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
}


/***************************** TUTORIAL **************************************/

/* using this method, we took a tag from the HTML. After that we altered the text
* using textContent and set it to our random generated dice
*/
//document.querySelector("#current-" + activePlayer).textContent = dice;

//Same as the above, just using the innerHTML method, this ways we get the Italic style in the number
//Using this above method (textContent) we cannot use HTML, so the below <em>...</em> wouldn't work
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";


//store the global score into a variable
//var x = document.querySelector("#score-0").textContent;