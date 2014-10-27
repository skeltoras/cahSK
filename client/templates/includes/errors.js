Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});

Template.error.rendered = function() {
  var error = this.data;
  Meteor.setTimeout(function () {
    Errors.remove(error._id);
  }, 3000);
};

Template.infos.helpers({
  infos: function() {
    return Infos.find();
  }
});

Template.info.rendered = function() {
  var info = this.data;
  Meteor.setTimeout(function () {
    Infos.remove(info._id);
  }, 3000);
};