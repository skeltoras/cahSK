Meteor.publish('games', function() {
  return Games.find();
});

Meteor.publish('decks', function() {
  return Decks.find();
});