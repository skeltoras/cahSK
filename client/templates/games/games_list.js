Template.gameItem.events({
  'click .redirect': function(e) {
    e.preventDefault();

    gameId = this._id;
    player = Meteor.userId();
    playerName = Meteor.user().username;
    
    if (Games.find({_id: gameId, playerList: playerName}).count() === 1) {
      // do nothing
    } else {
      Games.update(gameId, {$addToSet: {playerList: playerName}, $set: {changed: new Date().getTime()}, $inc: {playersIn: 1}});
      console.log('Player ' + playerName + ' eingetragen');
    }
    
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
  checkPassword: function() {    
    hasPassword = false;
    if (this.gamePass) {
      hasPassword = true;  
    }
    return hasPassword;
  },
  checkPlayerFull: function() {
    if(this.playersIn == this.playersMax){
      console.log('Spiel ' + this.gameTitle + ' voll!');
      return true;
    }
  },
  playerID: function() {
    var player = Meteor.userId();
    return player;  
  },
  passDebug: function() {
    return 'debug: ' + this.gamePass;
  }
});