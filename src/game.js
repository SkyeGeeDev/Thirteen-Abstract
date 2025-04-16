const suits = ['♠', '♥', '♦', '♣'];
const ranks = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'];

function createDeck(){
    const deck = [];
    for (let suit of suits) {
        for (let rank of ranks){
            deck.push({suit, rank});
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const testDeck = createDeck();
console.log("Before Shuffle: ", testDeck);

const shuffledDeck = shuffleDeck(testDeck);
console.log("After Shuffle: ", shuffledDeck);

console.log(shuffledDeck.length)