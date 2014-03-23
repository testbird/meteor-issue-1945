// Local (client-only) collection
Errors = new Meteor.Collection(null);

insertClientError = function(message) {
  Errors.insert({message: message, seen: false})
}

clearClientErrors = function() {
  Errors.remove({seen: true});
}