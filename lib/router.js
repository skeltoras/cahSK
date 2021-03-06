Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('games'), Meteor.subscribe('decks'), Meteor.subscribe('cards')];
  }
});

Router.map(function() {
  // home path
  this.route('home', {
    path: '/',
    template: 'gamesHome'
  });
   
  // game path  
  this.route('gamesNew', {
    path: '/games/new'
  });
  this.route('gameSingle', {
    path: '/game/:_id',
    data: function() { return Games.findOne(this.params._id); }
  });
  this.route('gameEdit', {
    path: '/game/:_id/edit',
    data: function() { return Games.findOne(this.params._id); }  
  });
  this.route('gameRunning', {
    path: '/game/:_id/running',
    data: function() { return Games.findOne(this.params._id); }  
  });
  
  // card path
  this.route('cardsList', {
    path: '/cards'
  });
  this.route('cardsNew', {
    path: '/cards/new'
  });
  this.route('cardEdit', {
    path: '/card/:_id/edit',
    data: function() { return Cards.findOne(this.params._id); }
  });
  
  // cardOnHold path
  this.route('listNewCards', {
    path: '/cardSubmit'
  });
  this.route('addNewWhiteCards', {
    path: '/cardSubmit/white/new'
  });
  this.route('addNewBlackCards', {
    path: '/cardSubmit/black/new'
  });
  this.route('editNewCards', {
    path: '/cardSubmit/:_id/submit',
    data: function() { return CardsOnHold.findOne(this.params._id); }
  });
  
  // deck path
  this.route('decksList', {
    path: '/decks'
  });
  this.route('decksNew', {
    path: '/decks/new'
  });
  this.route('deckSingle', {
    path: '/deck/:_id',
    template: 'deckPage',
    data: function() { return Decks.findOne(this.params._id); }
  });
  this.route('deckEdit', {
    path: '/deck/:_id/edit',
    data: function() { return Decks.findOne(this.params._id); }
  });
  
  this.route('roadmap', {
    path: '/roadmap',
    data: function() { return Cards.findOne(this.params._id); }
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', {only: 'gameSingle'});
Router.onBeforeAction(requireLogin, {only: ['gamesNew', 'gameSingle']});