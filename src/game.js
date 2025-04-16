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

function deal(deck, numPlayers){
    const players = Array.from({ length: numPlayers }, () => []);
    let cardsPerPlayer = 13;
    let totalCardsToDeal = cardsPerPlayer * numPlayers

    for (let i = 0; i < totalCardsToDeal; i++){
        players[i % numPlayers].push(deck[i]);
    }

    return players;
}

function startGame() {
    const deck = createDeck();
    const shuffled = shuffleDeck(deck);
    const players = deal(shuffled,);
  
    players.forEach((hand, index) => {
      console.log(`Player ${index + 1}:`, hand);
    });
  }
  
  startGame();