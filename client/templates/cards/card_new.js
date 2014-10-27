Template.cardsNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var decks = [];
    $('input[name=decks]:checked').each(function() {
      decks.push($(this).val());
    });
    
    var card = {
    };
    
    Meteor.call('card', card, function(error, result) {
      if (error)
        return throwError(error.reason);

      if (result.gameExists)
        throwError('This link has already been posted');

      Router.go('home');  
    });
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
  },
  decks: function() {
    return Decks.find().fetch();
  }
});