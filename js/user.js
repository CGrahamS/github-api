var apiKey = require('./../.env').apiKey;

User = function(username) {
  this.username = username;
}

User.prototype.getUserInfo = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    $.get(response.repos_url).then(function(repositories){
      displayFunction(response.login, response.avatar_url, response.name, repositories);
    }).fail(function(error){
      $('#repositories').append('<li>' + error.responseJSON.message + '</li>');
    });
  }).fail(function(error){
    $('.username').text(error.responseJSON.message);
  });
};

exports.userModule = User;
