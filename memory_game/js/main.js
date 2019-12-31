let cards = ["queen", "queen", "king", "king"];

let cardOne = cards[0];
let cardTwo = cards[2];

let cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    checkForMatch();
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);