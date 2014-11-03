// default user entries
if (Meteor.users.find().count() === 0) {
  userId = Accounts.createUser({
    username: 'Schkeldi',
    email: 'schkeldi@skeltoras.de',
    password: 'test12',
    profile: {
      first_name: 'John',
      last_name: 'Doe',
      company: 'ABC',
    }
  });
  helpOne = Accounts.createUser({
    username: 'CrowdController',
    email: 'crowd@skeltoras.de',
    password: 'hallo',
    profile: {
      first_name: 'John',
      last_name: 'Doe',
      company: 'ABC',
    }
  });  
};

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
    decks: ['Standard'],
    playerList: ['Hufflepuff', 'Degado', 'Hansi'],
    spectatorList: [],
    userId: userId,
    gameMaster: 'Schkeldi',
    submitted: 1414142012903,
    changed: 1414142012903
  });

  Games.insert({
    gameTitle: 'Game #2',
    scoreMax: 10,
    playersIn: 9,
    playersMax: 10,
    spectatorsIn: 0,
    spectatorsMax: 0,
    gamePass: '1234',
    gameStatus: 'offen',
    decks: ['Standard', 'Testdeck'],
    playerList: ['Domenic', 'Angelo', 'Bryce', 'Tristan', 'Noe', 'Reyes', 'Howard', 'Daren', 'Xavier'],
    spectatorList: [],
    userId: userId,
    gameMaster: 'Schkeldi',
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
    decks: ['Standard'],
    playerList: ['Antoine', 'James'],
    spectatorList: [],
    userId: userId,
    gameMaster: 'Schkeldi',
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
    decks: ['Testdeck'],
    playerList: [],
    spectatorList: [],
    userId: userId,
    gameMaster: 'Schkeldi',
    submitted: 1414142012903,
    changed: 1414142012903
  });
}
// Default Decks entries
if (Decks.find().count() === 0) {
  Decks.insert({
    deckTitle: 'Standard',
    deckOwner: userId,
    deckOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Decks.insert({
    deckTitle: 'Testdeck',
    deckOwner: userId,
    deckOwnerName: 'Schkeldi',
    submitted: 1414142012903 
  });
}
// default cards entries
if (Cards.find().count() === 0) {
  Cards.insert({
    cardText: 'Erste schwarze _____ Karte',
    cardDeck: ['Standard'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  }); 
  Cards.insert({
    cardText: 'BlackCard #2',
    cardDeck: ['Standard'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  }); 
  Cards.insert({
    cardText: 'BlackCard #3',
    cardDeck: ['Standard'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'BlackCard #4',
    cardDeck: ['Standard'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'BlackCard #5',
    cardDeck: ['Standard'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'BlackCard #6',
    cardDeck: ['Testdeck'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'BlackCard #7',
    cardDeck: ['Testdeck'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'BlackCard #8',
    cardDeck: ['Testdeck'],
    cardIsBlack: true,
    cardNeededWhite: 1,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  }); 
  Cards.insert({
    cardText: 'Erste weiße Karte',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });  
  Cards.insert({
    cardText: 'Zweite weiße Karte',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #3',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #4',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #5',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #6',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #7',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #8',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #9',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #10',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #11',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #12',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #13',
    cardDeck: ['Standard'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #14',
    cardDeck: ['Testdeck'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #15',
    cardDeck: ['Testdeck'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
  Cards.insert({
    cardText: 'White #16',
    cardDeck: ['Testdeck'],
    cardIsBlack: false,
    cardNeededWhite: false,   
    cardOwner: userId,
    cardOwnerName: 'Schkeldi',
    submitted: 1414142012903
  });
}
// default hands entries
if (Hands.find().count() === 0) {
  Hands.insert({
    cardText: 'Testtext',
    cardIsBlack: true,
    cardneededWhite: 1,
    gameId: 'sdfsfsdfas',
    order: 423
  });  
  Hands.insert({
    cardText: 'Testtext #2',
    cardIsBlack: false,
    cardneededWhite: 1,
    gameId: 'ghjgjkg',
    order: 435
  });  
}