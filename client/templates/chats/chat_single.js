Template.chatSingleForm.events({
  'keypress #chatText': function(e) {
    e.preventDefault();
    if(e.which === 13){
      console.log('Enter is called');
    } else {
      console.log('not Enter!');
    }
  }    
});