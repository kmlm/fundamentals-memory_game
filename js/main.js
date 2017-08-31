console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


/* Flipping Queen 1 */

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log ("User flipped queen");


/* Flipping King 1  */


var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log ("User flipped king");


/* ensuring 2 cards chosen */



/* alerts for cards chosen */

if (cardsInPlay[0] === cardsInPlay[1]) {alert("You found a match!");}
	else {alert("Sorry, try again.");};


