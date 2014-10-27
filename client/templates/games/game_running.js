Template.gameBlackCards.helpers({
  cards: function() {
    return Cards.find({cardIsBlack: 'on'}, {sort: {submitted: -1}});
  }
});

Template.gameWhiteCards.helpers({
  cards: function() {
    return Cards.find({cardIsBlack: false}, {sort: {submitted: -1}});
  }
});