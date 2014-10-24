Template.cardSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var card = {
      cardTitle: $(e.target).find('[name=cardTitle]').val(),
      cardStatus: 'open',
      playersIn: '0',
      playersMax: $(e.target).find('[name=playersMax]').val()
    }

    Meteor.call('card', card, function(error, id) {
      if (error)
        return alert(error.reason);

      Router.go('cardsList');
    });
  }
});
Template.cardSubmit.rendered = function(){
  $('.make-switch').bootstrapSwitch();
};
