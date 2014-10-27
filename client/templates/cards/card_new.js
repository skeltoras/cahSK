Template.cardsNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var cardOwner = Meteor.userId();
    var cardOwnerName = Meteor.user().username;
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
        console.log('Schwarze Karte ' + cardText + ' eingetragen!'); //debug
        Router.go('cardsList');
      } else {
        throwError('Karte konnte nicht gespeichert werden'); //debug
        Router.go('cardsNew');
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
        console.log('Weiße Karte ' + cardText + ' eingetragen!'); //debug
        Router.go('cardsList');
      } else {
        throwError('Karte konnte nicht gespeichert werden'); //debug
        Router.go('cardsNew');
      }
    }
  }
});

Template.cardsNew.created = function() {
  Session.set('cardsNewErrors', {});
}

Template.cardsNew.helpers({
  errorMessage: function(field) {
    return Session.get('cardsNewErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('cardsNewErrors')[field] ? 'has-error' : '';
  }
});