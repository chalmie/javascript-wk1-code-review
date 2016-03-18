// var apiKey = require('./../.env').apiKey;
//
//
// exports.getRepos = function(username){
//   $.get('https://api.github.com/users/' + username +'/repos?access_token=' + apiKey).then(function(response) {
//     i = 0;
//     while (i < response.length) {
//       if(response[i].description === "") {
//         $('.show-repos').append('<p>' + response[i].name + ' - ' + '[description not provided]' + '</p>');
//       } else {
//         $('.show-repos').append('<p>' + response[i].name + ' - ' + response[i].description + '</p>');
//       }
//     i++;
//     }
//   }).fail(function(error) {
//     console.log(error.responseJSON.message);
//   });
//
// };
