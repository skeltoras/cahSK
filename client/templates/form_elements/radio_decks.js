// for decks
Template.editDecksRadio.helpers({  
  editDeckList: function(){
    decksList = Decks.find().fetch(); 
    checkCurrent = Cards.findOne({_id: this._id}).decks;
    decksItem = [];
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
    decksList.forEach(function(deck){
      if(isInArray(deck.deckTitle, checkCurrent)){
        decksItem += ['<label for="' + deck._id + '" class="radio-inline" checked="checked"><input id="' + deck._id + '" type="radio" value="' + deck.deckTitle + '" name="decksRadio"/>' + deck.deckTitle + '</label>']; 
      } else {
        decksItem += ['<label for="' + deck._id + '" class="radio-inline"><input id="' + deck._id + '" type="radio" value="' + deck.deckTitle + '" name="decksRadio"/>' + deck.deckTitle + '</label>']; 
      } 
    }); 
    return decksItem;
  }
});

Template.listDecksRadio.helpers({  
  listDeckList: function(){
    decksList = Decks.find().fetch(); 
    decksItem = [];
    decksList.forEach(function(deck){
      decksItem += ['<label for="' + deck._id + '" class="radio-inline"><input id="' + deck._id + '" type="radio" value="' + deck.deckTitle + '" name="decksRadio"/>' + deck.deckTitle + '</label>']; 
    }); 
    return decksItem;
  }
});