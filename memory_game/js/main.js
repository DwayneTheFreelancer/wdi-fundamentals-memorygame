let cards = ["queen", "queen", "king", "king"];

let cardOne = cards[0];
let cardTwo = cards[2];

let cardsInPlay = [];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
} else {
    alert("Sorry, try again.");
}

console.log(cardOne + " is flipped!");
console.log(cardTwo + " is flipped!");