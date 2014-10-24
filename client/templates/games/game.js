Template.gameSingle.events({
  'click .begin': function(e) {
    e.preventDefault();        
    console.log('click begin');
  },  
  'click .leave': function(e) {
    e.preventDefault();
    gameId = this._id;
    playerName = Meteor.user().username; 
    Games.update(gameId, {$pullAll: {playerList: [playerName]}, $set: {changed: new Date().getTime()}, $inc: {playersIn: -1}});   
    console.log('Player ' + playerName + ' ausgetragen'); // debug
    console.log('click leave');    
    Router.go('home');
  }  
});

Template.gameSingle.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
  checkPassword: function() {    
    if (this.gamePass)
      return true;
  },
  debug: function() {
    return 'userID: ' + Meteor.userId() + ' / gameID: ' + this._id;  
  }
});

Template.gameSingleItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
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

Template.gameSingle.created = function(){
  gameId = Session.get("gameId");
  gamePass = Session.get("gamePass");
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
};

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
  }, 
});
  
Template.gameSingleEdit.rendered = function() {
  this.findAll;
  var currentGameId = this._id;
  var scoreMax = this.scoreMax;
  $("#scoreMax").find("option").each(function () {
    if ($(this).val() == scoreMax) {
      $(this).prop("selected", "selected");
    }
  });
  //console.log(scoreMax + ' / ' + + currentGameId);
};

Template.gameSingleEdit.helpers({
  isSelected: function(){    
  }
});