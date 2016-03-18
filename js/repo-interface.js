var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/repo.js').getRepos;

$(document).ready(function(){
  $('#repos').click(function(){
    var username = $('#username').val();
    $('#username').val("");
    $('.user').text(username);
    getRepos(username);



  });
});
