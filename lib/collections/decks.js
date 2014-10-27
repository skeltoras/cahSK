Decks = new Mongo.Collection('decks');

Decks.allow({
  insert: function(){return true;}
});