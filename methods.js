'use strict';
var source = $('.my-projects').html();
var template = Handlebars.compile(source);

PortfolioData.prototype.createImage = function(i) {
  var imageEl = document.createElement('img');
  return imageEl;
};

PortfolioData.prototype.toHtml = function() {
  var $newProject = $('script.my-projects').clone().removeClass('my-projects');
  $newProject.find('.my-title').text(this.projName);
  $newProject.find('.project-image').attr('src', this.icon);
  $newProject.find('.description').text(this.description);
  $newProject.find('.date').text(this.date);
  return $newProject;
};

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
