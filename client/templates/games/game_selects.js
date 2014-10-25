Template.selectScoreMax.helpers({  
  scoreMaxSel: function(){
    scores = [
      '4',
      '8',
      '12',
      '16',
      '20'
    ]; 
    checkCurrent = Games.findOne({_id: this._id}).scoreMax;
    scoreItem = [];
    scores.forEach(function(score){
      if(score == checkCurrent){
        scoreItem += ['<option value="' + score + '" selected>' + score + '</option>'];  
      } else {
        scoreItem += ['<option value="' + score + '">' + score + '</option>'];
      } 
    }); 
    return scoreItem;
  }
});

Template.selectPlayersMax.helpers({  
  playersMaxSel: function(){
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    playersMax = range(3,20); 
    checkCurrent = Games.findOne({_id: this._id}).playersMax;
    playersMaxItem = [];
    playersMax.forEach(function(player){
      if(player == checkCurrent){
        playersMaxItem += ['<option value="' + player + '" selected>' + player + '</option>'];  
      } else {
        playersMaxItem += ['<option value="' + player + '">' + player + '</option>'];
      } 
    }); 
    return playersMaxItem;
  }
});

Template.selectSpectatorsMax.helpers({  
  spectatorsMaxSel: function(){
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    spectatorsMax = range(0,10); 
    checkCurrent = Games.findOne({_id: this._id}).spectatorsMax;
    spectatorsMaxItem = [];
    spectatorsMax.forEach(function(spec){
      if(spec == checkCurrent){
        spectatorsMaxItem += ['<option value="' + spec + '" selected>' + spec + '</option>'];  
      } else {
        spectatorsMaxItem += ['<option value="' + spec + '">' + spec + '</option>'];
      } 
    }); 
    return spectatorsMaxItem;
  }
});

Template.checkDecks.helpers({  
  decksSel: function(){
    decksList = Decks.find().fetch(); 
    checkCurrent = Games.findOne({_id: this._id}).decks;
    decksItem = [];
    decksList.forEach(function(deck){
      if(deck.deckText == checkCurrent){
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckText + '" name="decks" checked="checked" />' + deck.deckText + '</label>'];  
      } else {
        decksItem += ['<label for="' + deck._id + '" class="checkbox-inline"><input id="' + deck._id + '" type="checkbox" value="' + deck.deckText + '" name="decks"/>' + deck.deckText + '</label>'];
      } 
    }); 
    return decksItem;
  }
});