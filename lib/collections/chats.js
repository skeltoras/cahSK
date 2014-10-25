Chats = new Mongo.Collection('chats');

Chats.allow({
  insert: function(){return true;}
});