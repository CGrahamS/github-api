var User = require('./../js/user.js').userModule;

var displayUserInfo = function(username, profilePic, name, repositories) {
  $('#profile-pic').empty();
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" class="animated bounceIn"/>');
  $('.username').text(username);
  $('#name').text(name);
  $('#repositories').empty();
  for(repository of repositories) {
    if (repository.description !== null) {
      $('#repositories').append('<a href='+repository.html_url+'><li><h4 class="repo-name label label-primary">' + repository.name + '</h4></a> <br>' + repository.description + ' <br> Language: ' + repository.language + '</li>');
    } else {
      $('#repositories').append('<a href='+repository.html_url+'><li><h4 class="repo-name label label-primary">' + repository.name + '</h4></a> <br> No Description <br> Language: ' + repository.language + '</li>');
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
