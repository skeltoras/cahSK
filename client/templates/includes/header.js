Template.header.helpers({
  checkAdmin: function() {
    if (Meteor.user() && Meteor.user().username === 'Schkeldi') {
      Session.set('isAdmin', true);
      return true;
    }
  }
});