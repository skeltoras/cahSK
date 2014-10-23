Template.gameItem.events({
  'click .redirect': function(e) {
    e.preventDefault();    
    var currentGameId = this._id
    var player = Meteor.userId();
    Router.go('gameSingle', {_id: currentGameId});
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