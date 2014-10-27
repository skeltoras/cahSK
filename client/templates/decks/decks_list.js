Template.deckItem.events({
});

Template.decksList.helpers({
  // list of all games sorted by submit-date @since 0.1.0
  decks: function() {
    return Decks.find({}, {sort: {submitted: -1}});
  }
});

Template.deckItem.helpers({
});