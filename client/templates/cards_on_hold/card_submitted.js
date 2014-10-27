Template.editNewCards.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentCardId= this._id;
    var cardOwner = this.cardOwner;
    var cardOwnerName = this.cardOwnerName;
    var cardCheck = document.getElementById('cardText');
    var cardIsBlackCheck = document.getElementById('cardIsBlack');
    var cardHasWhiteCheck = document.getElementById('cardNeededWhite');
    
    var decks = [];
    $('input[name=decksRadio]:checked').each(function() {
      decks.push($(this).val());
    });
    
    if(cardIsBlackCheck.checked == true) {
      var card = {
        cardText: $(e.target).find('[name=cardText]').val(),
        cardDeck: decks,
        cardIsBlack: true,
        cardNeededWhite: $(e.target).find('[name=cardNeededWhite]').val(),   
        cardOwner: cardOwner,
        cardOwnerName: cardOwnerName,
        submitted: new Date().getTime()
      };
      if(cardCheck.value != '' && cardHasWhiteCheck.value > 0){
        Meteor.call('newCard', card, function(error, result){
          if (error)
          return throwError(error.reason);
        });
        CardsOnHold.remove(currentCardId);
        Router.go('cardsList');
      } else {
        throwError('Karte konnte nicht gespeichert werden');
        Router.go('editNewCards');
      }
    } else {
      var card = {
        cardText: $(e.target).find('[name=cardText]').val(),
        cardDeck: decks,
        cardIsBlack: false,
        cardNeededWhite: false,   
        cardOwner: cardOwner,
        cardOwnerName: cardOwnerName,
        submitted: new Date().getTime()
      };
      if(cardCheck.value != ''){
        Meteor.call('newCard', card, function(error, result){
          if (error)
          return throwError(error.reason);
        });
        CardsOnHold.remove(currentCardId);
        Router.go('cardsList');
      } else {
        throwError('Karte konnte nicht gespeichert werden');
        Router.go('editNewCards');
      }
    }
  }
});

Template.editNewCards.helpers({
  checkBlack: function() {
    isBlack = Session.get('isBlack');
    if(isBlack == true)
    {
      return '<strong>ist schwarz</strong>';
    }  
  },
  debug: function(){
    currentId = Session.get('onHoldId');
    console.log(currentId);
  },
});