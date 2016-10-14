var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    $('.username').text(response.login);
    $('#profile-pic').append('<img src="'+ response.avatar_url + '" alt="' + response.name + ', profile picture" />')
    $('#name').text(response.name);
    $.get(response.repos_url).then(function(repositories){
      for(repository of repositories) {
        $('#repositories').append('<li>' + repository.name + ', ' + repository.language + '</li>');
      }
      console.log(response);
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
