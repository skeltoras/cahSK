Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [Meteor.subscribe('games'), Meteor.subscribe('decks')];
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
    pause();
  }
}

Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', {only: 'gameSingle'});
Router.onBeforeAction(requireLogin, {only: ['gamesNew', 'gameSingle']});