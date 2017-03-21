'use strict';
var myProjects = [];


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
    $('.my-articles').fadeOut();
  });
};

function showPortfolio(){
  $('#projectclick').on('click', function(){
    $('.my-articles').delay(500).fadeIn();
    $('.about-me').fadeOut();
  });
}

function hideOnLoad(){
  $('.my-articles').hide();
  $('.about-me').hide();
}

hideOnLoad();
showHome();
showAbout();
showPortfolio();

myProjects.forEach(function(a) {
  $('.my-articles').append(a.toHtml());
});
