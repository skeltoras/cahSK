Template.gameSingle.events({
  //button 'begin' to run the game @since 0.4.5
  'click .begin': function(e) {
    e.preventDefault(); 
    var gameId = this._id;       
    var gameStatus = Session.set("gameStatus", "running");
    Router.go('gameRunning', {_id: gameId});
    Games.update(gameId, {$set: {gameStatus: 'laufend'}});
  },  
  //button 'leave' to return to gameslist @since 0.3.7
  'click .leave': function(e) {
    e.preventDefault();
    var gameId = this._id;
    var playerId = Session.get('playerId');
    var playerName = Session.get('playerName');
    //playerName = Meteor.user().username; 
    Games.update(gameId, {$pullAll: {playerList: [playerName], playerIdList: [playerId]}, $set: {changed: new Date().getTime()}, $inc: {playersIn: -1}});    
    Router.go('home');
  }  
});

Template.gameSingle.helpers({
  // check if game has password @since 0.3.6
  checkPassword: function() {    
    var passCheck = Session.get('gamePassChecked');
    if (this.gamePass && passCheck == false)
      return true;
  },
  // debug function @since 0.2.1
  debug: function() {
    return 'userID: ' + Meteor.userId() + ' / gameID: ' + this._id;  
  }
});

Template.gameSingle.created = function(){
  var gameId = Session.get('gameId');
  var gamePass = Session.get('gamePass');
  var playerName = Session.get('playerName');
  var gameStatus = Session.get('gameStatus');
  
  // check if game is running @since 0.4.6
  if(gameStatus == 'running') {
    Router.go('gameRunning', {_id: gameId});
  }  
  // Player announce in chat
  var chatAnnounceText = playerName + ' hat den Chat betreten';
  var chat = {
    chatAnnounce: true,
    chatAnnounceText: chatAnnounceText,
    gameId: gameId,
    playerName: playerName,
    submitted: new Date().getTime()      
  };
  Chats.insert(chat);
  // render password form field @since 0.3.6
  if (gamePass) {
    var modalId = "#passModal_" + gameId;
    return $(modalId).modal('show');       
  }    
};

Template.gameSingle.destroyed = function(){
  var gameId = Session.get('gameId');
  var playerId = Session.get('playerId');
  var playerName = Session.get('playerName');
  var gameStatus = Session.get('gameStatus');
  
  // check if game is running @since 0.4.6
  if(gameStatus == 'running') {
    // leave player in playerlist, to save his score
  } else {
    // delete player from playerlist and game
    if (Games.find({_id: gameId, playerList: playerName}).count() === 1) {
      Games.update(gameId, {$pullAll: {playerList: [playerName], playerIdList: [playerId]}, $set: {changed: new Date().getTime()}, $inc: {playersIn: -1}});    
    }
    // Player announce in chat
    var chatAnnounceText = playerName + ' hat den Chat verlassen';
    var chat = {
      chatAnnounce: true,
      chatAnnounceText: chatAnnounceText,
      gameId: gameId,
      playerName: playerName,
      submitted: new Date().getTime()      
    };
    Chats.insert(chat);
  }  
};

Template.gameSingleItem.helpers({
  // check if games-owner @since 0.4.3
  ownPost: function() {
    if(this.userId == Meteor.userId()){
      Session.set('isHost', true);
      return true;
    }    
  },
  // check if games-owner & players min 3 @since 0.4.3
  canStart: function() {
    if(this.playersIn > 2){
      return this.userId == Meteor.userId();
    }    
  }
});

Template.gameSinglePlayerlist.helpers({
  players: function(){
    gameID = this._id;
    gameMaster = this.gameMaster; 
    
    playerList = Games.findOne({_id: gameID}).playerList;
    player = [];

    playerList.forEach(function(game){
      if(game == gameMaster){
         player += ['<i>' + game + ' (Host)</i><br>'];
      } else {
        player += [game + '<br>'];
      }
    });
    return player;     
  }
});

Template.gameSingleModal.events({
  //check for correct password @since 0.3.0
  'submit form': function(e) {
    e.preventDefault();
    
    var currentGameId = $(e.target).find('[name=gameID]').val();
    var checkPass = $(e.target).find('[name=gamePassCheck]').val();
    
    if(this.gamePass == checkPass) {
      Session.set('gamePassChecked', true);
      $('#passModal_' + currentGameId).removeClass( "show" ).addClass( "hide" );
    } else {
      throwError('Wrong Password. Try again!');
      $('#passModal').modal('hide');
      Router.go('home');       
    }
  } 
});

Template.gameSingleEdit.events({
  // save edit in game collection @since 0.3.0
  'submit form': function(e) {
    e.preventDefault();

    var userName = Meteor.user().username; 
    var gameId = this._id;
    
    var decks = [];
    $('input[name=decks]:checked').each(function() {
      decks.push($(this).val());
    });
    
    var game = {
      gameTitle: $(e.target).find('[name=gameTitle]').val(),
      scoreMax: $(e.target).find('[name=scoreMax]').val(),
      playersMax: $(e.target).find('[name=playersMax]').val(),
      spectatorsMax: $(e.target).find('[name=spectatorsMax]').val(),
      gamePass: $(e.target).find('[name=gamePass]').val(),
      decks: decks,
      updated: new Date().getTime()
    };
    
    if(userName == this.gameMaster) {
      Games.update(gameId, {$set: game}, function(error) {
        if (error) {
          // display the error to the user
          alert(error.reason);
        }
      });
    }
  },
  'change #showPassword': function(e) {
    e.preventDefault();
    if($(e.target).is(':checked')) {
      document.getElementById("gamePass").attributes["type"].value = "text";
    } else {
      document.getElementById("gamePass").attributes["type"].value = "password";      
    } 
  } 
});