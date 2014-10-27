Template.decksNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var deckOwner = Meteor.userId();
    var deckOwnerName = Meteor.user().username;
    var deckCheck = document.getElementById('deckTitle');
       
    var deck = {
      deckTitle: $(e.target).find('[name=deckTitle]').val(), 
      deckOwner: deckOwner,
      deckOwnerName: deckOwnerName,
      submitted: new Date().getTime()
    };
    
    if(deckCheck.value != ''){
      Decks.insert(deck);
      console.log('deck ' + deckTitle + ' eingetragen!'); //debug
      Router.go('decksList');
    } else {
      throwError('Ein Deck mit diesem Namen ist schon vorhanden');
      Router.go('decksNew');
    }  
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
