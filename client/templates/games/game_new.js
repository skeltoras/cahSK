Template.gamesNew.events({
  'submit form': function(e) {
    e.preventDefault();

    var playerList = [];
    var spectatorList = [];
    var decks = [];
    $('input[name=decks]:checked').each(function() {
      decks.push($(this).val());
    });
    
    var game = {
      gameTitle: $(e.target).find('[name=gameTitle]').val(),
      scoreMax: $(e.target).find('[name=scoreMax]').val(),
      playersIn: 0,
      playersMax: $(e.target).find('[name=playersMax]').val(),
      spectatorsIn: 0,
      spectatorsMax: $(e.target).find('[name=spectatorsMax]').val(),
      gamePass: $(e.target).find('[name=gamePass]').val(),
      gameStatus: 'offen',
      decks: decks,
      playerList: playerList,
      spectatorList: spectatorList
    };
    
    Meteor.call('game', game, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      // show this result but route anyway
      if (result.gameExists)
        throwError('This link has already been posted');

      Router.go('home');  
    });
  },
  'change #showPassword': function(e) {
    e.preventDefault();
    if($(e.target).is(':checked')) {
      document.getElementById("gamePass").attributes["type"].value = "text";
      console.log('text');
    } else {
      document.getElementById("gamePass").attributes["type"].value = "password";
      console.log('password');      
    } 
  }    
});

Template.gamesNew.created = function() {
  Session.set('gamesNewErrors', {});
}

Template.gamesNew.helpers({
  errorMessage: function(field) {
    return Session.get('gamesNewErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('gamesNewErrors')[field] ? 'has-error' : '';
  },
  decks: function() {
    return Decks.find().fetch();
  },
  passType: function() {
    //return showPass;  
  }
});
