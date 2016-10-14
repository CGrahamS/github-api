var User = require('./../js/user.js').userModule;

var displayUserInfo = function(username, profilePic, name, repositories) {
  $('.username').text(username);
  $('#profile-pic').empty();
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" />')
  $('#name').text(name);
  $('#repositories').empty();
  for(repository of repositories) {
    if (repository.description !== null) {
      $('#repositories').append('<li><h4 class="repo-name label label-primary">' + repository.name + '</h4> <br>' + repository.description + ', languages: ' + repository.language + '</li>');
    } else {
      $('#repositories').append('<li><h4 class="repo-name label label-primary">' + repository.name + '</h4> <br> No Description, languages: ' + repository.language + '</li>');
    }
  }
}

$(document).ready(function(){
  $("#get-info").click(function(){
    var username = $("#username").val();
    var user = new User(username);
    user.getUserInfo(username, displayUserInfo);
  });
});
