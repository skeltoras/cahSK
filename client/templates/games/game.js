Template.gameSingle.events({
  'click .begin': function(e) {
    e.preventDefault();        
    console.log('click begin');
  },  
  //button 'leave' to return to gameslist @since 0.3.7
  'click .leave': function(e) {
    e.preventDefault();
    gameId = this._id;
    playerName = Meteor.user().username; 
    Games.update(gameId, {$pullAll: {playerList: [playerName]}, $set: {changed: new Date().getTime()}, $inc: {playersIn: -1}});   
    console.log('Player ' + playerName + ' ausgetragen'); // debug    
    Router.go('home');
  }  
});

Template.gameSingle.helpers({
  // check if game has password @since 0.3.6
  checkPassword: function() {    
    if (this.gamePass)
      return true;
  },
  // debug function @since 0.2.1
  debug: function() {
    return 'userID: ' + Meteor.userId() + ' / gameID: ' + this._id;  
  }
});

Template.gameSingle.created = function(){
  gameId = Session.get("gameId");
  gamePass = Session.get("gamePass");
  playerName = Session.get("playerName");
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
  gameId = Session.get("gameId");
  playerName = Session.get("playerName");
  if (Games.find({_id: gameId, playerList: playerName}).count() === 1) {
    Games.update(gameId, {$pullAll: {playerList: [playerName]}, $set: {changed: new Date().getTime()}, $inc: {playersIn: -1}});   
    console.log('Player ' + playerName + ' ausgetragen'); // debug  
  } else {
    console.log('Player ' + playerName + ' schon ausgetragen'); // debug
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
};

Template.gameSingleItem.helpers({
  // check if games-owner @since 0.4.3
  ownPost: function() {
    return this.userId == Meteor.userId();    
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
         player += ['<strong>' + game + ' (Host)</strong><br>'];
      } else {
        player += [game + '<br>'];
      }
    });
    return player;     
  }
});

Template.gameSingleModal.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentGameId = $(e.target).find('[name=gameID]').val();
    var checkPass = $(e.target).find('[name=gamePassCheck]').val();
    
    if(this.gamePass == checkPass) {
      $('#passModal_' + currentGameId).removeClass( "show" ).addClass( "hide" );
      console.log('hide');
    } else {
      throwError('Wrong Password. Try again!');
      $('#passModal').modal('hide');
      Router.go('home');       
    }
  } 
});

Template.gameSingleEdit.events({
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
        } else {
          console.log('Spiel ' + gameTitle + ' aktualisiert'); // debug 
        }
      });
    } else {
      console.log('Error: ' + userName + ' ist nicht berechtigt!');
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
  
Template.gameSingleEdit.rendered = function() {
};

Template.gameSingleEdit.helpers({
});