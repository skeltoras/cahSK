Template.editDecks.helpers({  
  editDeckList: function(){
    decksList = Decks.find().fetch(); 
    checkCurrent = Games.findOne({_id: this._id}).decks;
    decksItem = [];
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
    decksList.forEach(function(deck){
      if(isInArray(deck.deckTitle, checkCurrent)){
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckTitle + '" name="decks" checked="checked" />' + deck.deckTitle + '</label>'];  
      } else {
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckTitle + '" name="decks"/>' + deck.deckTitle + '</label>'];
      } 
    }); 
    return decksItem;
  }
});

Template.listDecks.helpers({  
  listDeckList: function(){
    decksList = Decks.find().fetch(); 
    decksItem = [];
    decksList.forEach(function(deck){
      decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckTitle + '" name="decks"/>' + deck.deckTitle + '</label>']; 
    }); 
    return decksItem;
  }
});