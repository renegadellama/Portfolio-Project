'use strict';
PortfolioData.all = [];
//
// function makeStrings(){
//   $.getJSON('Server/stringData.json').then(function(data){
//     localStorage = JSON.stringify(data);
//   });
// }
function makeStrings(){
  $.getJSON('/Server/stringData.json', function(myData){
    myData.forEach(function(projectObject){
      myProjects.push(new PortfolioData(projectObject));
      myProjects.forEach(function(x) {
        $('.my-articles').append(x.toHtml());
      });
    });
  console.log(myData);
  });
};


  // localStorage.setItem('projects', JSON.stringify(projects));
  // datastorage.json.push(localStorage);

// localStorage.setItem('testObject', JSON.stringify(testObject));
// stringTheData function(){
//   JSON.stringify('sourceData.js');
// }
//
// PortfolioData.loadAll = function(rawData) {
//   rawData.sort(function(a,b) {
//     return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
//   });
//
//   rawData.forEach(function(ele) {
//     PortfolioData.all.push(new PortfolioData(ele));
//   });
// };
//
// PortfolioData.fetchAll = function() {
//   if (localStorage) {
//     var newData = JSON.parse(localStorage.rawData);
//
//     PortfolioData.loadAll(newData);
//       articleView.initIndexPage();
//   } else {
//     $.getJSON('/Server/stringData.json').then(function(data){
//       localStorage.rawData =  JSON.stringify(data);
//       var newData = JSON.parse(localStorage.rawData);
//       PortfolioData.loadAll(newData).toHtml();
//       articleView.initIndexPage();
//     });
//   }
// };

makeStrings();
