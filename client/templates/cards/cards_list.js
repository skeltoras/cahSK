Template.cardsList.helpers({
  cards: function() {
    return Cards.find({}, {sort: {submitted: -1}});
  }
});

Template.cardItem.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },  
  isBlack: function() {
    if(this.cardIsBlack){
      return "panel-black";
    } else {
      return "panel-default";
    }
  }
});