Template.checkDecks.helpers({  
  decksSel: function(){
    decksList = Decks.find().fetch(); 
    checkCurrent = Games.findOne({_id: this._id}).decks;
    decksItem = [];
    function isInArray(value, array) {
      return array.indexOf(value) > -1;
    }
    decksList.forEach(function(deck){
      if(isInArray(deck.deckText, checkCurrent)){
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckText + '" name="decks" checked="checked" />' + deck.deckText + '</label>'];  
      } else {
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckText + '" name="decks"/>' + deck.deckText + '</label>'];
      } 
    }); 
    return decksItem;
  }
});