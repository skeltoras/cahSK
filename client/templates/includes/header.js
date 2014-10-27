Template.header.helpers({
  checkAdmin: function() {
    if (Meteor.user() && Meteor.user().username === 'Schkeldi') {
      return true;
    }
  }
});