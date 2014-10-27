Template.decksNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var deck = {
    };
    
    Meteor.call('deck', deck, function(error, result) {
      if (error)
        return throwError(error.reason);

      if (result.deckExists)
        throwError('This link has already been posted');

      Router.go('home');  
    });
  }
});

Template.decksNew.created = function() {
  Session.set('decksNewErrors', {});
}

Template.decksNew.helpers({
  errorMessage: function(field) {
    return Session.get('decksNewErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('decksNewErrors')[field] ? 'has-error' : '';
  }
});
