Template.gameSingle.events({
  'click .begin': function(e) {
    e.preventDefault();        
    console.log('click begin');
  },  
  'click .leave': function(e) {
    e.preventDefault();    
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

Template.gameSingle.created = function(){
  console.log('created ');
  gameId = Session.get("gameId");
  gamePass = Session.get("gamePass");
  if (gamePass) {
    var modalId = "#passModal_" + gameId;
    return $(modalId).modal('show');       
  }      
};

Template.gameSingle.destroyed = function(){
  console.log('destroyed ');   
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
  console.log(scoreMax + ' / ' + + currentGameId);
};

Template.gameSingleEdit.helpers({
  isSelected: function(){    
  }
});