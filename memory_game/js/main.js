var cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
    },
    {
       rank: "queen",
       suit: "diamonds",
       cardImage: "images/queen-of-diamonds.png",
    },
 
    {
     rank: "king",
     suit: "hearts",
     cardImage: "images/king-of-hearts.png",
    },
     {
     rank: "king",
     suit: "diamonds",
     cardImage: "images/king-of-diamonds.png",
    },
 ];

let cardOne = cards[0];
let cardTwo = cards[2];

let cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
    }
}

function flipCard(cardId) {
    checkForMatch();
    cardsInPlay.push(cardsInPlay.push(cards[cardId].rank));
    console.log("User flipped " + cards[cardId].rank + " " + cards[cardId].suit + " " + cards[cardId].cardImage);
}

flipCard(0);
flipCard(2);