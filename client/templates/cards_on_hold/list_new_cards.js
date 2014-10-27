Template.listNewCards.helpers({
  // list of all black cards sorted by submit-date @since 0.4.6
  cardsListBlack: function() {
    return CardsOnHold.find({cardIsBlack: true}, {sort: {submitted: -1}});
  },
  // list of all white cards sorted by submit-date @since 0.4.6
  cardsListWhite: function() {
    return CardsOnHold.find({cardIsBlack: false}, {sort: {submitted: -1}});
  }
});

Template.cardListItemBlack.events({
  'click #save': function(e) {
    e.preventDefault();
    currentCardId = this._id;
    Session.set('isBlack', true);
    Router.go('editNewCards', {_id: currentCardId})
    console.log('save'); //debug
  },
  'click #delete': function(e) {
    e.preventDefault();
    if (confirm("Karte löschen?")) {
      var currentCardId = this._id;
      CardsOnHold.remove(currentCardId);
    }
  }
});

Template.cardListItemWhite.events({
  'click #save': function(e) {
    e.preventDefault();
    currentCardId = this._id;
    Session.set('isBlack', false);
    Router.go('editNewCards', {_id: currentCardId})
    console.log('save'); //debug
  },
  'click #delete': function(e) {
    e.preventDefault();
    if (confirm("Karte löschen?")) {
      var currentCardId = this._id;
      CardsOnHold.remove(currentCardId);
    }
  }
});