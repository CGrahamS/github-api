var getUserInfo = require('./../js/user.js').getUserInfo;

var displayUserInfo = function(username, profilePic, name, repositories) {
  $('.output').empty();
  $('.output').append('<div id="profile-pic"></div>')
  $('#profile-pic').append('<img src="'+ profilePic + '" alt="' + name + ', profile picture" class="animated fadeIn"/>');
  $('#profile-pic').after('<h3 class="animated fadeInLeftBig" id="username-display">' + username + '</h3>');
  $('#username-display').after('<h4 class="animated fadeInRightBig" id="name-display">' + name + '</h4>');
  $('#name-display').after('<ul id="repositories"></ul>');
  for(repository of repositories) {
    $('#repositories').append('<div id="repository'+repositories.indexOf(repository)+'" class="repository"><ul></ul></div>')
    $('#repository'+repositories.indexOf(repository)+' ul').append('<li class="repo-name animated fadeInUpBig"><a href='+repository.html_url+'><h4 class="label">' + repository.name + '</h4></a></li>');
      if (repository.description !== null) {
        $('#repository'+repositories.indexOf(repository)+' ul').append('<li class="repo-description animated fadeInUpBig">' + repository.description + '</li>');
      } else {
      $('#repository'+repositories.indexOf(repository)+' ul').append('<li class="repo-description animated fadeInUpBig"> No Description </li>');
      }
    $('#repository'+repositories.indexOf(repository)+' ul').append('<li class="animated fadeInUpBig"> Language: ' + repository.language + '</li>');
  }
}

$(function(){
  $("#form form").submit(function(event) {
    event.preventDefault();
    var username = $("#username").val();
    getUserInfo(username, displayUserInfo);
  });
});
