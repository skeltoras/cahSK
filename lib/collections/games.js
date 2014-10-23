Games = new Mongo.Collection('games');

Games.allow({
  update: function(){return true;}
});

Meteor.methods({
  game: function(gameAttributes) {
    var user = Meteor.user(),
      gameWithSameTitle = Games.findOne({gameTitle: gameAttributes.gameTitle});

    if (!user)
      throw new Meteor.Error(401, "You need to login to create new games");

    if (!gameAttributes.gameTitle)
      throw new Meteor.Error(422, "Please fill in a title");
      
    if (gameAttributes.gameTitle && gameWithSameTitle) {
      throw new Meteor.Error(302,
        "This link has already been posted",
        gameWithSameTitle._id);
    }

    var game = _.extend(_.pick(gameAttributes, 'gameTitle', 'scoreMax', 'playersIn', 'playersMax', 'spectatorsIn', 'spectatorsMax', 'gamePass', 'decks', 'playerList'), {
      userId: user._id,
      gameMaster: user.username,
      submitted: new Date().getTime(),
      changed: new Date().getTime()
    });
      
    var gameId = Games.insert(game);

    return gameId;
  },
  playerAdd: function(gameAttributes) {
    var user = gameAttributes.player;
    var gameId = gameAttributes.currentGameId;
    
    console.log('playerAdd[1]: ' + user + ' / ' + gameId);
    
    if (!gameAttributes.player)
      throw new Meteor.Error(422, "Please login first");
    
    var game = _.extend(_.pick(gameAttributes, 'player'), {
      playerList: user
    }); 
    
    console.log('playerAdd[2]: ' + playerList + ' / ');
    
    Cards.update(gameId, {$set: game}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        //Router.go('cardPage', {_id: currentCardId});
      }
    });

    return gameId;
    
    console.log('playerAdd[3]: ' + gameId); 
  }
});