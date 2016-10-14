var User = require('./../js/user.js').userModule;

var displayUserInfo = function(username, profilePic, name, repositories) {
  $('.username').text(username);
  $('#profile-pic').empty();
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" />')
  $('#name').text(name);
  for(repository of repositories) {
    $('#repositories').append('<li>' + repository.name + ', ' + repository.language + '</li>');
  }
}

$(document).ready(function(){
  $("#get-info").click(function(){
    var username = $("#username").val();
    var user = new User(username);
    user.getUserInfo(username, displayUserInfo);
  });
});
