Template.editSpectatorsMax.helpers({  
  editSpectatorMaxList: function(){
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

Template.listSpectatorsMax.helpers({  
  listSpectatorMaxList: function(){
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    spectatorsMax = range(0,10); 
    spectatorsMaxItem = [];
    spectatorsMax.forEach(function(spec){
      spectatorsMaxItem += ['<option value="' + spec + '">' + spec + '</option>'];
    }); 
    return spectatorsMaxItem;
  }
});