Template.addNewBlackCards.events({
  'keyup #cardText': function(e) {
    if(e.which == 13){
      // do nothing   
    } else {
      var cardTextElement = document.getElementById('cardText');
      Session.set('preview', cardTextElement.value);
    }
  },
  'submit form': function(e) {
    e.preventDefault();
    
    var cardOwner = Meteor.userId();
    var cardOwnerName = Meteor.user().username; 
      
    var cardOnHold = {
      cardText: $(e.target).find('[name=cardText]').val(),
      cardIsBlack: true,  
      cardOwner: cardOwner,
      cardOwnerName: cardOwnerName,
      submitted: new Date().getTime()
    };
    
    Meteor.call('newCardOnHold', cardOnHold, function(error, result){
      if (error)
        return throwError(error.reason);
    });
    throwInfo('Vielen Dank für die Einreichung einer schwarzen Karte');
    Router.go('home');
  }
});

Template.addNewBlackCards.created = function(){ 
  Session.set('preview', '');  
};

Template.addNewBlackCards.destroyed = function(){
  Session.set('preview', '');  
};

Template.addNewWhiteCards.events({
  'keyup #cardText': function(e) {
    if(e.which == 13){
      // do nothing   
    } else {
      var cardTextElement = document.getElementById('cardText');
      Session.set('preview', cardTextElement.value);
    }
  },
  'submit form': function(e) {
    e.preventDefault();
    
    var cardOwner = Meteor.userId();
    var cardOwnerName = Meteor.user().username; 
      
    var cardOnHold = {
      cardText: $(e.target).find('[name=cardText]').val(),
      cardIsBlack: false,  
      cardOwner: cardOwner,
      cardOwnerName: cardOwnerName,
      submitted: new Date().getTime()
    };
    
    Meteor.call('newCardOnHold', cardOnHold, function(error, result){
      if (error)
        return throwError(error.reason);
    });
    throwInfo('Vielen Dank für die Einreichung einer weißen Karte');
    Router.go('home');
  }
});

Template.addNewWhiteCards.created = function(){ 
  Session.set('preview', '');  
};

Template.addNewWhiteCards.destroyed = function(){
  Session.set('preview', '');  
};


Template.showPreview.helpers({
  cardTextPreview: function() {
    var preview = Session.get('preview');
    return preview; 
  }
});