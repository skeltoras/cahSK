Template.editPlayersMax.helpers({  
  editPlayerMaxList: function(){
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

Template.listPlayersMax.helpers({  
  listPlayerMaxList: function(){
    
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    
    playersMax = range(3,20); 
    playersMaxItem = [];
    playersMax.forEach(function(player){
      playersMaxItem += ['<option value="' + player + '">' + player + '</option>']; 
    }); 
    return playersMaxItem;
  }
});