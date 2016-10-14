var apiKey = require('./../.env').apiKey;

User = function(name) {
  this.name = name
}

User.prototype.getName = function () {
  return this.name
};

exports.userModule = User;
