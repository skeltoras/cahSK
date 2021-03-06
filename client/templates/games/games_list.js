Template.gameItem.events({
  // click button 'beitreten' if loggedin @since 0.2.0
  'click .redirect': function(e) {
    e.preventDefault();

    gameId = this._id;
    gamePass = this.gamePass;
    player = Meteor.userId();
    playerName = Meteor.user().username;
    gameStatus = this.gameStatus      
    checkState = Session.get('inGame');
    checkCurr = Session.get('gameId');
    
    if(checkState == true && checkCurr != gameId) {
      throwError('Sie sind schon in einem Spiel angemeldet!');  
    } else {     
      // count playersIn +1 @since 0.3.0
      if (Games.find({_id: gameId, playerList: playerName}).count() === 1) {
        Session.set('gameId', gameId);
        Session.set('gamePass', gamePass);
        Session.set('gameStatus', gameStatus);
        Session.set('playerName', playerName);
        Session.set('inGame', true);
      } else {
        Games.update(gameId, {$addToSet: {playerList: playerName, playerIdList: player}, $set: {changed: new Date().getTime()}, $inc: {playersIn: 1}});
        Session.set('gameId', gameId);
        Session.set('gamePass', gamePass);
        Session.set('gameStatus', gameStatus);
        Session.set('playerName', playerName);
        Session.set('inGame', true);
      }   
      Router.go('gameSingle', {_id: gameId});
    }    
  },
  // click button 'beitreten' if not loggedin @since 0.2.0
  'click .loginFirst': function(e) {
    e.preventDefault();        
    throwError('Login first!');    
  }  
});

Template.gamesHome.rendered = function(){
  if(Meteor.userId()){
    Session.set('playerId', Meteor.userId());  
  }
};

Template.gamesHome.helpers({
  // list of all games sorted by submit-date @since 0.1.0
  games: function() {
    return Games.find({}, {sort: {submitted: -1}});
  }
});

Template.gameItem.helpers({
  // check owner of game for edit @since 0.1.0
  ownGame: function() {
    return this.userId === Meteor.userId();
  },
  // check for game pass @since 0.1.0
  checkPassword: function() {    
    hasPassword = false;
    if (this.gamePass) {
      hasPassword = true;  
    }
    return hasPassword;
  },
  // check for full games @since 0.3.3
  checkPlayerFull: function() {
    if(this.playersIn == this.playersMax){
      return true;
    }
  },
  // i dunno where i use this oO 
  playerID: function() {
    var player = Meteor.userId();
    return player;  
  },
  // debug functions @since 0.1.0
  passDebug: function() {
    return 'debug: ' + this.gamePass;
  }
});