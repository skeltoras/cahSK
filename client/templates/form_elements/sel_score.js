Template.editScoreMax.helpers({  
  editScoreMaxList: function(){
    
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }    
    scores = range(4,20);
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

Template.listScoreMax.helpers({  
  listScoreMaxList: function(){
    
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }    
    scores = range(4,20);
    scoreItem = [];
    scores.forEach(function(score){
      scoreItem += ['<option value="' + score + '">' + score + '</option>']; 
    }); 
    return scoreItem;
  }
});