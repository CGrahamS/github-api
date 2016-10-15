var getUserInfo = require('./../js/user.js').getUserInfo;

var displayUserInfo = function(username, profilePic, name, repositories) {
  $('.output').empty();
  $('.output').append('<div id="profile-pic"></div>')
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" class="animated fadeIn"/>');
  $('#profile-pic').after('<h3 class="animated fadeInLeftBig" id="username-display">' + username + '</h3>');
  $('#username-display').after('<h4 class="animated fadeInLeftBig" id="name-display">' + name + '</h4>');
  $('#name-display').after('<ul id="repositories"></ul>');
  for(repository of repositories) {
    if (repository.description !== null) { //could not think of a way out of this conditional statement
      $('#repositories').append('<a href='+repository.html_url+'><li class="animated fadeInRightBig"><h4 class="repo-name label label-primary">' + repository.name + '</h4></a> <br>' + repository.description + ' <br> Language: ' + repository.language + '</li>');
    } else {
      $('#repositories').append('<a href='+repository.html_url+'><li class="animated fadeInRightBig"><h4 class="repo-name label label-primary">' + repository.name + '</h4></a> <br> No Description <br> Language: ' + repository.language + '</li>');
    }
  }
}

$(function(){
  $("#form form").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    getUserInfo(username, displayUserInfo);
  });
});
