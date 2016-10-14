var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $.get(response.repos_url).then(function(repositories){
      displayFunction(response.login, response.avatar_url, response.name, repositories);
      console.log(repositories);
    }).fail(function(error){
      $('#repositories').append('<li>' + error.responseJSON.message + '</li>');
    });
  }).fail(function(error){
    $('.username').text(error.responseJSON.message);
  });
};

User = function(name) {
  this.name = name
}

User.prototype.getName = function () {
  return this.name
};

exports.userModule = User;
