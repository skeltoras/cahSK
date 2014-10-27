Template.cardItem.events({
});

Template.cardsList.helpers({
  // list of all games sorted by submit-date @since 0.1.0
  cards: function() {
    return Cards.find({}, {sort: {submitted: -1}});
  }
});

Template.cardItem.helpers({
});