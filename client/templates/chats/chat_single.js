Template.chatSingleForm.events({
  'keypress #chatText': function(e) {
    //e.preventDefault();
    if(e.which == 13){
      var gameId = this._id;
      var playerId = Meteor.userId();
      var playerName = Meteor.user().username; 
      var chatText = document.getElementById('chatText');
      
      var chat = {
        chatText: chatText.value,
        gameId: gameId,
        playerId: playerId,
        playerName: playerName,
        submitted: new Date().getTime(),
        time: Date.now()
      };
      
      if(chatText.value != ''){
        Chats.insert(chat);
        document.getElementById('chatText').value = "";
        //$(e.target).find('[name=chatText]').val().reset();
      }     
    }
  }    
});

Template.chatSingleItem.helpers({
  // list of all chats for this game sorted by submit-date @since 0.4.1
  chats: function() {
    return Chats.find({gameId: this._id}, {sort: {submitted: -1}});
  }
});