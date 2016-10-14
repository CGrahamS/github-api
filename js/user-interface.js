var User = require('./../js/user.js').userModule;
var getRepos = require('./../js/user.js').getRepos;

var displayUserInfo = function(userName, profilePic, name, repositories) {
  $('.username').text(userName);
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" />')
  $('#name').text(name);
  for(repository of repositories) {
    $('#repositories').append('<li>' + repository.name + ', ' + repository.language + '</li>');
  }
}

$(document).ready(function(){
  $("#getName").click(function(){
    var username = $("#username").val();
    getRepos(username, displayUserInfo);
  });
});
