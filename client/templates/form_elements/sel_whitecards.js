Template.editWhiteCardNum.helpers({  
  editWhiteCardNumList: function(){
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    whiteCardNum = range(0,4);
    //whiteCardNum = UI._globalHelpers('range')(1, 4);
    whiteCardNumItem = [];
    checkCurrent = Cards.findOne({_id: this._id}).cardNeededWhite;
    whiteCardNumItem = [];
    whiteCardNum.forEach(function(wc){
      if(wc == checkCurrent){
        whiteCardNumItem += ['<option value="' + wc + '" selected>' + wc + '</option>'];  
      } else {
        whiteCardNumItem += ['<option value="' + wc + '">' + wc + '</option>'];
      } 
    }); 
    return whiteCardNumItem;
  }
});

Template.listWhiteCardNum.helpers({  
  listWhiteCardNumList: function(){ 
    function range(start, end) {
      var foo = [];
      for (var i = start; i <= end; i++) {
        foo.push(i);
      }
      return foo;
    }
    whiteCardNum = range(0,4);   
    //whiteCardNum = UI._globalHelpers('range')(1, 4);
    whiteCardNumItem = [];
    whiteCardNum.forEach(function(wc){
      whiteCardNumItem += ['<option value="' + wc + '">' + wc + '</option>'];
    }); 
    return whiteCardNumItem;
  }
});