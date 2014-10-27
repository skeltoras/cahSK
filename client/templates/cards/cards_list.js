Template.cardsList.helpers({
  // list of all black cards sorted by submit-date @since 0.4.6
  cardsBlack: function() {
    return Cards.find({cardIsBlack: true}, {sort: {submitted: -1}});
  },
  // list of all white cards sorted by submit-date @since 0.4.6
  cardsWhite: function() {
    return Cards.find({cardIsBlack: false}, {sort: {submitted: -1}});
  }
});