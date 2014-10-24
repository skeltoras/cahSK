Template.cardsNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var isBlack = $(e.target).find('[name=cardIsBlack]:checked').val();
    
    var card = {
      cardText: $(e.target).find('[name=cardText]').val(),
      cardIsBlack: isBlack,
      cardNeededWhite: $(e.target).find('[name=cardNeededWhite]').val()
    }

    Meteor.call('card', card, function(error, id) {
      if (error)
        return alert(error.reason);

      Router.go('cardsList');
    });
  }
});