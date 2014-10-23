Template.gameItem.events({
  'click .redirect': function(e) {
    e.preventDefault();
    
    
    
    gameId = this._id;
    player = Meteor.userId();
    playerName = Meteor.user().username;
    
    Games.update(gameId, {$addToSet: {playerList: playerName}, $set: {changed: new Date().getTime()}, $inc: {playersIn: 1}});
    //Games.update(gameId, );
    //Games.update(gameId, );
    
    /*    
    var game = {
      currentGameId: gameId,
      player: playerId   
    };
    console.log(game);
    Meteor.call('playerAdd', game, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      Router.go('gameSingle', {_id: currentGameId});  
    });
    */ 
    Router.go('gameSingle', {_id: gameId});   
  },
  
  'click .loginFirst': function(e) {
    e.preventDefault();        
    throwError('Login first!');    
    console.log('error');
  }  
});

Template.gamesHome.helpers({
  games: function() {
    return Games.find({}, {sort: {submitted: -1}});
  }
});

Template.gameItem.helpers({
  ownGame: function() {
    return this.userId === Meteor.userId();
  },
  gameStatus: function() {
    return 'Status';
  },
  playersIn: function() {
    return '0';
  },
  spectatorsIn: function() {
    return '0';
  },
  decksList: function() {
    return 'default';
  },
  checkPassword: function() {    
    hasPassword = false;
    if (this.gamePass) {
      hasPassword = true;  
    }
    return hasPassword;
  },
  playerID: function() {
    var player = Meteor.userId();
    return player;  
  },
  passDebug: function() {
    return 'debug: ' + this.gamePass;
  }
});