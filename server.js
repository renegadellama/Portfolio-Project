'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('./'));

app.get('/', function(request, response){
  response.sendFile('index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log(`Server running on ${PORT}`);
});

// function proxyGitHub(request, response) {
//   console.log('Routing GitHub request for', request.params[0]);
//   (requestProxy({
//     url: `https://api.github.com/${request.params[0]}`,
//     headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
//   }))(request, response);
// }
