Games = new Mongo.Collection('games');

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

    var game = _.extend(_.pick(gameAttributes, 'gameTitle', 'scoreMax', 'playersMax', 'spectatorsMax', 'gamePass', 'decks'), {
      userId: user._id,
      gameMaster: user.username,
      submitted: new Date().getTime()
    });
      
    var gameId = Games.insert(game);

    return gameId;
  }
});