CardsOnHold = new Mongo.Collection('cardsOnHold');

CardsOnHold.allow({
  insert: function(){return true;},
  remove: function(){return true;}
});

Meteor.methods({
  newCardOnHold: function (cardOnHold) {
    CardsOnHold.insert(cardOnHold);
  }
})