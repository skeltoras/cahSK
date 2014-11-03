Meteor.startup(function () {
  if(Meteor.isClient) {
    // Session vars @since 0.5.1
    Session.setDefault('playerId', null);
    Session.setDefault('playerName', null);
    Session.setDefault('isAdmin', false);
    Session.setDefault('gameId', null);
    Session.setDefault('gamePass', null);
    Session.setDefault('gamePassChecked', false);
    Session.setDefault('inGame', false);
    Session.setDefault('gameStatus', null);
    Session.setDefault('isHost', false);
    Session.setDefault('isCardCzar', false);
    Session.setDefault('playerScore', 0);
    console.log('Willkommen bei CAH - SK');  
  }
});