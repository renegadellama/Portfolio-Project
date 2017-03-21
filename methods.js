'use strict';
var myProjects = [];

PortfolioData.prototype.createImage = function(i) {
  var imageEl = document.createElement('img');
  return imageEl;
};

PortfolioData.prototype.toHtml = function() {
  var source = $('#project-template').text();
  var templateRender = Handlebars.compile(source);

  return (templateRender(this));
};

projects.forEach(function(projectObject){
  myProjects.push(new PortfolioData(projectObject));
});

function showHome(){
  $('#homeclick').on('click', function(){
    $('.about-me').fadeOut();
    $('.my-projects').fadeOut();
  });
}

function showAbout(){
  $('#aboutclick').on('click', function(){
    $('.about-me').delay(500).fadeIn();
    $('.my-projects').fadeOut();
  });
};

function showPortfolio(){
  $('#projectclick').on('click', function(){
    $('.my-projects').delay(500).fadeIn();
    $('.about-me').fadeOut();
  });
}

function hideOnLoad(){
  $('.my-projects').hide();
  $('.about-me').hide();
}

hideOnLoad();
showHome();
showAbout();
showPortfolio();

myProjects.forEach(function(a) {
  $('.my-articles').append(a.toHtml());
});
