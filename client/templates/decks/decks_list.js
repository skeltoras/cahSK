Template.decksList.helpers({
  // list of all decks sorted by submit-date @since 0.4.6
  decks: function() {
    return Decks.find({}, {sort: {submitted: -1}});
  }
});

Template.deckItem.helpers({
  // count of all cards pro deck sorted by submit-date @since 0.4.6
  cardsProDeck: function() {
    var currentDeck = this.deckTitle;
    return Cards.find({cardDeck: currentDeck}, {sort: {submitted: -1}}).count();
  }
});