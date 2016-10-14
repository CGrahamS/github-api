var User = require('./../js/user.js').userModule;
var getRepos = require('./../js/user.js').getRepos;


$(document).ready(function(){
  $("#getName").click(function(){
    var username = $("#username").val();
    getRepos(username);
  });
});
