'use strict';

PortfolioData.prototype.createImage = function(i) {
  var imageEl = document.createElement('img');
  return imageEl;
};

PortfolioData.prototype.toHtml = function() {
  var $newProject = $('article.about-me').clone().removeClass('about-me');
  $newProject.find('h3').text(this.projName);
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
    $('article.my-projects').fadeOut();
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
