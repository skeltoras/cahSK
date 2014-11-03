Players = new Mongo.Collection('players');

Meteor.methods({
  playersList: function(gameId) {
    playerList = Games.findOne({_id: gameId}).playerList;
    player = [];

    playerList.forEach(function(player){
      //playerData = Meteor.users.findOne({_id: player}).username;
      //playerId = playerData._id; 
      var playerProperties = { 
        gameId: gameId,
        playerName: player,
        isCardCzar: false,
        score: 0  
      }
      
      if(Players.findOne({playerName: player, gameId: gameId})){
        console.log('vorhanden'); //debug  
      } else {
        Players.insert(playerProperties);
        console.log('eingetragen'); //debug
      }  
    });
  }
});