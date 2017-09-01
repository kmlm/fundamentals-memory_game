var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/* function to check for match */

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) 
		{alert("You found a match!");} 
	else {alert("Sorry, try again.");};
};

/* function storing what happens when user flips card*/

var flipCard = function (cardId) {
	console.log ("User flipped " + cards[cardId]);
	cardsInPlay.push (cards[cardId]);
	if(cardsInPlay.length <2 || cardsInPlay.length > 2) {return};
	checkForMatch();
};

flipCard (0);
flipCard (2);






















