Template.cardItemOld.helpers({
  ownPost: function() {
    return this.userId == Meteor.userId();
  },
});
