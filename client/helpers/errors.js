// Local (client-only) collection
Errors = new Mongo.Collection(null);
Infos = new Mongo.Collection(null);

throwError = function(message) {
  Errors.insert({message: message})
}

throwInfo = function(message) {
  Infos.insert({message: message})
}