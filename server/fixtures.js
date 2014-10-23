// Default Games entries
if (Games.find().count() === 0) {
  Games.insert({
    gameTitle: 'Game #1',
    gameMaster: 'RainbowDash',
    scoreMax: '10',
    playersIn: '3',
    playersMax: '20',
    playerList: ['Hufflepuff, Degado, Hansi'],
    spectatorsIn: '0',
    spectatorsMax: '0',
    spectatorsList: false,
    decksList: ['default'],
    gamePass: false
  });

  Games.insert({
    gameTitle: 'Game #2',
    gameMaster: 'Skeltoras',
    scoreMax: '10',
    playersIn: '10',
    playersMax: '10',
    playerList: ['Domenic', 'Angelo', 'Bryce', 'Tristan', 'Noe', 'Reyes', 'Howard', 'Daren', 'Xavier', 'Marcos'],
    spectatorsIn: '0',
    spectatorsMax: '0',
    spectatorsList: false,
    decksList: ['default'],
    gamePass: '1234'
  });
  
  Games.insert({
    gameTitle: 'Game #3',
    gameMaster: 'Cougar',
    scoreMax: '20',
    playersIn: '2',
    playersMax: '16',
    playerList: ['Antoine, James'],
    spectatorsIn: '0',
    spectatorsMax: '0',
    spectatorsList: false,
    decksList: ['default'],
    gamePass: false
  });
  
  Games.insert({
    gameTitle: 'Game #4',
    gameMaster: 'RainbowDash',
    scoreMax: '16',
    playersIn: '0',
    playersMax: '8',
    playerList: [],
    spectatorsIn: '0',
    spectatorsMax: '0',
    spectatorsList: false,
    decksList: ['default'],
    gamePass: false
  });
}
// Default Decks entries
if (Decks.find().count() === 0) {
  Decks.insert({
    deckText: 'default',
    cardSubscriber: 'RainbowDash'
  });
  Decks.insert({
    deckText: 'Deck2',
    cardSubscriber: 'RainbowDash'
  });
}