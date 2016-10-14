var User = require('./../js/user.js').userModule;

$(document).ready(function(){
  $("#getName").click(function(){
    var name = $("#name").val();
    var newUser = new User(name);
    $("#output-name").text(newUser.getName());
  });
});
