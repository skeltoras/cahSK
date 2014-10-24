
Template.cardEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentCardId = this._id;

    var cardProperties = {
      cardTitle: $(e.target).find('[name=cardTitle]').val(),
      cardStatus: 'open',
      playersIn: '0',
      playersMax: $(e.target).find('[name=playersMax]').val()
    }

    Cards.update(currentCardId, {$set: cardProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('cardPage', {_id: currentCardId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this card?")) {
      var currentCardId = this._id;
      Cards.remove(currentCardId);
      Router.go('cardsList');
    }
  }
});
