Template.gameRunning.events({
  //button 'begin' to run the game @since 0.4.5
  'click .end': function(e) {
    e.preventDefault();
  },  
  //button 'leave' to return to gameslist @since 0.3.7
  'click .dev': function(e) {
    e.preventDefault();
    gameId = this._id;
    Meteor.call('handsDebug', gameId, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason); 
    });
    console.log('Debug: gelöscht');
  }  
});

Template.gameRunning.destroyed = function(){
  gameId = Session.get("gameId");
  playerName = Session.get("playerName");
  var gameStatus = Session.get("gameStatus");
  
  var chatAnnounceText = playerName + ' hat den Chat verlassen';
  var chat = {
    chatAnnounce: true,
    chatAnnounceText: chatAnnounceText,
    gameId: gameId,
    playerName: playerName,
    submitted: new Date().getTime()      
  };
  Chats.insert(chat);  
};

Template.gameRunningPlayerlist.created = function(){
  gameId = Session.get("gameId");
  Meteor.call('playersList', gameId, function(error, result) {
    // display the error to the user and abort
    if (error)
    return throwError(error.reason); 
  });
  Meteor.call('handToPlayer', gameId, function(error, result) {
    // display the error to the user and abort
    if (error)
    return throwError(error.reason); 
  });   
};

Template.gameRunningPlayerlist.helpers({
  players: function() {
    gameId = Session.get("gameId");
    return Players.find({gameId: gameId});
  }
});

Template.gameBlackCards.created = function(){
  gameId = Session.get("gameId");
  Meteor.call('handsCreateBlack', gameId, function(error, result) {
    // display the error to the user and abort
    if (error)
      return throwError(error.reason); 
  });  
};

Template.gameBlackCards.helpers({
  bc: function() {
    return Hands.find({cardIsBlack: true, gameId: gameId, active: true}, {sort: {order: 1}, limit:1});
  }
});

Template.gameWhiteCards.helpers({
  cards: function() {
    //return Cards.find({cardIsBlack: false}, {sort: {submitted: -1}});
  }
});

Template.gameOwnCards.created = function(){
  Meteor.call('handsCreateWhite', gameId, function(error, result) {
    // display the error to the user and abort
    if (error)
      return throwError(error.reason); 
  });
};

Template.gameOwnCards.helpers({
  ownCards: function() {
    player = Session.get('playerName');
    return Hands.find({cardIsBlack: false, gameId: gameId, active: true, playerName: player}, {sort: {order: 1}, limit:6});
  }
});