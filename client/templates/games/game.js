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
    hasPassword = false;
    if (this.gamePass) {
      hasPassword = true;  
    }
    return hasPassword;
  },
  debug: function() {
    return 'userID: ' + Meteor.userId() + ' / gameID: ' + this._id;  
  }
});

Template.gameSingleModal.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var currentGameId = $(e.target).find('[name=gameID]').val();
    var checkPass = $(e.target).find('[name=gamePassCheck]').val();
    
    if(this.gamePass == checkPass) {
      $('#passModal_' + currentGameId).modal('hide');
      //setTimeout(function() {
      //  Router.go('gameSingle', {_id: currentGameId});
      //}, 1000);
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