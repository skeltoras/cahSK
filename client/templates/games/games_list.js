Template.gameItem.events({
  // click button 'beitreten' if loggedin @since 0.2.0
  'click .redirect': function(e) {
    e.preventDefault();

    gameId = this._id;
    gamePass = this.gamePass;
    player = Meteor.userId();
    playerName = Meteor.user().username;
    
    if (Games.find({_id: gameId, playerList: playerName}).count() === 1) {
      // do nothing
      Session.set("gameId", gameId);
      Session.set("gamePass", gamePass);
      Session.set("playerName", playerName);
    } else {
      Games.update(gameId, {$addToSet: {playerList: playerName}, $set: {changed: new Date().getTime()}, $inc: {playersIn: 1}});
      Session.set("gameID", gameId);
      Session.set("gamePass", gamePass);
      Session.set("playerName", playerName);
      console.log('Player ' + playerName + ' eingetragen'); // debug
    }
    
    Router.go('gameSingle', {_id: gameId});   
  },
  // click button 'beitreten' if not loggedin @since 0.2.0
  'click .loginFirst': function(e) {
    e.preventDefault();        
    throwError('Login first!');    
    console.log('error'); // debug
  }  
});

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
      console.log('Spiel ' + this.gameTitle + ' voll!');
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