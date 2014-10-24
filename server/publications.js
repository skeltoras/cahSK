Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('decks', function() {
  return Decks.find();
});

Meteor.publish('cards', function() {
  return Cards.find();
});

Meteor.publish('gameData', function(gameId) {
  var currGame = Games.find({_id: gameId}, {fields: {playersIn: 1}}).fetch;
});