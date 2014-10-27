Cards = new Mongo.Collection('cards');

Cards.allow({
  insert: function(){return true;}
});

Meteor.methods({
  newCard: function (card) {
    Cards.insert(card);
  }
})