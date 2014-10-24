// Default Games entries
if (Games.find().count() === 0) {
  Games.insert({
    gameTitle: 'Game #1',
    scoreMax: 10,
    playersIn: 3,
    playersMax: 20,
    spectatorsIn: 0,
    spectatorsMax: 0,
    gamePass: '',
    gameStatus: 'offen',
    decks: ['default'],
    playerList: ['Hufflepuff', 'Degado', 'Hansi'],
    spectatorList: [],
    userId: '9S4WKMk6jfTCcPnBd',
    gameMaster: 'RainbowDash',
    submitted: 1414142012903,
    changed: 1414142012903
  });

  Games.insert({
    gameTitle: 'Game #2',
    scoreMax: 10,
    playersIn: 10,
    playersMax: 10,
    spectatorsIn: 0,
    spectatorsMax: 0,
    gamePass: '1234',
    gameStatus: 'running',
    decks: ['default', 'Deck2'],
    playerList: ['Domenic', 'Angelo', 'Bryce', 'Tristan', 'Noe', 'Reyes', 'Howard', 'Daren', 'Xavier', 'Marcos'],
    spectatorList: [],
    userId: '9S4WKMk6jfTCcPnBd',
    gameMaster: 'RainbowDash',
    submitted: 1414142012903,
    changed: 1414142012903
  });
  
  Games.insert({
    gameTitle: 'Game #3',
    scoreMax: 20,
    playersIn: 2,
    playersMax: 20,
    spectatorsIn: 0,
    spectatorsMax: 10,
    gamePass: '',
    gameStatus: 'offen',
    decks: ['default'],
    playerList: ['Antoine', 'James'],
    spectatorList: [],
    userId: '9S4WKMk6jfTCcPnBd',
    gameMaster: 'RainbowDash',
    submitted: 1414142012903,
    changed: 1414142012903
  });
  
  Games.insert({
    gameTitle: 'Game #4',
    scoreMax: 16,
    playersIn: 0,
    playersMax: 8,
    spectatorsIn: 0,
    spectatorsMax: 0,
    gamePass: '',
    gameStatus: 'offen',
    decks: ['Deck2'],
    playerList: [],
    spectatorList: [],
    userId: '9S4WKMk6jfTCcPnBd',
    gameMaster: 'RainbowDash',
    submitted: 1414142012903,
    changed: 1414142012903
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