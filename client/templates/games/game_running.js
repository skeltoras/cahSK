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

Template.gameRunningPlayerlist.helpers({
  players: function(){
    gameID = this._id;
    gameMaster = this.gameMaster; 
    
    playerList = Games.findOne({_id: gameID}).playerList;
    player = [];

    playerList.forEach(function(game){
      player += [game + '<br>'];
    });
    return player;     
  }
});

Template.gameBlackCards.helpers({
  cards: function() {
    var cardDecks = Games.findOne({_id: this._id}).decks;
    var currentBcStack = [];
    cardDecks.forEach(function(card){
      currentBcStack += Cards.find({cardIsBlack: true, cardDeck: {$in: [card]}});
    });
    
    console.log(currentBcStack);
    return currentBcStack;
  }
});

Template.gameWhiteCards.helpers({
  cards: function() {
    return Cards.find({cardIsBlack: false}, {sort: {submitted: -1}});
  }
});

